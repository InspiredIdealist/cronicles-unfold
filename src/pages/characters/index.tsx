import { ListCharactersQuery } from "@/api/graphql";
import { listCharacters } from "@/graphql/queries";
import HeroLayout1 from "@/ui-components/HeroLayout1";
import { GraphQLQuery } from "@aws-amplify/api";
import { Flex } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Characters() {

    const router = useRouter();
    const [characters, setCharacters] = useState<any[]>([]);

    useEffect(() => {
        API.graphql<GraphQLQuery<ListCharactersQuery>>({
            query: listCharacters
        }).then(resp => resp.data?.listCharacters?.items)
            .then(a => { setCharacters(a!) });
    }, []);

    const characterCards = characters.map(a => {
        return (
            <HeroLayout1
                key={a.id}
                name={a.name}
                about="tbd"
                onSelect={
                    () => router.push(`/stories?characterId=${a.id}`)
                }
            />
        )
    });

    return (
        <>
            <Flex>
                {characterCards}
            </Flex>
        </>
    );
}

