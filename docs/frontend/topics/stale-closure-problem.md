# Stale closure problem

**Domain:** Frontend
**Group:** Event loop, data identity, and UI algorithms
**Example environment:** node

## Summary

A stale closure uses values captured from an earlier render or state version. It appears in handlers, timers, promises, subscriptions, and memoized callbacks that outlive the data they closed over.

## Why it matters

Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.

## JavaScript example

```js
let currentToken = 'v1';
const getToken = () => currentToken;

const submit = async () => {
  const tokenAtSendTime = getToken();
  return { authorization: `Bearer ${tokenAtSendTime}` };
};

currentToken = 'v2';
console.log(await submit());
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
