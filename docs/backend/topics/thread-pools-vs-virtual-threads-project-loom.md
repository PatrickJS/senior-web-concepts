# Thread pools vs virtual threads (Project Loom)

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Example environment:** node

## Summary

Thread pools bound scarce OS threads; virtual threads multiplex many blocking-style tasks onto fewer carrier threads in the JVM. In Node, the closest contrast is async I/O plus worker threads for CPU-bound work.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
import { Worker } from 'node:worker_threads';

export const runCpuTask = (data) => new Promise((resolve, reject) => {
  const worker = new Worker(new URL('./cpu-worker.js', import.meta.url), { workerData: data });
  worker.once('message', resolve);
  worker.once('error', reject);
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
