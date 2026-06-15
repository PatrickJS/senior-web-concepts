# Edge rendering

**Domain:** Frontend
**Group:** Frontend architecture and rendering models
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Edge rendering produces HTML or responses close to users, usually in geographically distributed runtimes. It improves latency but constrains APIs, cold starts, data locality, cache behavior, and consistency.

## Why it matters

Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.

## JavaScript example

```js
export default async function handleRequest(request) {
  const url = new URL(request.url);
  return new Response(`<h1>${url.pathname}</h1>`, {
    headers: { 'content-type': 'text/html; charset=utf-8' }
  });
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
