# Token naming and semantic layers

**Domain:** Design Systems
**Group:** Tokens and theming
**Role tags:** sr, design-system, design, frontend
**Example environment:** node

## Summary

Token names should encode intent rather than current visual appearance. Semantic layers such as surface, text, border, action, and feedback survive rebrands better than names like blue-500 or gray-light.

## Why it matters

Use this group to connect Figma variables, semantic tokens, code outputs, themes, and migration paths without letting visual decisions drift between tools.

## JavaScript example

```js
const semanticName = ({ role, emphasis, state }) => [role, emphasis, state].filter(Boolean).join('.');

console.log(semanticName({ role: 'text', emphasis: 'danger', state: 'hover' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
