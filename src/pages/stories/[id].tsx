import { Button, Divider, Expander, ExpanderItem, FieldGroupIcon, Flex, TextField, View } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { CreateStoryFragmentInput, GetStoryQuery, ListStoryFragmentsQuery } from '@/api/graphql';
import { useState } from 'react';
import { createStoryFragment } from '@/graphql/mutations';
import { getStory } from '@/graphql/queries';
import { listStoryFragments } from '@/graphql/queries';
import { useRouter } from 'next/router';

export default function Storyline() {
    const router = useRouter();
    const id: string | string[] = router.query.id!;

    const story = await API.graphql<GraphQLQuery<GetStoryQuery>>({
        query: getStory,
        variables: { id: id.toString() }
    }).then(s => s.data?.getStory);

    const fragments = await API.graphql<GraphQLQuery<ListStoryFragmentsQuery>>({
        query: listStoryFragments,
        variables: {
            filter: { id }
        }
    }).then(f => f.data?.listStoryFragments?.items);

    const [prompt, setPrompt] = useState<string>("");

    const frags = fragments!.map((frag) => (
        <ExpanderItem value={frag!.authorID} key={frag!.id} title={frag!.fragment}>
            {frag!.prompt}
        </ExpanderItem>
    ));

    return (
        <>
            <Flex direction="column" gap="8rem">
                <h1>{story?.id}</h1>
                <Divider orientation='horizontal' />
                <div>
                    <Expander type="multiple">
                        {frags}
                    </Expander>
                    <Divider orientation='horizontal' label="current" />
                </div>
                <div />
                <View
                    className="bottom-0 w-full fixed"
                    backgroundColor="var(--amplify-colors-white)"
                    borderRadius="6px"
                    border="1px solid var(--amplify-colors-black)"
                    boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
                    color="var(--amplify-colors-blue-60)"
                    maxWidth="100%"
                    padding="1rem"
                >
                    <TextField
                        label=""
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                        type="text"
                        labelHidden={true}
                        placeholder="what happened next?"
                        innerStartComponent={
                            <FieldGroupIcon>
                                📇
                            </FieldGroupIcon>
                        }
                        outerEndComponent={
                            <Button onClick={async () => {
                                await API.graphql<GraphQLQuery<CreateStoryFragmentInput>>({
                                    query: createStoryFragment,
                                    variables: {
                                        input: {
                                            prompt,
                                            authorID,
                                            storyID,
                                            fragment: "thinking..."
                                        }
                                    }
                                })
                                setPrompt("");
                                setStoryFragments(prev => {
                                    prev.push(
                                })


                            }}>Send</Button>
                        }
                    />
                </View>
            </Flex>
        </>
    );
}xport default function Story() {
}
