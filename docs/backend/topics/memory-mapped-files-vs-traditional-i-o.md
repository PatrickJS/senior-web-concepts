# Memory-mapped files vs traditional I/O

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Role tags:** sr, backend
**Example environment:** node

## Summary

Memory-mapped files map file pages into process address space, letting the OS page data in lazily. Traditional I/O copies through explicit buffers. Node does not expose mmap directly, so streams and buffers are the usual tools.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
import { createReadStream } from 'node:fs';

export const streamFile = (path, response) => {
  createReadStream(path).pipe(response);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
