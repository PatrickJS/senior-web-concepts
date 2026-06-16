# Design debt triage

**Domain:** Design Systems
**Group:** Adoption and operations
**Role tags:** sr, design-system, design, frontend
**Example environment:** node

## Summary

Design debt triage ranks inconsistent UI, missing states, token drift, inaccessible patterns, and local component forks by user impact and implementation cost. It turns inconsistency into managed product debt.

## Why it matters

Use this group to treat the design system as a product with roadmap, coverage, governance, package distribution, and debt management.

## JavaScript example

```js
const debt = [
  { issue: 'low contrast alert', impact: 5, effort: 2 },
  { issue: 'legacy spacing token', impact: 2, effort: 1 }
];

console.log(debt.toSorted((a, b) => (b.impact / b.effort) - (a.impact / a.effort))[0]);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
