# Blue-green vs canary deployments

**Domain:** Backend
**Group:** Deployment and reliability patterns
**Role tags:** sr, backend
**Example environment:** node

## Summary

Blue-green switches traffic between two full environments; canary gradually shifts a small percentage to a new version. Blue-green is simpler rollback, while canary gives safer progressive exposure.

## Why it matters

Use this group to keep systems available while code, traffic, dependencies, and failure modes change.

## JavaScript example

```js
const routeRelease = (random = Math.random()) => {
  if (random < 0.1) return 'green';
  return 'blue';
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
