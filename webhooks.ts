import { serve } from 'https://api.deno.land/webhook/gh/website';

const server = serve({ port: 8000 });

for await (const request of server) {
  if (request.method === 'POST' && request.url === '/webhook') {
    const body = new TextDecoder().decode(await Deno.readAll(request.body));
    // Handle the webhook payload here
    console.log('Received webhook payload:', body);
    request.respond({ status: 200 });
  } else {
    request.respond({ status: 404 });
  }
}
