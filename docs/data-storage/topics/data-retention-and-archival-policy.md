# Data retention and archival policy

**Domain:** Data & Storage Engineering
**Group:** Analytics, pipelines, and governance
**Role tags:** sr, data, security
**Example environment:** node

## Summary

Retention and archival policy define how long data stays hot, warm, cold, anonymized, or deleted. It balances product needs, cost, legal obligations, privacy, and restore expectations.

## Why it matters

Use this group to move data into analytical systems with clear semantics, quality checks, lineage, and retention rules.

## JavaScript example

```js
const retentionAction = ({ ageDays }) => {
  if (ageDays > 2555) return 'delete';
  if (ageDays > 365) return 'archive';
  return 'keep-hot';
};

console.log(retentionAction({ ageDays: 500 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
