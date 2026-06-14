# SameSite cookie modes

**Domain:** Frontend
**Group:** Security, networking, and caching
**Example environment:** node

## Summary

SameSite controls whether cookies are sent on cross-site requests. Lax is a pragmatic default, Strict is more protective but can break flows, and None requires Secure for third-party contexts.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const cookie = [
  'session=abc123',
  'HttpOnly',
  'Secure',
  'SameSite=Lax',
  'Path=/'
].join('; ');

console.log('Set-Cookie:', cookie);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
