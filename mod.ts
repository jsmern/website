// mod.ts
import { serve, ServerRequest } from 'https://api.deno.land/webhook/gh/website';

export async function startServer(port: number): Promise<void> {
  const server = serve({ port });
  console.log(`Server is running on http://localhost:${port}`);

  for await (const request of server) {
    handleRequest(request);
  }
}

async function handleRequest(request: ServerRequest): Promise<void> {
  const { url } = request;

  if (url === '/') {
    await request.respond({ body: 'Hello, Deno! This is the homepage.' });
  } else if (url === '/about') {
    await request.respond({ body: 'About page' });
  } else {
    await request.respond({ status: 404, body: 'Not found' });
  }
}
