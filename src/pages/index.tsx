import { Expander, ExpanderItem } from '@aws-amplify/ui-react';
import { getPosts } from './api/posts';

export async function getStaticProps() {
    const posts = await getPosts();
    return { props: { posts } };
}

export default function Home({ posts }: any) {

    const frags = posts.map(({ userId, body, title }: any, i: number) => (
        <ExpanderItem value={userId} key={i} title={title}>
            {body}
        </ExpanderItem>
    ));

    return (
        <Expander type="multiple">
            {frags}
        </Expander>
    );
}
