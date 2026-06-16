# Figma component variants

**Domain:** Design Systems
**Group:** Figma and design-code handoff
**Role tags:** mid, design-system, design
**Example environment:** node

## Summary

Figma variants model the supported visual states and options for a component. They should map closely to code props so designers and engineers are discussing the same combinations and constraints.

## Why it matters

Use this group to make design intent inspectable and traceable through variants, responsive constraints, specs, issues, and acceptance criteria.

## JavaScript example

```js
const variants = [
  { size: 'sm', tone: 'primary', state: 'default' },
  { size: 'sm', tone: 'primary', state: 'disabled' }
];

console.log(variants.every((variant) => 'state' in variant));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
