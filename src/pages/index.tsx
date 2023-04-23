import { Expander, ExpanderItem } from '@aws-amplify/ui-react';

export async function getStaticProps() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await posts.json();
    return { props: { posts: data } };
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
