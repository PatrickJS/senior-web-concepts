# Deprecation and migration playbooks

**Domain:** Design Systems
**Group:** Documentation, testing, and release
**Role tags:** sr, design-system, frontend, platform
**Example environment:** node

## Summary

Deprecation playbooks give teams a path away from old tokens, props, variants, or components. Good migrations include timelines, warnings, codemods, examples, support windows, and removal criteria.

## Why it matters

Use this group to keep component behavior documented, tested, versioned, and safe for consuming teams to upgrade.

## JavaScript example

```js
const deprecation = { component: 'LegacyModal', removedIn: '3.0.0', replacement: 'Dialog' };
const warning = deprecation.component + ' will be removed in ' + deprecation.removedIn;

console.log({ warning, replacement: deprecation.replacement });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
