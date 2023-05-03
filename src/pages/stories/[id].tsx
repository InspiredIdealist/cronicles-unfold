import { Button, Divider, FieldGroupIcon, Flex, Heading, TextField, View } from '@aws-amplify/ui-react';
import { API, withSSRContext } from 'aws-amplify';
import { GraphQLQuery, GraphQLSubscription } from '@aws-amplify/api';
import { GetStoryQuery, ListStoryFragmentsQuery, ModelStoryFragmentFilterInput, OnCreateStoryFragmentSubscription } from '@/api/graphql';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { getStory, listStoryFragments } from '@/graphql/queries';
import { tellATale } from '../api/bot';
import { onCreateStoryFragment } from '@/graphql/subscriptions';


export async function getServerSideProps({ req }: any) {

    const { Auth } = withSSRContext({ req });
    const user = await Auth.currentAuthenticatedUser();

    const character = {
        id: user.attributes.sub,
        name: user.attributes.preferred_username
    };

    return {
        props: {
            character
        }
    };
}

export default function Storyline({ character }: any) {
    const router = useRouter();
    const id: any = router.query.id;
    const [story, setStory] = useState<any>();
    const [fragments, setFragments] = useState<any[]>([]);
    const [prompt, setPrompt] = useState<string>("");

    useEffect(() => {
        if (id) {
            API.graphql<GraphQLQuery<GetStoryQuery>>({
                query: getStory,
                variables: { id }
            }).then(s => s.data?.getStory)
                .then(async s => {
                    setStory(s);
                    const resp = await API.graphql<GraphQLQuery<ListStoryFragmentsQuery>>({
                        query: listStoryFragments,
                        variables: {
                            filter: {
                                storyStoryFragmentsId: { eq: s!.id },
                            } as ModelStoryFragmentFilterInput

                        }
                    });
                    const data = resp.data?.listStoryFragments;
                    let nextToken = data?.nextToken;
                    let fragments = data?.items;
                    while (nextToken) {
                        const nextResp = await API.graphql<GraphQLQuery<ListStoryFragmentsQuery>>({
                            query: listStoryFragments,
                            variables: {
                                nextToken
                            }
                        });
                        fragments = fragments?.concat(nextResp.data?.listStoryFragments?.items as any);
                        nextToken = nextResp.data?.listStoryFragments?.nextToken;
                    }
                    setFragments(fragments as any[]);
                })

            const subscription = API.graphql<GraphQLSubscription<OnCreateStoryFragmentSubscription>>({
                query: onCreateStoryFragment,
                variables: {
                    filter: {}
                }
            });

            const token = subscription.subscribe(({ value }) => {
                const data = value.data?.onCreateStoryFragment;
                console.log("MAYBE ADD FRAGMENT to " + JSON.stringify(data));
                if (data && data.story?.id === id) {
                    console.log("ADDING FRAGMENT");
                    setFragments(f => [...f, data]);
                }
            });

            console.log("subscription begun!");

            // this ensures that only one subscription is kept at a time
            return () => {
                console.log("terminating subscription");
                token.unsubscribe();
            };
        }
    }, [id]);

    const frags = fragments?.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1).map((frag) => (
        <View
            key={frag?.id}
            as="div"
            ariaLabel="View example"
            backgroundColor="var(--amplify-colors-white)"
            height="3rem"
            maxWidth="100%"
            padding="1rem"
        >
            <div >{frag?.originId === character.id ? "You" : frag?.originType}: {frag?.fragment}</div>
        </View>
    ));

    const bottomRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView()
    }, [fragments]);


    console.log("REPAINTING SCREEN");

    return (
        <>
            <Flex direction="column" gap="8rem">
                <Heading style={{ textAlign: "center" }} level={1}>{story?.name}</Heading>
                <Divider orientation='horizontal' />
                <div>
                    {frags}
                    <Divider orientation='horizontal' label="current" />
                </div>
                <div />
                <View
                    className="bottom-0 w-full fixed"
                    backgroundColor="var(--amplify-colors-white)"
                    borderRadius="3px"
                    border="1px solid var(--amplify-colors-black)"
                    boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
                    color="var(--amplify-colors-blue-60)"
                    maxWidth="100%"
                    padding="1rem"
                >
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        if (prompt && prompt.trim()) {
                            await tellATale(story, prompt.trim(), character, story.characters);
                            setPrompt("");
                        }
                    }}>
                        <p>fragments: {fragments.length}</p>
                        <TextField
                            label=""
                            value={prompt}
                            onChange={e => setPrompt(e.target.value)}
                            type="text"
                            labelHidden={true}
                            placeholder={`so ${character.name}, what happened next?`}
                            innerStartComponent={
                                <FieldGroupIcon>
                                    📇
                                </FieldGroupIcon>
                            }
                            outerEndComponent={
                                <Button type="submit">Send</Button>
                            }
                        />
                    </form>
                </View>
            </Flex>
            <div ref={bottomRef}></div>
        </>
    );
}
