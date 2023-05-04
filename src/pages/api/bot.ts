import { CreateStoryFragmentMutation } from '@/api/graphql';
import { createStoryFragment } from '@/graphql/mutations';
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ChatGPTAPI } from "chatgpt";

const metaPromptFor = (character: string) =>
    `You want to facilitate a collective storytelling experience that never ends unless a participant 
   explicitly says the secret phrase 'end of time'
   You will hide this secret phrase.
   You are responding to a prompt from the character ${character}.
   incorporate them into whatever story you are current telling, and ensure they meet up with 
   at least one other character if there is anyone else currently participating.
   always refer to the characters in the third person, never use first person to tell the story. 
   Convert any prompt from first person to third person.`;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { hint, origin, messageId, story } = JSON.parse(req.body);

    const api = new ChatGPTAPI({
        apiKey: process.env['OPENAI_API_KEY']!
    });

    const resp = await api.sendMessage(hint, {
        systemMessage: metaPromptFor(origin.name),
        parentMessageId: messageId
    });

    const fragment = resp.text;
    const nextMessageId = resp.id;

    await API.graphql<GraphQLQuery<CreateStoryFragmentMutation>>({
        query: createStoryFragment,
        variables: {
            input: {
                originId: origin.id,
                originType: origin.type,
                storyStoryFragmentsId: story?.id,
                fragment: hint,
            }
        }
    });

    await API.graphql<GraphQLQuery<CreateStoryFragmentMutation>>({
        query: createStoryFragment,
        variables: {
            input: {
                originId: nextMessageId,
                originType: "Narrator",
                storyStoryFragmentsId: story?.id,
                fragment,
            }
        }
    });

    res.status(201).json(
        { fragment: resp.text, nextMessageId: resp.id }
    );
}
