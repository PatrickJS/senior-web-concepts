# Token versioning and migration

**Domain:** Design Systems
**Group:** Tokens and theming
**Role tags:** sr, design-system, frontend, platform
**Example environment:** node

## Summary

Token versioning protects consuming apps when a token is renamed, removed, or changes meaning. Migration notes, aliases, deprecation windows, and codemods keep design changes from becoming scattered UI regressions.

## Why it matters

Use this group to connect Figma variables, semantic tokens, code outputs, themes, and migration paths without letting visual decisions drift between tools.

## JavaScript example

```js
const tokenChange = { name: 'color.action.primary', type: 'rename', replacement: 'color.action.solid' };
const migration = tokenChange.type === 'rename' ? 'add alias and warn' : 'release normally';

console.log(migration);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
