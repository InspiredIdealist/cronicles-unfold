import { GetCharacterQuery, ListStoriesQuery } from '@/api/graphql';
import { getCharacter, listStories } from '@/graphql/queries';
import StoryCard from '@/ui-components/StoryCard';
import { GraphQLQuery } from '@aws-amplify/api';
import { Flex } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export async function getServerSideProps(context: any) {

    const id = context.query.characterId;

    const character = await API.graphql<GraphQLQuery<GetCharacterQuery>>({
        query: getCharacter,
        variables: { id }
    });

    return {
        props: { character }
    };
}

export default function Stories({ character }: any) {

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
                onClick={() => router.push(`/stories/${s.id}?character=${character.name}`)}
            />
        )
    });


    return (
        <Flex>
            {links}
        </Flex>
    );
}
