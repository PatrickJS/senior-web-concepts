# Streaming AI UX

**Domain:** AI Engineering
**Group:** Model operations, cost, and rollout
**Role tags:** sr, ai
**Example environment:** node

## Summary

Streaming AI UX delivers partial output as it is generated, improving perceived latency and enabling cancellation. It must handle partial sentences, tool-call pauses, errors, moderation, and final-state reconciliation.

## Why it matters

Use this group to route models, control cost, cache safely, stream responses, and roll out AI features with measurable risk.

## Related concepts

- Frontend: Streaming fetch response handling
- System Design: Latency budget decomposition

## JavaScript example

```js
async function* streamWords(text) {
  for (const word of text.split(' ')) {
    yield word + ' ';
    await new Promise((resolve) => setTimeout(resolve, 10));
  }
}

for await (const chunk of streamWords('partial output feels faster')) process.stdout.write(chunk);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
