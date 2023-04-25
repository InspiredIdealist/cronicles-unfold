import { Button, Divider, Expander, ExpanderItem, FieldGroupIcon, Flex, Heading, TextField, View } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetStoryQuery, ListStoryFragmentsQuery } from '@/api/graphql';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getStory, listStoryFragments } from '@/graphql/queries';
import { tellATale } from '../api/bot';

export default function Storyline() {
    const router = useRouter();
    const id: any = router.query.id;
    const character: any = router.query.character;
    const [story, setStory] = useState<any>();
    const [fragments, setFragments] = useState<any[]>([]);
    const [prompt, setPrompt] = useState<string>("");

    useEffect(() => {
        if (id)
            API.graphql<GraphQLQuery<GetStoryQuery>>({ query: getStory, variables: { id } })
                .then(s => s.data?.getStory)
                .then(s => {
                    setStory(s as any);
                    API.graphql<GraphQLQuery<ListStoryFragmentsQuery>>({
                        query: listStoryFragments,
                        variables: { filter: { storyID: { eq: id } } }
                    })
                        .then(f => f.data?.listStoryFragments?.items)
                        .then(f => setFragments(f as any[]))
                });
    }, [id]);

    const frags = fragments?.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1).map((frag) => (
        <ExpanderItem value={frag?.authorID} key={frag?.id} title={frag?.fragment}>
            <p>{frag?.prompt}</p>
            <p>{frag?.createdAt}</p>
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
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        const newFrag = await tellATale(story, prompt, character, story.characters);
                        setFragments(prev => prev.concat([newFrag]));
                        setPrompt("");

                    }}>
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
                                <Button type="submit">Send</Button>
                            }
                        />
                    </form>
                </View>
            </Flex>
        </>
    );
}
