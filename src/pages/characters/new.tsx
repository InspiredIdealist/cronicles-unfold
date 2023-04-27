import { CreateCharacterInput, CreateCharacterMutation } from "@/api/graphql";
import { createCharacter } from "@/graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { TextField } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useRouter } from "next/router";
import { useContext, useState } from "react"

export default function NewCharacter() {

    const router = useRouter();
    const [character, setCharacter] = useState<{ name?: string }>({});

    const submit = async () => {
        const newCharacter = await API.graphql<GraphQLQuery<CreateCharacterMutation>>({
            query: createCharacter,
            variables: {
                input: {
                    name: character.name
                } as CreateCharacterInput
            }
        });

        router.push(newCharacter.data?.createCharacter?.id!);

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
