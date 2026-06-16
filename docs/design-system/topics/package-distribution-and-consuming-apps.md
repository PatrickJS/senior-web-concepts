# Package distribution and consuming apps

**Domain:** Design Systems
**Group:** Adoption and operations
**Role tags:** sr, design-system, frontend, platform
**Example environment:** node

## Summary

Design system packages must work for consuming apps with clear peer dependencies, build outputs, versioning, tree shaking, CSS loading, and upgrade guidance. Distribution quality determines whether teams can adopt the system safely.

## Why it matters

Use this group to treat the design system as a product with roadmap, coverage, governance, package distribution, and debt management.

## JavaScript example

```js
const packageMeta = { exports: ['.', './tokens.css'], peerDependencies: ['react'], sideEffects: ['tokens.css'] };
const canConsumeTokens = packageMeta.exports.includes('./tokens.css');

console.log({ canConsumeTokens });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
