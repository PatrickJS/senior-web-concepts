# Adoption metrics and coverage

**Domain:** Design Systems
**Group:** Adoption and operations
**Role tags:** sr, design-system, design, product
**Example environment:** node

## Summary

Adoption metrics show where the design system is used, bypassed, forked, or missing. Coverage data helps prioritize components, migrations, docs, and support work based on real product impact.

## Why it matters

Use this group to treat the design system as a product with roadmap, coverage, governance, package distribution, and debt management.

## JavaScript example

```js
const apps = [
  { name: 'admin', systemImports: 42, localComponents: 8 },
  { name: 'billing', systemImports: 12, localComponents: 20 }
];

console.log(apps.toSorted((a, b) => b.localComponents - a.localComponents)[0]);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
