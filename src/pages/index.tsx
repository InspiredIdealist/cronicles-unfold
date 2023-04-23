import { Button, Divider, Expander, ExpanderItem, FieldGroupIcon, Flex, TextField, View } from '@aws-amplify/ui-react';
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
        <>
            <Flex direction="column" gap="8rem">
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
                    <TextField
                        label=""
                        type="text"
                        labelHidden={true}
                        placeholder="what happened next?"
                        innerStartComponent={
                            <FieldGroupIcon>
                                📇
                            </FieldGroupIcon>
                        }
                        outerEndComponent={
                            <Button onClick={() => { }}>Send</Button>
                        }
                    />
                </View>
            </Flex>
        </>
    );
}
