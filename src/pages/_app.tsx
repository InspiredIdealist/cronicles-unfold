import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify';
import config from "../aws-exports"
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure({ ...config, ssr: true })

export function App({ Component, pageProps }: AppProps) {
    return (
        <Authenticator.Provider>
            <Component {...pageProps} />
        </Authenticator.Provider>
    );
}

export default App;

