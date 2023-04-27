import { CreateAuthorInput, CreateAuthorMutation } from "@/api/graphql";
import { createAuthor } from "@/graphql/mutations";
import { GraphQLQuery } from "@aws-amplify/api";
import { TextField } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useRouter } from "next/router";
import { useState } from "react"

export default function NewAuthor() {

    const router = useRouter();
    const [author, setAuthor] = useState<{ name?: string }>({});

    const submit = async () => {
        const newAuthor = await API.graphql<GraphQLQuery<CreateAuthorMutation>>({
            query: createAuthor,
            variables: {
                input: {
                    name: author.name
                } as CreateAuthorInput
            }
        });

        router.push(newAuthor.data?.createAuthor?.id!);

    };

    return (
        <>
            <form onSubmit={async (e) => {
                e.preventDefault()
                await submit()
            }}>
                <TextField
                    label="Name"
                    onChange={e => setAuthor(a => ({ ...a, name: e.target.value }))}
                />
            </form>
        </>
    );
}
