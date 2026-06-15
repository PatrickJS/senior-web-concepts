# Content Security Policy (CSP)

**Domain:** Frontend
**Group:** Security, networking, and caching
**Role tags:** sr, frontend
**Example environment:** node

## Summary

CSP is a browser-enforced policy controlling where scripts, styles, images, frames, and other resources can load from. Strong explanations cover nonces, hashes, strict-dynamic, report-only rollout, and blocking inline script execution.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
import { createServer } from 'node:http';

createServer((request, response) => {
  const nonce = crypto.randomUUID();
  response.setHeader('content-security-policy', `script-src 'nonce-${nonce}'; object-src 'none'; base-uri 'none'`);
  response.end(`<script nonce="${nonce}">console.log('ok')</script>`);
}).listen(0);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
