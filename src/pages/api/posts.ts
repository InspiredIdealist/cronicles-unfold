// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    _: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const posts = await getPosts();
    res.status(200).json(posts);
}

export async function getPosts() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsJson = await posts.json();
    return postsJson;
}
