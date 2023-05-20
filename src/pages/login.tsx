import { Authenticator } from "@aws-amplify/ui-react";

export default function Login() {

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user?.username || "anon"}</h1>
                    <button onClick={signOut}>Sign out</button>
                </main>
            )}
        </Authenticator>
    );
}
