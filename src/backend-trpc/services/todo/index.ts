import { router } from "../../trpc";
import { publicProcedure } from "@/backend-trpc/trpc";

export const todoRouter = router({
  getAll: publicProcedure.query(() => {
    return ["Todo1", "Todo2", "Todo3"];
  }),
});
