# Virtual memory & page faults impact

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Role tags:** sr, backend
**Example environment:** node

## Summary

Virtual memory lets processes use address spaces backed by physical memory and disk. Page faults occur when needed pages are not resident, causing latency from allocation, disk, or OS bookkeeping.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
import { open } from 'node:fs/promises';

const file = await open('/tmp/example.bin', 'a+');
const buffer = Buffer.alloc(4096);
await file.read(buffer, 0, buffer.length, 0);
await file.close();
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
