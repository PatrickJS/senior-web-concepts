# Streaming SSR

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Streaming SSR sends HTML progressively while data or components are still resolving. It improves time to first byte and progressive display, but requires boundary management, script ordering, and hydration coordination.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
import { createServer } from 'node:http';

createServer(async (request, response) => {
  response.setHeader('content-type', 'text/html; charset=utf-8');
  response.write('<main><h1>Loading</h1>');
  await new Promise((resolve) => setTimeout(resolve, 50));
  response.end('<section>Data loaded</section></main>');
}).listen(0);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
