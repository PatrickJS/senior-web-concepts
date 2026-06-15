# Plan-execute-observe cycles

**Domain:** AI Engineering
**Group:** Agentic workflows
**Role tags:** sr, ai
**Example environment:** node

## Summary

Plan-execute-observe cycles split agent work into an explicit plan, bounded actions, and evidence-based updates. They help keep long tasks auditable and prevent the agent from drifting away from the objective.

## Why it matters

Use this group to design loops that plan, act, observe, persist state, ask for human review, and recover from partial progress.

## Related concepts

- System Design: Architecture decision records

## JavaScript example

```js
const updatePlan = (plan, completedStep, observation) => plan.map((step) => (
  step.id === completedStep ? { ...step, status: 'done', observation } : step
));

console.log(updatePlan([{ id: 1, status: 'doing' }], 1, 'passed'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
