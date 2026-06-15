# API gateway throttling & caching layers

**Domain:** Backend
**Group:** API design, auth, and edge controls
**Role tags:** sr, backend
**Example environment:** node

## Summary

API gateways enforce cross-cutting policies such as auth, rate limits, request validation, caching, and routing. Caching must vary on identity, authorization, headers, and query shape to avoid data leaks.

## Why it matters

Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.

## JavaScript example

```js
const cacheKey = (request) => `${request.method}:${new URL(request.url).pathname}:${request.headers.get('authorization') ?? 'anon'}`;

export const gatewayCache = new Map();
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
