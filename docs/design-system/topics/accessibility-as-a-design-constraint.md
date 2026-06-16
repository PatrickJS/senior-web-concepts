# Accessibility as a design constraint

**Domain:** Design Systems
**Group:** Foundations and taxonomy
**Role tags:** sr, design-system, design, frontend
**Example environment:** node

## Summary

Accessibility belongs in design decisions before implementation. Color contrast, focus order, target size, motion, labels, keyboard behavior, and error messaging should be treated as design constraints, not late QA fixes.

## Why it matters

Use this group to clarify what the design system owns, how design and engineering collaborate, and how shared UI language stays coherent across products.

## JavaScript example

```js
const meetsTargetSize = ({ width, height }) => width >= 44 && height >= 44;
const buttonSpec = { width: 40, height: 40, label: 'Close' };

console.log({ passes: meetsTargetSize(buttonSpec), label: buttonSpec.label });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
