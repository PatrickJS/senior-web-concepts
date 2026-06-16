# Design language taxonomy

**Domain:** Design Systems
**Group:** Foundations and taxonomy
**Role tags:** sr, design-system, design
**Example environment:** node

## Summary

Design language taxonomy names the primitives, patterns, templates, and product-specific exceptions in a shared vocabulary. Clear taxonomy keeps Figma names, component names, token names, and documentation aligned.

## Why it matters

Use this group to clarify what the design system owns, how design and engineering collaborate, and how shared UI language stays coherent across products.

## JavaScript example

```js
const taxonomy = new Map([
  ['primitive', ['color', 'space', 'font']],
  ['component', ['button', 'field', 'dialog']],
  ['pattern', ['empty-state', 'bulk-action']]
]);

console.log(taxonomy.get('component'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
