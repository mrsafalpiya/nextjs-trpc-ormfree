import { todoRouter } from "./services/todo";
import { router } from "./trpc";

export const appRouter = router({
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
