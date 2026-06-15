# Transaction boundary design

**Domain:** Data & Storage Engineering
**Group:** Transactions, migrations, and integrity
**Role tags:** sr, backend, data
**Example environment:** node

## Summary

Transaction boundary design decides which reads and writes must commit atomically, how long locks are held, and what invariants need isolation. Boundaries that are too wide hurt concurrency; too narrow leak partial state.

## Why it matters

Use this group to protect correctness while schema, code, data volume, and concurrent writes change.

## JavaScript example

```js
const transfer = async (db, from, to, amount) => db.transaction(async (tx) => {
  await tx.accounts.debit(from, amount);
  await tx.accounts.credit(to, amount);
  await tx.ledger.insert({ from, to, amount });
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
