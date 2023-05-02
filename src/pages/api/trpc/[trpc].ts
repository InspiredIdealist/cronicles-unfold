import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/routers/_app';

// @see https://nextjs.org/docs/api-routes/introduction
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
});
