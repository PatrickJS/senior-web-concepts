# Theme modes and brand theming

**Domain:** Design Systems
**Group:** Tokens and theming
**Role tags:** sr, design-system, design, frontend, product
**Example environment:** node

## Summary

Theme modes map the same semantic token names to different values for light, dark, high-contrast, brand, or tenant contexts. The component API should consume stable semantics, not mode-specific literals.

## Why it matters

Use this group to connect Figma variables, semantic tokens, code outputs, themes, and migration paths without letting visual decisions drift between tools.

## JavaScript example

```js
const token = {
  name: 'surface.default',
  values: { light: '#ffffff', dark: '#111827', highContrast: '#000000' }
};

console.log(token.values.dark);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
