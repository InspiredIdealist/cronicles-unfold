import { Button, Divider, FieldGroupIcon, Flex, Heading, TextField, View } from '@aws-amplify/ui-react';
import { API, withSSRContext } from 'aws-amplify';
import { GraphQLQuery, GraphQLSubscription, graphqlOperation } from '@aws-amplify/api';
import { GetStoryQuery, ListStoryFragmentsQuery, ModelStoryFragmentFilterInput, OnCreateStoryFragmentSubscription } from '@/graphql/graphql';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { getStory, listStoryFragments } from '@/graphql/queries';
import { onCreateStoryFragment } from '@/graphql/subscriptions';
import Head from 'next/head';


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

export function Story({ story, character }: any) {
    const [fragments, setFragments] = useState<any[]>([]);
    const [prompt, setPrompt] = useState<string>("");
    const [promptEnabled, isPromptEnabled] = useState<boolean>(true);

    useEffect(() => {
        API.graphql<GraphQLQuery<ListStoryFragmentsQuery>>({
            query: listStoryFragments,
            variables: {
                filter: {
                    storyStoryFragmentsId: { eq: story!.id },
                } as ModelStoryFragmentFilterInput

            }
        }).then(r => r.data?.listStoryFragments)
            .then(async data => {

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
            });
    }, [story]);

    useEffect(() => {

        const subscription = API.graphql<GraphQLSubscription<OnCreateStoryFragmentSubscription>>(
            graphqlOperation(onCreateStoryFragment)
        );

        const token = subscription.subscribe(({ value }) => {
            const data = value.data?.onCreateStoryFragment;
            if (data && data.story?.id === story.id) {
                setFragments(f => [...f, data]);
            }
        });

        // this ensures that only one subscription is kept at a time
        return () => {
            console.log("terminating subscription");
            token.unsubscribe();
        };

    }, [story.id]);


    const frags = fragments?.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1).map((frag) => (
        <View
            key={frag?.id}
            as="div"
            ariaLabel="View example"
            backgroundColor="var(--amplify-colors-white)"
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

    return (
        <>
            <Head>
                <title>{story?.name}</title>
            </Head>
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
                            isPromptEnabled(false);
                            await fetch(`/api/bot-v2/${story.id}`, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    nextPrompt: prompt,
                                    origin: {
                                        id: character.id,
                                        type: "Character",
                                        name: character.name
                                    }
                                })
                            });
                            setPrompt("");
                            isPromptEnabled(true);
                        }
                    }}>
                        <p>wordcount: {fragments.map(f => f.fragment.split(" ").length).reduce((a, b) => a + b, 0)}</p>
                        <TextField
                            label=""
                            value={prompt}
                            onChange={e => setPrompt(e.target.value)}
                            type="text"
                            labelHidden={true}
                            disabled={!promptEnabled}
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
            </Flex >
            <div ref={bottomRef}></div>
        </>
    );
}

export default function Storyline({ character }: any) {
    const router = useRouter();
    const id: any = router.query.id;

    return (<Story story={id} character={character} />);
}

