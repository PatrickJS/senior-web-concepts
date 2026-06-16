# Architecture decision records

**Domain:** Software Engineering
**Group:** Collaboration and delivery discipline
**Role tags:** sr, software, dx
**Example environment:** node

## Summary

Architecture decision records capture the context, options, decision, and consequences of important technical choices. They help future engineers understand why a design exists before changing it.

## Why it matters

Use this group to make software work reviewable, explainable, sliceable, and maintainable across a team.

## JavaScript example

```js
const adr = {
  status: 'accepted',
  context: 'Need durable background work',
  decision: 'Use a queue backed by persistent storage',
  consequences: ['extra operational surface', 'recoverable jobs']
};

console.log(adr.status);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
