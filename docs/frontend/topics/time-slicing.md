# Time slicing

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Example environment:** node

## Summary

Time slicing breaks long rendering or computation into chunks so the event loop can process input and paint. It improves responsiveness but requires work to be restartable and side effects to be delayed.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
const processInSlices = async (items, visit) => {
  for (let index = 0; index < items.length; index++) {
    visit(items[index]);
    if (index % 500 === 0) await new Promise((resolve) => setTimeout(resolve, 0));
  }
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
