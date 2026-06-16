# Technical debt management

**Domain:** Software Engineering
**Group:** Refactoring and evolution
**Role tags:** sr, software, product
**Example environment:** node

## Summary

Technical debt is a design or implementation trade-off that creates future carrying cost. Good debt management names the cost, owner, trigger for repayment, and risk if it remains unpaid.

## Why it matters

Use this group to change code safely over time while managing debt, legacy behavior, toggles, and maintainability signals.

## JavaScript example

```js
const debt = { reason: 'temporary adapter', owner: 'checkout-team', repayWhen: 'new payments API ships' };
const actionable = Boolean(debt.reason && debt.owner && debt.repayWhen);

console.log({ actionable });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
