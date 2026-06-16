# Visual regression testing

**Domain:** Design Systems
**Group:** Documentation, testing, and release
**Role tags:** sr, design-system, frontend, dx
**Example environment:** node

## Summary

Visual regression testing compares rendered component states across changes to catch unintended appearance shifts. It is most useful when snapshots represent real supported states instead of random page screenshots.

## Why it matters

Use this group to keep component behavior documented, tested, versioned, and safe for consuming teams to upgrade.

## JavaScript example

```js
const snapshots = [
  { component: 'Button', state: 'default', diffPercent: 0 },
  { component: 'Dialog', state: 'open', diffPercent: 0.8 }
];

console.log(snapshots.filter((snapshot) => snapshot.diffPercent > 0.5));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
