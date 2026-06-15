# Few-shot examples

**Domain:** AI Engineering
**Group:** Prompting and context engineering
**Role tags:** sr, ai
**Example environment:** node

## Summary

Few-shot examples demonstrate the target input-output pattern inside the prompt. They are most useful when they cover edge cases, failure modes, tone, structure, or domain-specific transformations that plain instructions underspecify.

## Why it matters

Use this group to assemble instructions, variables, examples, source context, and conversation state without losing control of the task.

## Related concepts

- AI Engineering: Prompt regression testing

## JavaScript example

```js
const examples = [
  { input: 'refund failed after capture', output: { category: 'billing', urgency: 'high' } },
  { input: 'change button color', output: { category: 'ui', urgency: 'low' } }
];

console.log(examples.map((example) => JSON.stringify(example)).join('\n'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
