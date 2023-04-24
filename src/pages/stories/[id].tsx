import { Button, Divider, Expander, ExpanderItem, FieldGroupIcon, Flex, Heading, TextField, View } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { CreateStoryFragmentInput, GetStoryQuery, ListStoryFragmentsQuery, ModelStoryFilterInput, StoryFragment } from '@/api/graphql';
import { useEffect, useState } from 'react';
import { createStoryFragment } from '@/graphql/mutations';
import { useRouter } from 'next/router';
import { Story } from '@/models';
import { getStory, listStoryFragments } from '@/graphql/queries';

export default function Storyline() {
    const router = useRouter();
    const id: any = router.query.id;
    const [story, setStory] = useState<any>();
    const [fragments, setFragments] = useState<any[]>([]);
    const [prompt, setPrompt] = useState<string>("");

    useEffect(() => {
        if (id)
            API.graphql<GraphQLQuery<GetStoryQuery>>({ query: getStory, variables: { id } })
                .then(s => s.data?.getStory)
                .then(s => {
                    setStory(s as any);
                    console.log("story with ID: " + id + ":: " + JSON.stringify(s));
                    API.graphql<GraphQLQuery<ListStoryFragmentsQuery>>({
                        query: listStoryFragments,
                        variables: { filter: { storyID: { eq: id } } }
                    })
                        .then(f => f.data?.listStoryFragments?.items)
                        .then(f => setFragments(f as any[]))
                });
    }, [id]);

    const frags = fragments?.map((frag) => (
        <ExpanderItem value={frag?.authorID} key={frag?.id} title={frag?.fragment}>
            {frag?.prompt}
        </ExpanderItem>
    ));

    return (
        <>
            <Flex direction="column" gap="8rem">
                <Heading style={{ textAlign: "center" }} level={1}>{story?.name}</Heading>
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
                                            authorID: story?.storyAuthorId,
                                            storyID: story?.id,
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
