/* global fetch */
import { createServer } from 'node:http';
import { setTimeout as delay } from 'node:timers/promises';

const server = createServer(async (request, response) => {
  await delay(500);
  response.end('late response');
});

await new Promise((resolve) => server.listen(0, resolve));
const { port } = server.address();
const controller = new AbortController();

setTimeout(() => controller.abort(), 50);

try {
  await fetch(`http://127.0.0.1:${port}`, { signal: controller.signal });
} catch (error) {
  console.log('Fetch aborted:', error.name);
} finally {
  server.close();
}
