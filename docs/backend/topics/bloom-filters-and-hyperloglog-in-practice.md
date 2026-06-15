# Bloom filters & HyperLogLog in practice

**Domain:** Backend
**Group:** Caching, hashing, and approximate data structures
**Role tags:** sr, backend
**Example environment:** node

## Summary

Bloom filters answer maybe-present/definitely-not-present with false positives; HyperLogLog estimates cardinality with small memory. Both trade exactness for speed and memory efficiency.

## Why it matters

Use this group to design fast paths that remain correct enough under invalidation, shard movement, cardinality estimation, and hot-key pressure.

## JavaScript example

```js
import { createHash } from 'node:crypto';

const bits = new Uint8Array(1024);
const hash = (value, seed) => createHash('sha256').update(`${seed}:${value}`).digest()[0] % bits.length;

export const add = (value) => { bits[hash(value, 1)] = 1; bits[hash(value, 2)] = 1; };
export const mightContain = (value) => bits[hash(value, 1)] === 1 && bits[hash(value, 2)] === 1;
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
