import { CreateStoryFragmentInput, CreateStoryFragmentMutation, CreateStoryInput, CreateStoryMutation } from "@/api/graphql";
import { createStory, createStoryFragment } from "@/graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { Button, TextField } from "@aws-amplify/ui-react";
import { API, withSSRContext } from "aws-amplify";
import { useState } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps({ req }: any) {

    const { Auth } = withSSRContext({ req });
    const user = await Auth.currentAuthenticatedUser();

    return {
        props: {
            author: {
                name: user.attributes.preferred_username,
                id: user.attributes.sub
            }
        }
    };
}

export default function NewStory({ author }: { author: { name: string, id: string } }) {

    const router = useRouter();
    const [story, setStory] = useState<{ name?: string, genesisPrompt?: string }>({});

    const submit = async () => {

        const newStory = await API.graphql<GraphQLQuery<CreateStoryMutation>>({
            query: createStory,
            variables: {
                input: {
                    name: story.name,
                    lastAddedToAt: new Date().toISOString(),
                    // TODO: eliminate these useless fields
                    currentMessageId: '1111',
                    storyRootId: '111'
                } as CreateStoryInput
            }
        });

        const storyData = newStory.data?.createStory!;

        await fetch("/api/bot", {
            method: "POST",
            body: JSON.stringify({
                hint: story.genesisPrompt,
                origin: {
                    id: author.id,
                    type: "Author",
                    name: author.name
                },
                story: storyData
            })
        });

        router.push(`/stories/${storyData?.id}`);
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
