# Search indexing and relevance

**Domain:** Data & Storage Engineering
**Group:** Storage topology and replication
**Role tags:** mid, backend, data
**Example environment:** node

## Summary

Search indexing transforms source records into searchable documents with tokenization, ranking signals, filters, facets, and freshness rules. Search is a derived data system that needs sync and repair paths.

## Why it matters

Use this group to reason about partitioning, replicas, backups, search indexes, time-series storage, and tenant boundaries.

## JavaScript example

```js
const toSearchDocument = (product) => ({
  id: product.id,
  text: [product.name, product.description].join(' '),
  filters: { tenantId: product.tenantId, active: product.active }
});

console.log(toSearchDocument({ id: 1, name: 'Desk', description: 'Oak', tenantId: 'acme', active: true }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
