# Semantic metrics layer

**Domain:** Data & Storage Engineering
**Group:** Analytics, pipelines, and governance
**Role tags:** sr, data, product
**Example environment:** node

## Summary

A semantic metrics layer defines measures, dimensions, filters, windows, and ownership once so dashboards and product analysis agree. It prevents each report from inventing a different version of revenue or active users.

## Why it matters

Use this group to move data into analytical systems with clear semantics, quality checks, lineage, and retention rules.

## JavaScript example

```js
const metric = {
  name: 'gross_revenue',
  expression: 'sum(order_total)',
  grain: 'order',
  filters: ['status = paid']
};

console.log(metric);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
