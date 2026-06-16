# Abstraction boundaries

**Domain:** Software Engineering
**Group:** Code structure and modularity
**Role tags:** mid, software
**Example environment:** node

## Summary

An abstraction boundary exposes what callers need while hiding volatile implementation details. The boundary should make correct use easier, make invalid use harder, and leave room for implementation changes.

## Why it matters

Use this group to reason about module shape, dependency direction, abstraction, information hiding, and how local code structure affects future change.

## JavaScript example

```js
const createClock = ({ now = () => new Date() } = {}) => ({
  todayIso() {
    return now().toISOString().slice(0, 10);
  }
});

console.log(createClock({ now: () => new Date('2030-01-02T00:00:00Z') }).todayIso());
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
