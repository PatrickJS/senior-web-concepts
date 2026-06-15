# SQL joins and query shape

**Domain:** Data & Storage Engineering
**Group:** Relational modeling and SQL
**Role tags:** jr, backend, data
**Example environment:** node

## Summary

SQL joins combine rows across tables, but query shape determines cardinality, duplicate rows, filter placement, and whether the database can use indexes. Engineers should explain inner, outer, semi, and anti joins from result semantics first.

## Why it matters

Use this group to design schemas, constraints, query shapes, and relational access patterns that stay understandable as data grows.

## JavaScript example

```js
const users = [{ id: 1, email: 'a@example.com' }];
const orders = [{ id: 10, userId: 1, total: 42 }];

const rows = orders.map((order) => ({
  ...order,
  user: users.find((user) => user.id === order.userId)
}));
console.log(rows);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
