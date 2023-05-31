import { ListStoryFragmentsQuery } from '@/graphql/graphql';
import { listStoryFragments } from '@/graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';
import { createHash } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

interface Segment {
    prompt: string;
    completion: string;
}

const API_KEY = process.env.OPENAI_API_KEY;
const url = "https://api.openai.com";
const fineTuneUrl = `${url}/v1/fine-tunes`;
const fileUrl = `${url}/v1/files`;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const storyId = req.query.storyId;

    const fragments = await API.graphql<GraphQLQuery<ListStoryFragmentsQuery>>(
        graphqlOperation(
            listStoryFragments,
            { filter: { storyStoryFragmentsId: { eq: storyId } } }
        )
    );

    const promptsAndCompletions = fragments.data?.listStoryFragments?.items
        ?.sort((a, b) => a!.createdAt.localeCompare(b!.createdAt));

}

async function memorize(storyId: string, lines: Segment[]) {
    const fileId = await uploadFile(storyId, lines.join(""));
    const fineTunedModelResult = await fetch(fineTuneUrl, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer $OPENAI_API_KEY`
        },
        body: JSON.stringify({
            "training_file": fileId,
            "model": "ada",
            "n_epochs": 1,
        })
    });

    const fineTunedResp = await fineTunedModelResult.json();

    return fineTunedResp.id;
}

async function uploadFile(storyId: string, content: string) {
    const hash = createHash("sha256");
    hash.update(storyId + content.substring(0, 1024));
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
