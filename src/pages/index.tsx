import { CreateStoryMutation, ListStoriesQuery } from '@/api/graphql';
import { listStories } from '@/graphql/queries';
import { GraphQLQuery, graphqlOperation } from '@aws-amplify/api';
import { TabItem, Tabs, withAuthenticator } from '@aws-amplify/ui-react';
import { API, withSSRContext } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Story } from './stories/[id]';
import { useRouter } from 'next/router';
import NewStory from '@/ui-components/NewStory';
import { createStory } from '@/graphql/mutations';

export async function getServerSideProps({ req }: any) {

    const { Auth } = withSSRContext({ req });
    const user = await Auth.currentAuthenticatedUser();

    const character = {
        id: user.attributes.sub,
        name: user.attributes.preferred_username
    };

    const stories = await API
        .graphql<GraphQLQuery<ListStoriesQuery>>(graphqlOperation(listStories))
        .then(s => s?.data?.listStories?.items)

    return {
        props: {
            character,
            stories
        }
    };
}


export function App({ character, stories }: any) {

    const router = useRouter();
    const [story, setActiveStory] = useState<any>();
    const [newStory, setNewStoryMode] = useState<boolean>(false);

    useEffect(() => {
    }, []);

    const tabs = stories.map((story: any) => (
        <TabItem title={story.name} key={story.id} onClick={() => setActiveStory(story)} />
    ));

    let storyView = (<p>Select one...</p>);

    if (story)
        storyView = (<Story story={story} character={character} />);

    if (newStory) {

        const submit = async ({ name, author, genesisPrompt }: any) => {

            const newStory = await API.graphql<GraphQLQuery<CreateStoryMutation>>({
                query: createStory,
                variables: {
                    input: {
                        name,
                        lastAddedToAt: new Date().toISOString(),
                        // TODO: eliminate these useless fields
                        currentMessageId: '1111',
                        storyRootId: '111'
                    }
                }
            });

            const storyData = newStory.data?.createStory!;

            await fetch("/api/bot-v2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nextPrompt: genesisPrompt,
                    origin: {
                        id: author.id,
                        type: "Author",
                        name: author.name
                    },
                    story: storyData
                })
            });

            setActiveStory(storyData);
        };

        storyView = (<NewStory onSubmit={async (s) => {
            await submit({ name: s.Field0, author: character, genesisPrompt: s.Field1 });
            setNewStoryMode(false);
        }} />);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Tabs style={{ flexDirection: 'column', position: 'sticky' }}>
                    {tabs}
                    <TabItem title="+" onClick={() => setNewStoryMode(true)} />
                </Tabs>
            </div>
            <div>
                {storyView}
            </div>
        </div>
    )
}

export default withAuthenticator(App);
