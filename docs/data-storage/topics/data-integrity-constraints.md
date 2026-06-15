# Data integrity constraints

**Domain:** Data & Storage Engineering
**Group:** Relational modeling and SQL
**Role tags:** jr, backend, data
**Example environment:** node

## Summary

Data integrity constraints make correctness durable inside the database through primary keys, foreign keys, unique constraints, checks, not-null rules, and exclusion constraints. They protect invariants even when application code has bugs.

## Why it matters

Use this group to design schemas, constraints, query shapes, and relational access patterns that stay understandable as data grows.

## JavaScript example

```js
const validateUser = (user) => {
  if (!user.email) throw new Error('email is required');
  if (!user.email.includes('@')) throw new Error('email must be valid');
  return user;
};

console.log(validateUser({ id: 1, email: 'a@example.com' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
