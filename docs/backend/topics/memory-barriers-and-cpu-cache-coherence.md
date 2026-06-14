# Memory barriers & CPU cache coherence

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Example environment:** node

## Summary

Memory barriers constrain how CPU cores reorder reads/writes so shared-memory programs observe safe ordering. In JavaScript, Atomics operations on SharedArrayBuffer provide the relevant synchronization primitives.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
const shared = new SharedArrayBuffer(4);
const view = new Int32Array(shared);

Atomics.store(view, 0, 1);
Atomics.notify(view, 0, 1);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
