# Unit test boundaries

**Domain:** Software Engineering
**Group:** Testing and quality signals
**Role tags:** jr, software
**Example environment:** node

## Summary

Unit tests should focus on meaningful behavior at a stable boundary, not private implementation trivia. Good unit boundaries make fast tests valuable while leaving room to refactor internals.

## Why it matters

Use this group to choose tests that prove useful behavior instead of only executing implementation details.

## JavaScript example

```js
import assert from 'node:assert/strict';

const subtotal = (items) => items.reduce((sum, item) => sum + item.priceCents * item.quantity, 0);

assert.equal(subtotal([{ priceCents: 500, quantity: 2 }]), 1000);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
