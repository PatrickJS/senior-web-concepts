# Sampling, temperature, and top-p

**Domain:** AI Engineering
**Group:** LLM fundamentals and model behavior
**Example environment:** node

## Summary

Sampling settings change how the model chooses among likely next tokens. Temperature affects sharpness, top-p limits the candidate probability mass, and both must be tuned around task type, determinism needs, and evaluation signals.

## Why it matters

Use this group to understand how model limits, sampling, latency, throughput, and capability fit affect production AI features.

## Related concepts

- System Design: SLOs and error budgets

## JavaScript example

```js
const chooseSettings = (task) => {
  if (task === 'classification') return { temperature: 0, topP: 1 };
  if (task === 'brainstorming') return { temperature: 0.8, topP: 0.95 };
  return { temperature: 0.2, topP: 0.9 };
};

console.log(chooseSettings('classification'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
