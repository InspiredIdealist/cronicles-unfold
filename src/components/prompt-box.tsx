import { Button, FieldGroupIcon, TextField } from '@aws-amplify/ui-react';
import { useState } from 'react';

interface PromptBoxProps {
    characterName: string;
    promptEnabled: boolean;
    onPromptSubmit: (prompt: string) => Promise<void>;
}
export default function PromptBox(
    { characterName, promptEnabled, onPromptSubmit }: PromptBoxProps
) {

    const [prompt, setPrompt] = useState('');

    return (<form onSubmit={async (e) => {
        e.preventDefault();
        const promptClean = prompt.trim();
        if (promptClean) {
            await onPromptSubmit(promptClean);
            setPrompt('');
        }
    }}>
        <TextField
            label=""
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            type="text"
            labelHidden={true}
            disabled={!promptEnabled}
            placeholder={`so ${characterName}, what happened next?`}
            innerStartComponent={
                <FieldGroupIcon>
                    📇
                </FieldGroupIcon>
            }
            outerEndComponent={
                <Button type="submit">Send</Button>
            }
        />
    </form >);
}
