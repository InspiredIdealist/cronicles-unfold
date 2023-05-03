import { procedure, router } from './trpc';

const appRouter = router({
    userList: procedure
        .query(async () => {
            // Retrieve users from a datasource, this is an imaginary database
            return null;
        }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
