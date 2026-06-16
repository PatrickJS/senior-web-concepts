# Visual states and interaction contracts

**Domain:** Design Systems
**Group:** Component API and implementation
**Role tags:** mid, design-system, design, frontend
**Example environment:** node

## Summary

Visual states such as hover, focus, disabled, loading, selected, invalid, and pressed are interaction contracts. They should be represented in design, documentation, tests, and implementation with the same names.

## Why it matters

Use this group to translate design decisions into stable component APIs, composition models, state contracts, and styling rules.

## JavaScript example

```js
const supportedStates = ['default', 'hover', 'focus-visible', 'disabled', 'loading'];
const documentedStates = ['default', 'hover', 'focus-visible', 'disabled'];

console.log(supportedStates.filter((state) => !documentedStates.includes(state)));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
