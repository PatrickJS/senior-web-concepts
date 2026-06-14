# Garbage collection timing

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Example environment:** node

## Summary

Garbage collection is nondeterministic and should not be part of application correctness. A frontend engineer should understand object reachability, closures, event listeners, WeakMap/WeakRef trade-offs, and why GC pauses can affect responsiveness.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
const registry = new FinalizationRegistry((label) => {
  console.log('GC eventually collected', label);
});

let value = { payload: new Array(1000).fill('x') };
registry.register(value, 'large-payload');
value = null;

console.log('GC is nondeterministic; never depend on this callback for correctness.');
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
