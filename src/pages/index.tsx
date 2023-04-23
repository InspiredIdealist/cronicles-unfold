import { Expander, ExpanderItem } from '@aws-amplify/ui-react';

export default function Home() {

    const frags = Array(100).fill(0).map((_, i) => (
        <ExpanderItem value={i.toString()} key={i} title={`NUMBA ${i}`}>
            {i}
        </ExpanderItem>
    ));

    return (
        <Expander type="multiple">
            {frags}
        </Expander>
    );
}
