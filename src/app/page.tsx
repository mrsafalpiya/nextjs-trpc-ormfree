import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const todos = await serverClient.todo.getAll();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p>{JSON.stringify(todos)}</p>
    </main>
  );
}
