import { CreateStoryMutation, ListStoriesQuery } from '@/graphql/graphql';
import { listStories } from '@/graphql/queries';
import { GraphQLQuery, graphqlOperation } from '@aws-amplify/api';
import { TabItem, Tabs, useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Story } from '@/components/story';
import NewStory from '@/ui-components/NewStory';
import { createStory } from '@/graphql/mutations';

export function App() {

    const { user } = useAuthenticator((ctx) => [ctx.user]);

    const character = {
        id: user.attributes?.sub,
        name: user.attributes?.preferred_username
    };

    const [stories, setStories] = useState<any[]>([]);
    const [story, setActiveStory] = useState<any>();
    const [newStory, setNewStoryMode] = useState<boolean>(false);

    useEffect(() => {
        API
            .graphql<GraphQLQuery<ListStoriesQuery>>(graphqlOperation(listStories))
            .then(s => s?.data?.listStories?.items)
            .then(stories => setStories(stories as any[]));
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
                        lastAddedToAt: new Date().toISOString()
                    }
                }
            });

            const storyData = newStory.data?.createStory!;

            await fetch("/api/bot", {
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
                    storyId: storyData.id
                })
            });

            setActiveStory(storyData);
        };

        storyView = (<NewStory onSubmit={async (s) => {
            await submit({ name: s.Field0, author: character, genesisPrompt: s.Field1 });
            setNewStoryMode(false);
        }}
            onCancel={() => setNewStoryMode(false)}
        />);
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
