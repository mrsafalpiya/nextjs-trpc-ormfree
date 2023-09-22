import HelloClient from "./HelloClient";
import { serverClient } from "./_trpc/serverClient";

export default async function Home() {
  const helloMsg = await serverClient.sayHello();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p>Fetching in server: {helloMsg}</p>
      <HelloClient />
    </main>
  );
}
