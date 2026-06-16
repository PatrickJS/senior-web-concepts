# Component inventory and audit

**Domain:** Design Systems
**Group:** Foundations and taxonomy
**Role tags:** mid, design-system, design, frontend
**Example environment:** node

## Summary

A component inventory identifies repeated UI patterns, implementation variants, usage frequency, accessibility risk, and ownership gaps. It turns vague design debt into a prioritized system backlog.

## Why it matters

Use this group to clarify what the design system owns, how design and engineering collaborate, and how shared UI language stays coherent across products.

## JavaScript example

```js
const components = [
  { name: 'Button', variants: 9, localForks: 0 },
  { name: 'DatePicker', variants: 4, localForks: 3 }
];

console.log(components.toSorted((a, b) => b.localForks - a.localForks)[0]);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
