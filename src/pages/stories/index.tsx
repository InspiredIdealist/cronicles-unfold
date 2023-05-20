import { ListStoriesQuery } from '@/graphql/graphql';
import { listStories } from '@/graphql/queries';
import StoryCard from '@/ui-components/StoryCard';
import { GraphQLQuery } from '@aws-amplify/api';
import { Flex } from '@aws-amplify/ui-react';
import { API, withSSRContext } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export async function getServerSideProps({ req }: any) {

    const { Auth } = withSSRContext({ req });
    const user = await Auth.currentAuthenticatedUser();

    return {
        props: {
            character: {
                id: user.attributes.sub,
                name: user.attributes.preferred_username
            }
        }
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
                onClick={() => router.push(`/stories/${s.id}`)}
            />
        )
    });

    console.log(JSON.stringify(character));

    return (<>
        <Flex>
            {links}
        </Flex>
    </>);
}
