import { Button, Divider, Expander, ExpanderItem, FieldGroupIcon, Flex, TextField, View } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { listStoryFragments } from '@/graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { Character, CreateStoryFragmentInput, CreateStoryFragmentMutation, ListStoryFragmentsQuery, StoryFragment } from '@/api/graphql';
import { useState } from 'react';
import { createStoryFragment } from '@/graphql/mutations';

export async function getStaticProps(context: any) {
    const posts = await API.graphql<GraphQLQuery<ListStoryFragmentsQuery>>({ query: listStoryFragments });
    return {
        props: {
            authorID: "c6a6d403-032e-4584-9276-769108738cfa", // Luke!
            storyID: "1",
            fragments: posts.data?.listStoryFragments?.items
        }
    };
}

export default function Home({ authorID, storyID, fragments }: any) {

    const [prompt, setPrompt] = useState<string>("");

    const frags = fragments.map(({ id, fragment, authorID, prompt }: StoryFragment) => (
        <ExpanderItem value={authorID} key={id} title={fragment}>
            {prompt}
        </ExpanderItem>
    ));

    return (
        <>
            <Flex direction="column" gap="8rem">
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
                                console.log("button clicked!!!");
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
                            }}>Send</Button>
                        }
                    />
                </View>
            </Flex>
        </>
    );
}
