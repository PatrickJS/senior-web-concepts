# Contextual logging

**Domain:** Software Engineering
**Group:** Debugging, configuration, and runtime behavior
**Role tags:** mid, software, security
**Example environment:** node

## Summary

Contextual logging records enough stable identifiers and state to reconstruct behavior without dumping sensitive data. Good logs explain what happened, where, for whom, and why the code chose that path.

## Why it matters

Use this group to connect everyday code decisions to diagnosis, configuration safety, logs, profiling, and production behavior.

## JavaScript example

```js
import { createHash } from 'node:crypto';

const logEvent = ({ requestId, userId, action, outcome }) => ({
  requestId,
  userIdHash: createHash('sha256').update(userId).digest('hex').slice(0, 8),
  action,
  outcome
});

console.log(logEvent({ requestId: 'req-1', userId: 'user-123', action: 'save', outcome: 'ok' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
