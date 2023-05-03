import { withAuthenticator } from '@aws-amplify/ui-react';

export function App({ }: any) {

    return (
        <>
            <p>I Certainly Hope You Know The Right URL...</p>
        </>
    )
}

export default withAuthenticator(App);
