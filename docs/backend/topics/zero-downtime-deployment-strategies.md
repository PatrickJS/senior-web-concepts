# Zero-downtime deployment strategies

**Domain:** Backend
**Group:** Deployment and reliability patterns
**Example environment:** node

## Summary

Zero-downtime deployment keeps traffic served while replacing code. Common techniques include readiness probes, draining, blue-green, canary, backward-compatible schemas, feature flags, and fast rollback.

## Why it matters

Use this group to keep systems available while code, traffic, dependencies, and failure modes change.

## JavaScript example

```js
let accepting = true;
const inflight = new Set();

export const handle = async (request) => {
  if (!accepting) return new Response('draining', { status: 503 });
  const work = processRequest(request);
  inflight.add(work);
  try { return await work; }
  finally { inflight.delete(work); }
};

export const drain = async () => {
  accepting = false;
  await Promise.allSettled(inflight);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
