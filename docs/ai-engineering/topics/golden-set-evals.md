# Golden set evals

**Domain:** AI Engineering
**Group:** Evaluation and observability
**Role tags:** sr, ai
**Example environment:** node

## Summary

Golden set evals use curated examples with expected behavior to measure prompt, model, retrieval, and tool changes. Good sets include common cases, edge cases, regressions, and unacceptable outputs.

## Why it matters

Use this group to measure AI behavior with datasets, traces, prompt regression tests, judge calibration, and production quality signals.

## Related concepts

- System Design: Operational readiness review

## JavaScript example

```js
const cases = [
  { input: 'cancel order 123', expectedTool: 'cancel_order' },
  { input: 'what is my order status', expectedTool: 'lookup_order' }
];

const score = (results) => results.filter((result, index) => result.tool === cases[index].expectedTool).length / cases.length;
console.log(score([{ tool: 'cancel_order' }, { tool: 'lookup_order' }]));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
