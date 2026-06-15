# Actor model vs shared-memory concurrency

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Role tags:** sr, backend
**Example environment:** node

## Summary

The actor model isolates state behind message queues, while shared-memory concurrency shares mutable state with locks or atomics. Actors simplify reasoning but require backpressure and message ordering design.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
const createActor = (handler) => {
  const mailbox = [];
  let running = false;
  const pump = async () => {
    if (running) return;
    running = true;
    while (mailbox.length > 0) await handler(mailbox.shift());
    running = false;
  };
  return { send(message) { mailbox.push(message); void pump(); } };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
