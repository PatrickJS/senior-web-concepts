# Legacy code characterization

**Domain:** Software Engineering
**Group:** Refactoring and evolution
**Role tags:** sr, software
**Example environment:** node

## Summary

Characterization tests capture what legacy code currently does before changing it. They create a safety net when requirements are unclear, behavior is surprising, or refactoring must preserve quirks.

## Why it matters

Use this group to change code safely over time while managing debt, legacy behavior, toggles, and maintainability signals.

## JavaScript example

```js
import assert from 'node:assert/strict';

const legacyDiscount = (subtotal) => subtotal > 10_000 ? 0.1 : 0;
assert.equal(legacyDiscount(10_001), 0.1);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
