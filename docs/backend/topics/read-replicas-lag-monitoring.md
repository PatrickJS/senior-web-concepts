# Read replicas lag monitoring

**Domain:** Backend
**Group:** Databases, storage, and transactions
**Example environment:** node

## Summary

Read replica lag is the delay between primary writes and replica visibility. Monitoring should track replication position/time lag and route read-your-writes or critical reads to fresh sources when needed.

## Why it matters

Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.

## JavaScript example

```js
const canReadReplica = ({ primaryLsn, replicaLsn, maxLag }) => {
  return primaryLsn - replicaLsn <= maxLag;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
