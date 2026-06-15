# Normalization vs denormalization

**Domain:** Data & Storage Engineering
**Group:** Relational modeling and SQL
**Role tags:** mid, backend, data
**Example environment:** node

## Summary

Normalization reduces duplication and update anomalies, while denormalization duplicates data to speed reads or simplify access. The trade-off is correctness and write complexity versus query performance and product latency.

## Why it matters

Use this group to design schemas, constraints, query shapes, and relational access patterns that stay understandable as data grows.

## JavaScript example

```js
const normalized = {
  users: new Map([[1, { id: 1, name: 'Ada' }]]),
  orders: [{ id: 10, userId: 1 }]
};

const denormalized = normalized.orders.map((order) => ({
  ...order,
  userName: normalized.users.get(order.userId).name
}));
console.log(denormalized);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
