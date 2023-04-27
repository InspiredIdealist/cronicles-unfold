import { CreateStoryFragmentMutation, CreateStoryMutation, GetAuthorQuery } from "@/api/graphql";
import { createStory, createStoryFragment } from "@/graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { Button, TextField } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useState } from "react";
import { ask } from "../api/bot";
import { getAuthor } from "@/graphql/queries";
import { useRouter } from "next/router";

export async function getServerSideProps(context: any) {

    const author = await API.graphql<GraphQLQuery<GetAuthorQuery>>({
        query: getAuthor,
        variables: {
            id: context.query["authorId"]
        }
    });

    return {
        props: {
            author: author.data?.getAuthor
        }
    };
}

export default function NewStory({ author }: { author: { name: string, id: string } }) {

    const router = useRouter();
    const [story, setStory] = useState<{ name?: string, genesisPrompt?: string }>({});

    const submit = async () => {

        const genesisFragment = await ask(story.genesisPrompt!, author.name!, [author.name!]);

        const newStory = await API.graphql<GraphQLQuery<CreateStoryMutation>>({
            query: createStory,
            variables: {
                input: {
                    name: story.name,
                    lastAddedToAt: new Date(),
                    storyAuthorId: author.id,
                    currentMessageId: genesisFragment.nextMessageId,
                    storyRootId: genesisFragment.nextMessageId
                }
            }
        });

        const storyData = newStory.data?.createStory;

        await API.graphql<GraphQLQuery<CreateStoryFragmentMutation>>({
            query: createStoryFragment,
            variables: {
                input: {
                    fragment: genesisFragment.fragment,
                    storyID: storyData?.id,
                    prompt: story.genesisPrompt,
                    authorID: author.id
                }
            }
        });

        router.push(`/stories/${storyData?.id}?character=${author.name}`);
    };

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault();
                await submit();
            }}>
                <TextField
                    label="Name"
                    onChange={e => setStory(s => ({ ...s, name: e.target.value }))}
                />
                <TextField
                    label="Starting Tale"
                    onChange={e => setStory(s => ({ ...s, genesisPrompt: e.target.value }))}
                />
                <Button type="submit">Weave a Tale</Button>
            </form >
        </>
    );

}
