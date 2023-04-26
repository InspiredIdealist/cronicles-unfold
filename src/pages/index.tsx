import Link from 'next/link';

export default function Home() {

    return (<>
        <h1><Link href="/stories/new?authorId=luke">CLICK ME 4 NEW TALES</Link></h1>
        <h1><Link href="/stories?character=Luke">CLICK ME 4 ALL TALES</Link></h1>
    </>);
}
