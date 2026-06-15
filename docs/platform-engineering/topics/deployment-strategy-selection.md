# Deployment strategy selection

**Domain:** Platform Engineering
**Group:** Source control, CI, and release automation
**Role tags:** sr, platform
**Example environment:** node

## Summary

Deployment strategy selection chooses rolling, blue-green, canary, shadow, or feature-flagged rollout based on reversibility, data compatibility, blast radius, and signal quality.

## Why it matters

Use this group to turn changes into repeatable, reviewable, reversible delivery paths.

## JavaScript example

```js
const chooseStrategy = ({ reversible, blastRadius, hasMigration }) => {
  if (hasMigration) return 'feature flag plus expand-contract';
  if (reversible && blastRadius === 'low') return 'rolling';
  return 'canary';
};

console.log(chooseStrategy({ reversible: true, blastRadius: 'high', hasMigration: false }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
