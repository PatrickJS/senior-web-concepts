# Long-running task state

**Domain:** AI Engineering
**Group:** Agentic workflows
**Example environment:** node

## Summary

Long-running task state stores objective, plan, decisions, tool results, unresolved blockers, budgets, and verification evidence. Without durable state, agent workflows become hard to resume, audit, or debug.

## Why it matters

Use this group to design loops that plan, act, observe, persist state, ask for human review, and recover from partial progress.

## Related concepts

- System Design: Async workflow design
- Backend: CQRS + Event Sourcing projections

## JavaScript example

```js
const taskState = {
  objective: 'update docs',
  plan: ['inspect', 'edit', 'verify'],
  observations: [],
  blocked: false
};

console.log(JSON.stringify(taskState));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
