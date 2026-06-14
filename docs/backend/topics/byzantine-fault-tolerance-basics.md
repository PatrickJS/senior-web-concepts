# Byzantine fault tolerance basics

**Domain:** Backend
**Group:** Distributed systems and consistency
**Example environment:** node

## Summary

Byzantine fault tolerance handles nodes that can lie, collude, or behave arbitrarily. Classic BFT requires more replicas than crash fault tolerance, commonly 3f+1 replicas to tolerate f Byzantine faults.

## Why it matters

Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.

## JavaScript example

```js
const requiredReplicas = (faults) => 3 * faults + 1;
const quorum = (faults) => 2 * faults + 1;

console.log({ replicas: requiredReplicas(1), quorum: quorum(1) });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
