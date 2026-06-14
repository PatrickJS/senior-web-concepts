# Background job queues (Celery / BullMQ) retry semantics

**Domain:** Backend
**Group:** Messaging, streams, and event-driven systems
**Example environment:** node

## Summary

Job queues need explicit retry, backoff, dead-letter, timeout, and idempotency semantics. Without them, jobs can duplicate side effects, poison queues, or hide permanent failures behind endless retries.

## Why it matters

Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.

## JavaScript example

```js
const nextDelay = (attempt) => Math.min(60_000, 1000 * 2 ** attempt);

export const handleJobFailure = (job) => {
  if (job.attempt >= 5) return { queue: 'dead-letter', job };
  return { queue: 'retry', runAt: Date.now() + nextDelay(job.attempt), job: { ...job, attempt: job.attempt + 1 } };
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
