# Generated artifact drift checks

**Domain:** Platform Engineering
**Group:** Source control, CI, and release automation
**Role tags:** sr, platform, dx
**Example environment:** node

## Summary

Generated artifact drift checks run the generator in CI and fail when committed generated output is stale. This protects source-of-truth workflows without letting CI silently rewrite reviewed code.

## Why it matters

Use this group to turn changes into repeatable, reviewable, reversible delivery paths.

## JavaScript example

```js
const verifyGeneratedClean = ({ statusLines }) => {
  return statusLines.filter((line) => line.startsWith(' M docs/') || line.startsWith('?? docs/'));
};

console.log(verifyGeneratedClean({ statusLines: [' M docs/data-storage/README.md'] }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
