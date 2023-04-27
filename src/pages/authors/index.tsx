import { ListAuthorsQuery } from "@/api/graphql";
import { listAuthors } from "@/graphql/queries";
import HeroLayout1 from "@/ui-components/HeroLayout1";
import { GraphQLQuery } from "@aws-amplify/api";
import { Flex } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Authors() {

    const router = useRouter();
    const [authors, setAuthors] = useState<any[]>([]);

    useEffect(() => {
        API.graphql<GraphQLQuery<ListAuthorsQuery>>({
            query: listAuthors
        }).then(resp => resp.data?.listAuthors?.items)
            .then(a => { setAuthors(a!) });
    }, []);

    const authorCards = authors.map(a => {
        return (
            <HeroLayout1
                key={a.id}
                name={a.name}
                about="tbd"
                onSelect={
                    () => router.push(`/stories?authorId=${a.id}`)
                }
            />
        )
    });

    return (
        <>
            <Flex>
                {authorCards}
            </Flex>
        </>
    );
}

