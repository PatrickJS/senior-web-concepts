# Code smells

**Domain:** Software Engineering
**Group:** Refactoring and evolution
**Role tags:** jr, software
**Example environment:** node

## Summary

Code smells are signals that code may be harder to change than necessary. Long functions, shotgun changes, primitive obsession, feature envy, and duplicate logic are prompts to investigate, not automatic verdicts.

## Why it matters

Use this group to change code safely over time while managing debt, legacy behavior, toggles, and maintainability signals.

## JavaScript example

```js
const smellSignals = { duplicateBranches: 3, functionLines: 90, hiddenGlobals: 1 };
const investigate = Object.entries(smellSignals).filter(([, count]) => count > 0).map(([name]) => name);

console.log(investigate);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
