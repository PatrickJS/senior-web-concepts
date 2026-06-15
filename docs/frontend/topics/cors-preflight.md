# CORS preflight

**Domain:** Frontend
**Group:** Security, networking, and caching
**Role tags:** sr, frontend
**Example environment:** node

## Summary

A CORS preflight is an OPTIONS request the browser sends before non-simple cross-origin requests. The server must explicitly allow origin, methods, and headers; CORS is a browser boundary, not server-to-server auth.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
import { createServer } from 'node:http';

createServer((request, response) => {
  response.setHeader('access-control-allow-origin', 'https://app.example.com');
  response.setHeader('access-control-allow-methods', 'GET,POST,OPTIONS');
  response.setHeader('access-control-allow-headers', 'content-type,authorization');
  if (request.method === 'OPTIONS') return response.end();
  response.end(JSON.stringify({ ok: true }));
}).listen(0);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
