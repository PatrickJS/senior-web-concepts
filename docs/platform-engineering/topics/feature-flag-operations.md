# Feature flag operations

**Domain:** Platform Engineering
**Group:** Developer experience and platform product
**Role tags:** sr, platform, backend
**Example environment:** node

## Summary

Feature flag operations manage targeting, ownership, cleanup, defaults, audit logs, and failure behavior. Without lifecycle discipline, flags become hidden production configuration debt.

## Why it matters

Use this group to build internal platforms, templates, local environments, and APIs that make good engineering paths easy to follow.

## JavaScript example

```js
const staleFlags = (flags, now) => flags.filter((flag) => flag.expiresAt < now);

console.log(staleFlags([{ name: 'checkout_v2', expiresAt: 100 }], 200));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
