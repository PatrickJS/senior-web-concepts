# Lock-free data structures

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Example environment:** node

## Summary

Lock-free data structures use atomic operations instead of mutexes so system-wide progress continues even if one thread stalls. They are hard to design because of ABA, memory ordering, and contention.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
const value = new Int32Array(new SharedArrayBuffer(4));

const increment = () => {
  let current;
  do {
    current = Atomics.load(value, 0);
  } while (Atomics.compareExchange(value, 0, current, current + 1) !== current);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
