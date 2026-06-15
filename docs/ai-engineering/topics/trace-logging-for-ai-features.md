# Trace logging for AI features

**Domain:** AI Engineering
**Group:** Evaluation and observability
**Role tags:** sr, ai
**Example environment:** node

## Summary

AI traces record prompts, model choices, tool calls, retrieval inputs, outputs, latency, cost, and policy decisions with sensitive data controls. They are required to debug quality regressions and production incidents.

## Why it matters

Use this group to measure AI behavior with datasets, traces, prompt regression tests, judge calibration, and production quality signals.

## Related concepts

- System Design: Tracing across async workflows
- Backend: Log aggregation with sampling

## JavaScript example

```js
const redact = (value) => String(value).replace(/[\w.+-]+@[\w.-]+/g, '[email]');

const trace = ({ prompt, model, latencyMs }) => ({
  model,
  latencyMs,
  promptPreview: redact(prompt).slice(0, 120)
});

console.log(trace({ prompt: 'email pat@example.com', model: 'fast', latencyMs: 320 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
