import { CreateStoryFragmentMutation, ListStoryFragmentsQuery, ModelStoryFragmentFilterInput } from '@/api/graphql';
import { createStoryFragment } from '@/graphql/mutations';
import { listStoryFragments } from '@/graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';
import { createHash } from 'crypto';
import { Hash } from 'crypto';
import { ReadStream } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { Readable } from 'stream';

interface Segment {
    prompt: string;
    completion: string;
}

const API_KEY = process.env.OPENAI_API_KEY;
const url = "https://api.openai.com/v1";
const completionUrl = `${url}/v1/chat/completions`;
const fineTuneUrl = `${url}/v1/fine-tunes`;
const fileUrl = `${url}/v1/files`;

const metaPrompt =
    `You are a narrator, telling an ever evolving, never ending story using the prompts given to you by various participants as inspiration.
     incorporate them into whatever story you are current telling, and ensure they meet up with 
     at least one other character if there is anyone else currently participating.
     always refer to the characters in the third person, never use first person to tell the story. 
     always use the name of the person who gave you the prompt.
     Convert any prompt from first person to third person.`.replace(/[\n\s]+/g, " ");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const storyId = req.query.storyId;
    const { nextPrompt, origin } = req.body;



    const fragments = await API.graphql<GraphQLQuery<ListStoryFragmentsQuery>>(
        graphqlOperation(
            listStoryFragments,
            { filter: { storyStoryFragmentsId: { eq: storyId } } }
        ));

    const storySoFar = fragments!.data!
        .listStoryFragments!.items!
        .filter(f => f!.originType === "Narrator")
        .sort((a, b) => a!.createdAt.localeCompare(b!.createdAt))
        .map(f => f!.fragment)
        .join(" ");

    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    };

    const options = {
        "model": `gpt-3.5-turbo`,
        "messages": [
            { "role": "system", "content": metaPrompt },
            { "role": "assistant", "content": storySoFar },
            { "role": "user", "name": origin.name, "content": nextPrompt }
        ],
        "temperature": 0.7
    }

    const response = await fetch(completionUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(options)
    });

    if (!response.ok) {
        const txt = await response.text();
        res.status(response.status).send("errored out: " + txt);
        return;
    }

    const result = await response.json();

    const text = result.choices[0].message.content;

    await API.graphql<GraphQLQuery<CreateStoryFragmentMutation>>({
        query: createStoryFragment,
        variables: {
            input: {
                originId: origin.id,
                originType: origin.type,
                storyStoryFragmentsId: storyId,
                fragment: nextPrompt,
            }
        }
    });

    await API.graphql<GraphQLQuery<CreateStoryFragmentMutation>>({
        query: createStoryFragment,
        variables: {
            input: {
                originId: result.id,
                originType: "Narrator",
                storyStoryFragmentsId: storyId,
                fragment: text,
            }
        }
    });

    res.status(201).end();
}

async function memorize(storyName: string, lines: Segment[]) {
    const fileId = await uploadFile(lines.join(""));
    const fineTunedModelResult = await fetch(fineTuneUrl, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer $OPENAI_API_KEY`
        },
        body: JSON.stringify({
            "training_file": fileId,
            "model": "davinci",
            "n_epochs": 1,
            "suffix": storyName
        })
    });

    const fineTunedResp = await fineTunedModelResult.json();

    return fineTunedResp.id;
}

async function uploadFile(content: string) {
    const hash = createHash("sha256");
    hash.update(content.substring(0, 1024));
    const fileName = hash.digest('base64');
    const formData = new FormData();
    formData.append("file", fileName);
    formData.append('data', content);
    formData.append('purpose', 'fine_tune');
    const fileResult = await fetch(fileUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: formData
    });

    const fileResp = await fileResult.json();

    return fileResp.id;
}
