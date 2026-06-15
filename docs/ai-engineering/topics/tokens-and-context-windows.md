# Tokens and context windows

**Domain:** AI Engineering
**Group:** LLM fundamentals and model behavior
**Example environment:** node

## Summary

Tokens are the model's input and output units, and the context window is the bounded working set the model can attend to. Practical AI engineering treats context as a scarce budget shared by instructions, user input, retrieved sources, tools, and output.

## Why it matters

Use this group to understand how model limits, sampling, latency, throughput, and capability fit affect production AI features.

## Related concepts

- System Design: Capacity estimation
- Frontend: Streaming fetch response handling

## JavaScript example

```js
const estimateTokens = (text) => Math.ceil(text.length / 4);

const budget = ({ instructions, sources, userInput, maxContext }) => {
  const used = [instructions, sources, userInput].reduce((sum, text) => sum + estimateTokens(text), 0);
  return { used, remaining: maxContext - used };
};

console.log(budget({ instructions: 'answer with sources', sources: 'doc text', userInput: 'question', maxContext: 8192 }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
