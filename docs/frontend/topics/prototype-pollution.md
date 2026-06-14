# Prototype pollution

**Domain:** Frontend
**Group:** Security, networking, and caching
**Example environment:** node

## Summary

Prototype pollution lets attacker-controlled keys modify Object.prototype or constructors. It often comes from unsafe deep merge, path setters, query parsers, or JSON merge logic that accepts __proto__, prototype, or constructor keys.

## Why it matters

Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.

## JavaScript example

```js
const unsafeKeys = new Set(['__proto__', 'prototype', 'constructor']);

export const assignSafe = (target, source) => {
  for (const [key, value] of Object.entries(source)) {
    if (unsafeKeys.has(key)) continue;
    target[key] = value;
  }
  return target;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
