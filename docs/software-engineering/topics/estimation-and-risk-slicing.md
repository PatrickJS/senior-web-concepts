# Estimation and risk slicing

**Domain:** Software Engineering
**Group:** Collaboration and delivery discipline
**Role tags:** sr, software, product
**Example environment:** node

## Summary

Estimation improves when work is sliced around uncertainty, dependencies, feedback, and irreversible decisions. Risk-first slices turn unknowns into evidence before committing to a large implementation path.

## Why it matters

Use this group to make software work reviewable, explainable, sliceable, and maintainable across a team.

## JavaScript example

```js
const tasks = [
  { name: 'unknown vendor API', risk: 5, size: 2 },
  { name: 'button styling', risk: 1, size: 1 }
];

console.log(tasks.toSorted((a, b) => b.risk - a.risk)[0]);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
