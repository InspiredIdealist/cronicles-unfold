// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsJson = await posts.json();
    res.status(200).json(postsJson);
}
