# Feature toggle cleanup

**Domain:** Software Engineering
**Group:** Refactoring and evolution
**Role tags:** sr, software, dx
**Example environment:** node

## Summary

Feature toggles should have owners, expiry dates, and cleanup plans. Stale toggles create hidden branches, test matrix growth, configuration risk, and dead code.

## Why it matters

Use this group to change code safely over time while managing debt, legacy behavior, toggles, and maintainability signals.

## JavaScript example

```js
const toggles = [
  { name: 'newCheckout', owner: 'payments', expires: '2030-01-01' },
  { name: 'oldBanner', owner: null, expires: '2020-01-01' }
];

console.log(toggles.filter((toggle) => !toggle.owner || Date.parse(toggle.expires) < Date.now()));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
