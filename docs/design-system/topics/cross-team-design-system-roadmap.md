# Cross-team design system roadmap

**Domain:** Design Systems
**Group:** Adoption and operations
**Role tags:** staff, design-system, design, product
**Example environment:** node

## Summary

A cross-team roadmap balances product needs, accessibility fixes, token migrations, component quality, design language evolution, and platform investment. It keeps the system from becoming only a component backlog.

## Why it matters

Use this group to treat the design system as a product with roadmap, coverage, governance, package distribution, and debt management.

## JavaScript example

```js
const roadmapItem = { name: 'Form field refresh', userImpact: 5, implementationCost: 3 };
const priorityScore = roadmapItem.userImpact / roadmapItem.implementationCost;

console.log({ priorityScore });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
