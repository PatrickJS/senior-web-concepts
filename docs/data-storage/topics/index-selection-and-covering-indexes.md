# Index selection and covering indexes

**Domain:** Data & Storage Engineering
**Group:** Indexing and query performance
**Role tags:** sr, backend, data
**Example environment:** node

## Summary

Index selection matches workload filters, joins, ordering, uniqueness, and projection columns. Covering indexes can serve a query without visiting base rows, but they increase write cost and storage.

## Why it matters

Use this group to connect query plans, index design, statistics, memory, and workload shape to practical performance outcomes.

## JavaScript example

```js
const query = {
  where: ['tenant_id', 'status'],
  orderBy: ['created_at'],
  select: ['id', 'created_at']
};

const index = ['tenant_id', 'status', 'created_at', 'id'];
console.log(query.select.every((field) => index.includes(field)));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
