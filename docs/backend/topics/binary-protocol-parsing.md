# Binary protocol parsing

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Role tags:** sr, backend
**Example environment:** node

## Summary

Binary protocol parsing reads structured fields from byte buffers using offsets, endianness, lengths, and framing rules. Correct parsers defend against partial frames, oversized lengths, and malicious input.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
const buffer = Buffer.alloc(8);
buffer.writeUInt32BE(42, 0);
buffer.writeUInt32BE(7, 4);

console.log({ streamId: buffer.readUInt32BE(0), length: buffer.readUInt32BE(4) });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
