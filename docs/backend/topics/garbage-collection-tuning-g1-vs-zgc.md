# Garbage collection tuning (G1 vs ZGC)

**Domain:** Backend
**Group:** Runtime, OS, and performance engineering
**Example environment:** node

## Summary

G1 and ZGC are JVM collectors with different pause/throughput trade-offs; in Node the analogous topic is V8 heap sizing and GC behavior. Strong explanations separate allocation rate, live set, pause time, and throughput.

## Why it matters

Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.

## JavaScript example

```js
console.log(process.execArgv);
console.log('Node/V8 tuning examples: --max-old-space-size=4096 --trace-gc');
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
