# Human-in-the-loop checkpoints

**Domain:** AI Engineering
**Group:** Agentic workflows
**Role tags:** sr, ai
**Example environment:** node

## Summary

Human-in-the-loop checkpoints pause an AI workflow before high-risk actions, ambiguous decisions, expensive operations, or irreversible side effects. They should be placed by risk, not sprinkled everywhere.

## Why it matters

Use this group to design loops that plan, act, observe, persist state, ask for human review, and recover from partial progress.

## Related concepts

- System Design: Abuse and quota controls
- System Design: Secret and configuration boundaries

## JavaScript example

```js
const requiresApproval = (action) => {
  return action.sideEffect === 'write' || action.costUsd > 1 || action.irreversible;
};

console.log(requiresApproval({ sideEffect: 'write', costUsd: 0.02, irreversible: false }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
