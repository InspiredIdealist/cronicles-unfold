import Link from 'next/link';

export default function Home() {

    return (<>
        <h1><Link href="/stories?character=luke">CLICK ME</Link></h1>
    </>
    );
}
