# Syscall overhead & context switching

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Example environment:** node

## Summary

System calls and context switches cross boundaries between user space, kernel space, and runnable tasks. Batching, buffering, async I/O, and fewer tiny writes reduce overhead.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
const batched = [];

export const logLater = (line, stream) => {
  batched.push(line);
  if (batched.length >= 100) stream.write(`${batched.splice(0).join('
')}
`);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
