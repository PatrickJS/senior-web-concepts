# Model capability fit

**Domain:** AI Engineering
**Group:** LLM fundamentals and model behavior
**Role tags:** sr, ai
**Example environment:** node

## Summary

Model capability fit matches a task to a model based on reasoning depth, tool use, latency, context length, language coverage, multimodal needs, cost, and safety behavior. The best model is the one that meets the product constraint, not always the largest model.

## Why it matters

Use this group to understand how model limits, sampling, latency, throughput, and capability fit affect production AI features.

## Related concepts

- System Design: Cost-aware architecture
- System Design: Build vs buy evaluation

## JavaScript example

```js
const models = [
  { name: 'fast', reasoning: 2, cost: 1, latency: 1 },
  { name: 'deep', reasoning: 5, cost: 5, latency: 4 }
];

const pickModel = ({ requiredReasoning, maxCost }) => models.find((model) => model.reasoning >= requiredReasoning && model.cost <= maxCost);
console.log(pickModel({ requiredReasoning: 3, maxCost: 5 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
