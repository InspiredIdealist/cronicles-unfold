import { CreateCharacterInput, CreateCharacterMutation } from "@/api/graphql";
import { createCharacter } from "@/graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { TextField, useAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useRouter } from "next/router";
import { useState } from "react"

export default function NewCharacter() {

    const router = useRouter();
    const { user } = useAuthenticator();

    const [character, setCharacter] = useState<{ name?: string }>({});

    const submit = async () => {
        await API.graphql<GraphQLQuery<CreateCharacterMutation>>({
            query: createCharacter,
            variables: {
                input: {
                    name: character.name,
                    authorID: user.attributes!.sub!,
                    id: user.attributes!.sub!
                } as CreateCharacterInput
            }
        });

        router.back();
    };

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault()
                await submit()
            }}>
                <TextField
                    label="Name"
                    onChange={e => setCharacter(a => ({ ...a, name: e.target.value }))}
                />
            </form>
        </>
    );
}
