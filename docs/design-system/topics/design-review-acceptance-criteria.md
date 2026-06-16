# Design review acceptance criteria

**Domain:** Design Systems
**Group:** Figma and design-code handoff
**Role tags:** sr, design-system, design, product
**Example environment:** node

## Summary

Design review acceptance criteria define what must be true before a component change ships: visual match, accessible behavior, documented states, responsive behavior, analytics impact, and migration guidance.

## Why it matters

Use this group to make design intent inspectable and traceable through variants, responsive constraints, specs, issues, and acceptance criteria.

## JavaScript example

```js
const criteria = ['visual-match', 'keyboard-flow', 'responsive-behavior', 'docs-updated'];
const review = new Set(['visual-match', 'keyboard-flow', 'docs-updated']);

console.log(criteria.filter((item) => !review.has(item)));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
