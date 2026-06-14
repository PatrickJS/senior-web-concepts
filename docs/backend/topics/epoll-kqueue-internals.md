# epoll / kqueue internals

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Example environment:** node

## Summary

epoll and kqueue are OS event notification mechanisms for scalable nonblocking I/O. Node relies on libuv abstractions over these primitives to drive sockets, timers, and file events.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
import { createServer } from 'node:net';

createServer((socket) => {
  socket.on('data', (chunk) => socket.write(chunk));
}).listen(0);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
