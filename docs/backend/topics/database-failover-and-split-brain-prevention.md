# Database failover & split-brain prevention

**Domain:** Backend
**Group:** Deployment and reliability patterns
**Role tags:** sr, backend
**Example environment:** node

## Summary

Failover promotes a standby when primary fails; split-brain occurs when multiple primaries accept writes. Prevention uses quorum, fencing tokens, leases, STONITH-style isolation, and conservative promotion rules.

## Why it matters

Use this group to keep systems available while code, traffic, dependencies, and failure modes change.

## JavaScript example

```js
const acceptWrite = ({ nodeEpoch, clusterEpoch }) => {
  if (nodeEpoch !== clusterEpoch) throw new Error('stale primary fenced off');
  return true;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
