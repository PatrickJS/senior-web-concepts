# Outbox pattern for reliable events

**Domain:** Backend
**Group:** Messaging, streams, and event-driven systems
**Role tags:** sr, backend
**Example environment:** node

## Summary

The outbox pattern writes domain data and an event record in the same database transaction, then a relay publishes the event. It avoids losing events between DB commit and broker publish.

## Why it matters

Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.

## JavaScript example

```js
const createOrder = async (db, order) => db.transaction(async (tx) => {
  await tx.orders.insert(order);
  await tx.outbox.insert({ type: 'order.created', orderId: order.id });
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
