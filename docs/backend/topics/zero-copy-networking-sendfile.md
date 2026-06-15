# Zero-copy networking (sendfile)

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Role tags:** sr, backend
**Example environment:** node

## Summary

Zero-copy networking avoids copying file data through user-space buffers, often with sendfile-like kernel paths. Node typically approximates this with efficient streams, though true sendfile exposure depends on runtime/platform.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
import { createReadStream } from 'node:fs';

export const sendFileLike = (path, response) => {
  createReadStream(path).pipe(response);
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
