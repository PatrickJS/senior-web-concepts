# Tree shaking internals

**Domain:** Frontend
**Group:** Bundling, modules, and delivery
**Role tags:** sr, frontend
**Example environment:** node

## Summary

Tree shaking removes unused exports by static analysis of ESM imports/exports. It works best with side-effect-free modules, direct imports, and package sideEffects metadata.

## Why it matters

Use this group to explain how JavaScript reaches the browser, how chunks are split, and what makes code removable or render-blocking.

## JavaScript example

```js
export const used = () => 'kept by bundler';
export const unused = () => 'removed when side effects are absent';

// Keep module top level free of irreversible side effects when possible.
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
