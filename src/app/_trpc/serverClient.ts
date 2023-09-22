import { httpBatchLink } from "@trpc/client";

import { appRouter } from "@/backend-trpc";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});
