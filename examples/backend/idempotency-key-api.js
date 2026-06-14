/* global fetch */
import { createServer } from 'node:http';

const responsesByKey = new Map();

const server = createServer(async (request, response) => {
  if (request.method !== 'POST') {
    response.writeHead(405).end();
    return;
  }

  const key = request.headers['idempotency-key'];
  if (!key) {
    response.writeHead(400).end('missing idempotency-key');
    return;
  }

  if (!responsesByKey.has(key)) {
    responsesByKey.set(key, JSON.stringify({ orderId: crypto.randomUUID() }));
  }

  response.setHeader('content-type', 'application/json');
  response.end(responsesByKey.get(key));
});

await new Promise((resolve) => server.listen(0, resolve));
const { port } = server.address();
const url = `http://127.0.0.1:${port}`;

const first = await fetch(url, { method: 'POST', headers: { 'idempotency-key': 'checkout-1' } }).then((r) => r.json());
const second = await fetch(url, { method: 'POST', headers: { 'idempotency-key': 'checkout-1' } }).then((r) => r.json());

console.log(first, second, 'same:', first.orderId === second.orderId);
server.close();
