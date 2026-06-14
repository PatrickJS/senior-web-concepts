# ETag vs Cache-Control

**Domain:** Frontend
**Group:** Security, networking, and caching
**Example environment:** node

## Summary

Cache-Control defines freshness and reuse rules; ETag is a validator for conditional revalidation. Effective caching uses both: freshness for fast reuse and validators for cheap correctness after stale entries.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
import { createHash } from 'node:crypto';

export const sendCached = (request, response, body) => {
  const etag = `"${createHash('sha256').update(body).digest('base64url')}"`;
  response.setHeader('etag', etag);
  response.setHeader('cache-control', 'public, max-age=60, stale-while-revalidate=300');
  if (request.headers['if-none-match'] === etag) {
    response.writeHead(304).end();
    return;
  }
  response.end(body);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
