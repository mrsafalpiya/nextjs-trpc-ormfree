import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const todos = await serverClient.todo.getAll();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {todos.map((todo) => (
        <p key={todo.id}>
          {todo.title} - {todo.info}
        </p>
      ))}
    </main>
  );
}
