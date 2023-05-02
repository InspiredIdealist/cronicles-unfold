import { withAuthenticator } from '@aws-amplify/ui-react';

export function App({ }: any) {

    return (
        <>
            <p>I Certainly Hope You Know The Right URL...</p>
        </>
    )
}

// export function App({ signOut, user }: any) {
// 
//     return (
//         <Grid
//             columnGap="0.5rem"
//             rowGap="0.5rem"
//             templateColumns="1fr 1fr 1fr"
//             templateRows="3fr 1fr"
//         >
//             <Card
//                 columnStart="1"
//                 columnEnd="2"
//                 backgroundColor={"orange"}
//                 textAlign={"center"}
//             >
//                 <h1>Stories</h1>
//                 <Link href="/stories">All</Link>
//                 <Divider orientation='horizontal' />
//                 <Link href="/stories/new">New</Link>
//             </Card>
//             <Card
//                 columnStart="2"
//                 columnEnd="3"
//                 backgroundColor={"green"}
//                 textAlign={"center"}
//             >
//                 <h1>Authors</h1>
//                 <Link href="/authors">All</Link>
//                 <Divider orientation='horizontal' />
//                 <Link href="/authors/new">New</Link>
//             </Card>
//             <Card
//                 columnStart="3"
//                 columnEnd="-1"
//                 backgroundColor={"aqua"}
//                 textAlign={"center"}
//             >
//                 <h1>Characters</h1>
//                 <Link href="/characters">All</Link>
//                 <Divider orientation='horizontal' />
//                 <Link href="/characters/new">New</Link>
//             </Card>
// 
//         </Grid>
//     );
// }

export default withAuthenticator(App);
