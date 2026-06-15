# Feature flags with rollout strategies

**Domain:** Backend
**Group:** Deployment and reliability patterns
**Role tags:** sr, backend
**Example environment:** node

## Summary

Feature flags decouple deploy from release and allow targeting, gradual rollout, kill switches, and experiments. Good systems need stable bucketing, auditability, cleanup, and dependency management.

## Why it matters

Use this group to keep systems available while code, traffic, dependencies, and failure modes change.

## JavaScript example

```js
import { createHash } from 'node:crypto';

const bucket = (userId) => createHash('sha256').update(userId).digest()[0] / 255;
export const enabled = (userId, rollout) => bucket(userId) < rollout;
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
