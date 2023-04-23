import { Expander, ExpanderItem } from '@aws-amplify/ui-react';

export async function getStaticProps() {
    const resp = await fetch(`${process.env.BASE_URL}/api/posts`)
    const posts = await resp.json();
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
