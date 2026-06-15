# Backward-compatible schema evolution

**Domain:** Backend
**Group:** API design, auth, and edge controls
**Role tags:** sr, backend
**Example environment:** node

## Summary

Backward-compatible schema evolution changes APIs or events without breaking old consumers. Common moves are additive fields, default values, tolerant readers, deprecation windows, and dual-read/write migrations.

## Why it matters

Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.

## JavaScript example

```js
const readUser = (payload) => ({
  id: payload.id,
  email: payload.email,
  displayName: payload.displayName ?? payload.email
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
