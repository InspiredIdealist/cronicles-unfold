import { Expander, ExpanderItem } from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
export default function Home() {

    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            });
    });

    if (isLoading) return (<h1>loading.... </h1>);

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
