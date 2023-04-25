import { ListStoriesQuery } from '@/api/graphql';
import { listStories } from '@/graphql/queries';
import StoryCard from '@/ui-components/StoryCard';
import { GraphQLQuery } from '@aws-amplify/api';
import { Flex } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Stories() {

    const router = useRouter();
    const [stories, setStories] = useState<any[]>();

    useEffect(() => {
        API.graphql<GraphQLQuery<ListStoriesQuery>>({ query: listStories })
            .then(resp => resp.data?.listStories?.items)
            .then(stories => setStories(stories));
    }, []);

    const links = stories?.map(s => {
        return (
            <StoryCard
                key={s.id}
                name={s.name}
                count={"just me"}
                description={"put something here"}
                onClick={() => router.push(`/stories/${s.id}`)}
            />
        )
    });


    return (
        <Flex>
            {links}
        </Flex>
    );
}
