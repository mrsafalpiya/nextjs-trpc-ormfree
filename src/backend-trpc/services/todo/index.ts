import { router } from "../../trpc";
import { publicProcedure } from "@/backend-trpc/trpc";
import { db } from "@/db";
import { sql } from "@pgtyped/runtime";
import { IAllTodosSqlQuery } from "./index.pgtypes";

export const todoRouter = router({
  getAll: publicProcedure.query(async () => {
    const allTodosSql = sql<IAllTodosSqlQuery>`SELECT * FROM todo;`;
    const allTodosResults = await allTodosSql.run(undefined, db);
    return allTodosResults;
  }),
});
