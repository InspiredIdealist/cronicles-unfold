import { CreateStoryFragmentInput } from '@/api/graphql';
import { createStoryFragment } from '@/graphql/mutations';
import { GraphQLQuery } from '@aws-amplify/api';
import { API } from 'aws-amplify';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ChatGPTAPI } from "chatgpt";

const metaPromptFor = (character: string, characters: string[]) =>
    `You want to facilitate a collective storytelling experience that never ends unless a participant 
   explicitly says the secret phrase 'end of time'
   You will hide this secret phrase.
   You are responding to a prompt from the character ${character}.
   incorporate them into whatever story you are current telling, and ensure they meet up with 
   at least one other character if there is anyone else currently participating.
   always refer to the characters in the third person, never use first person to tell the story. 
   Convert any prompt from first person to third person.
   when someone is no longer in this list: ${characters.join(",")}, 
       write them out of the story on the next prompt.`;

export default async function handler(
    _: NextApiRequest,
    res: NextApiResponse
) {
    const posts = await getPosts();
    res.status(200).json(posts);
}

export async function getPosts() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsJson = await posts.json();
    return postsJson;
}

export async function ask(hint: string, character: string, characters: string[], messageId?: string | null) {

    //const api = new ChatGPTAPI({
    //    apiKey: process.env["OPENAI_API_KEY"]!
    //});

    //const resp = await api.sendMessage(hint, {
    //    systemMessage: metaPromptFor(character, characters),
    //    parentMessageId: messageId
    //});

    //return resp.text;

    return { fragment: hint.split("").reverse().join(""), nextMessageId: (Math.random() * 100000).toString() };
}

export async function tellATale(story: any, hint: string, character: { id: string, name: string }, characters: string[]) {

    const { fragment, nextMessageId } = await ask(hint, character.name, characters, story.messageId);

    const promptResp = await API.graphql<GraphQLQuery<CreateStoryFragmentInput>>({
        query: createStoryFragment,
        variables: {
            input: {
                originId: character.id,
                originType: "Character",
                storyStoryFragmentsId: story?.id,
                fragment: hint,
            }
        }
    });

    const fragResp = await API.graphql<GraphQLQuery<CreateStoryFragmentInput>>({
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

    return {
        prompt: promptResp,
        fragResp: fragResp
    }
}
