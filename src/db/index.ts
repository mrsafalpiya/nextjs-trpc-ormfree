import { Client } from "pg";

declare global {
  // eslint-disable-next-line no-var
  var cachedClient: Client;
}

let client: Client;
if (process.env.NODE_ENV == "production") {
  client = new Client({
    connectionString: process.env.PGURI || "",
  });
  client.connect();
} else {
  if (!global.cachedClient) {
    global.cachedClient = new Client({
      connectionString: process.env.PGURI || "",
    });
    global.cachedClient.connect();
  }
  client = global.cachedClient;
}

export const db = client;
