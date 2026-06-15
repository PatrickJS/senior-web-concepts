# CQRS + Event Sourcing projections

**Domain:** Backend
**Group:** Messaging, streams, and event-driven systems
**Role tags:** sr, backend
**Example environment:** node

## Summary

CQRS separates command writes from query reads, and event sourcing records state changes as events. Projections build read models from those events and must handle replay, lag, schema changes, and idempotency.

## Why it matters

Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.

## JavaScript example

```js
const project = (readModel, event) => {
  if (event.type === 'invoice.paid') readModel.set(event.invoiceId, { status: 'paid' });
  return readModel;
};
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
