# Cost allocation and FinOps

**Domain:** Platform Engineering
**Group:** Observability, incidents, and operations
**Role tags:** sr, platform
**Example environment:** node

## Summary

Cost allocation and FinOps connect platform spend to teams, products, environments, and unit economics. Good systems expose cost drivers early enough for engineering decisions to change them.

## Why it matters

Use this group to make production ownership measurable, alertable, recoverable, and improvable after incidents.

## JavaScript example

```js
const allocateCost = (lineItems) => lineItems.reduce((totals, item) => {
  totals[item.team] = (totals[item.team] ?? 0) + item.cost;
  return totals;
}, {});

console.log(allocateCost([{ team: 'api', cost: 10 }, { team: 'api', cost: 5 }]));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
