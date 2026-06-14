/* global fetch */
import { createServer } from 'node:http';
import { setTimeout as delay } from 'node:timers/promises';

const server = createServer(async (request, response) => {
  response.setHeader('content-type', 'text/plain; charset=utf-8');
  for (const chunk of ['one\n', 'two\n', 'three\n']) {
    response.write(chunk);
    await delay(50);
  }
  response.end();
});

await new Promise((resolve) => server.listen(0, resolve));
const { port } = server.address();

const response = await fetch(`http://127.0.0.1:${port}`);
const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { value, done } = await reader.read();
  if (done) break;
  process.stdout.write(decoder.decode(value, { stream: true }));
}

server.close();
