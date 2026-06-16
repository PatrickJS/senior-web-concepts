# Auto layout and responsive constraints

**Domain:** Design Systems
**Group:** Figma and design-code handoff
**Role tags:** mid, design-system, design, frontend
**Example environment:** node

## Summary

Auto layout and responsive constraints make design intent explicit for spacing, wrapping, alignment, truncation, and resizing. They reduce ambiguity when a Figma frame becomes real CSS layout.

## Why it matters

Use this group to make design intent inspectable and traceable through variants, responsive constraints, specs, issues, and acceptance criteria.

## JavaScript example

```js
const frame = { direction: 'horizontal', gap: 12, wraps: true, minWidth: 280 };
const canWrapOnMobile = frame.wraps && frame.minWidth <= 320;

console.log({ canWrapOnMobile });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
