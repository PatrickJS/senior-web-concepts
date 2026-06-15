# CI pipeline design

**Domain:** Platform Engineering
**Group:** Source control, CI, and release automation
**Role tags:** mid, platform
**Example environment:** node

## Summary

CI pipeline design orders checks so fast deterministic failures happen early and expensive integration work runs only when needed. Good pipelines separate install, lint, test, build, package, and artifact verification.

## Why it matters

Use this group to turn changes into repeatable, reviewable, reversible delivery paths.

## JavaScript example

```js
const pipeline = ['install', 'syntax', 'unit', 'generate', 'package'];
const shouldRun = (step, changed) => step !== 'package' || changed.includes('package.json');

console.log(pipeline.filter((step) => shouldRun(step, ['src/concepts/data-storage.js'])));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
