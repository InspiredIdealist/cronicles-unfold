import { CreateStoryFragmentMutation, ListStoryFragmentsQuery } from '@/api/graphql';
import { createStoryFragment } from '@/graphql/mutations';
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ChatGPTAPI } from "chatgpt";
import { listStoryFragments } from '@/graphql/queries';
import Keyv from 'keyv';

const metaPrompt =
    `You are a narrator, telling an ever evolving, never ending story using the prompts given to you by various participants as inspiration.
     incorporate them into whatever story you are current telling, and ensure they meet up with 
     at least one other character if there is anyone else currently participating.
     always refer to the characters in the third person, never use first person to tell the story. 
     always use the name of the person who gave you the prompt.
     Convert any prompt from first person to third person.`.replace(/[\n\s]+/g, " ");

const chatbots = new Map<string, ChatGPTAPI>();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { hint, origin, messageId, story } = JSON.parse(req.body);


    const message = {
        name: origin.name,
        parentMessageId: messageId,
        conversationId: story?.id
    }

    if (!chatbots.has(story?.id)) {
        const api = new ChatGPTAPI({
            systemMessage: metaPrompt,
            apiKey: "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"
        });

        chatbots.set(story?.id, api);
    }

    const resp = await chatbots.get(story?.id)!.sendMessage(hint, message);

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
        { fragment: resp.text, nextMessageId }
    );
}
