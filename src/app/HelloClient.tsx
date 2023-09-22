"use client";

import { trpc } from "@/app/_trpc/client";

export default function HelloClient() {
  const helloMsg = trpc.sayHello.useQuery();

  return (
    <div>
      <p>Fetching from client: {helloMsg.data}</p>
    </div>
  );
}
