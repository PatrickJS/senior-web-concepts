# Connection pooling pitfalls

**Domain:** Backend
**Group:** Transport and protocol internals
**Example environment:** node

## Summary

Connection pools reduce setup cost but can fail through exhaustion, stale sockets, head-of-line blocking, uneven load, leaks, or pool sizes that exceed database/server limits. Correct sizing and timeout behavior matter.

## Why it matters

Use this group to reason about how bytes move over the network, what happens under packet loss, and where protocol-level latency or head-of-line blocking comes from.

## JavaScript example

```js
class Pool {
  constructor(limit) { this.limit = limit; this.active = 0; this.queue = []; }
  async run(task) {
    if (this.active >= this.limit) await new Promise((resolve) => this.queue.push(resolve));
    this.active++;
    try { return await task(); }
    finally { this.active--; this.queue.shift()?.(); }
  }
}
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
