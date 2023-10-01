import { appRouter } from "@/backend-trpc";

export const serverClient = appRouter.createCaller({});
