/** Types generated for queries found in "src/backend-trpc/services/todo/index.ts" */

/** 'AllTodosSql' parameters type */
export type IAllTodosSqlParams = void;

/** 'AllTodosSql' return type */
export interface IAllTodosSqlResult {
  id: number;
  info: string;
  title: string;
}

/** 'AllTodosSql' query type */
export interface IAllTodosSqlQuery {
  params: IAllTodosSqlParams;
  result: IAllTodosSqlResult;
}
