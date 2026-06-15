# LLM-as-judge pitfalls

**Domain:** AI Engineering
**Group:** Evaluation and observability
**Example environment:** node

## Summary

LLM-as-judge evals can scale qualitative review, but judges have bias, drift, prompt sensitivity, and blind spots. They need calibration against human labels, clear rubrics, disagreement tracking, and spot checks.

## Why it matters

Use this group to measure AI behavior with datasets, traces, prompt regression tests, judge calibration, and production quality signals.

## Related concepts

- System Design: SLOs and error budgets

## JavaScript example

```js
const aggregateJudges = (scores) => {
  const sorted = scores.toSorted((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
};

console.log(aggregateJudges([0.8, 0.2, 0.9]));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
