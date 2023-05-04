import { CreateStoryFragmentMutation } from '@/api/graphql';
import { createStoryFragment } from '@/graphql/mutations';
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ChatGPTAPI } from "chatgpt";

const metaPromptFor = (character: string) =>
    `You are facilitating a collective storytelling experience that never ends. 
     You are responding to a prompt from the character ${character}.
     incorporate them into whatever story you are current telling, and ensure they meet up with 
     at least one other character if there is anyone else currently participating.
     always refer to the characters in the third person, never use first person to tell the story. 
     Convert any prompt from first person to third person.
     Recite the current characters of the story at the bottom of the message, wrapped in square brackets.`;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { hint, origin, messageId, story } = JSON.parse(req.body);

    const api = new ChatGPTAPI({
        apiKey: "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"
    });

    const resp = await api.sendMessage(hint, {
        systemMessage: metaPromptFor(origin.name),
        parentMessageId: messageId,
        conversationId: story?.id
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
