# Context pruning and summarization

**Domain:** AI Engineering
**Group:** Prompting and context engineering
**Role tags:** sr, ai
**Example environment:** node

## Summary

Context pruning chooses what to keep, compress, or drop as a conversation or task grows. Good pruning preserves goals, constraints, current state, source citations, and unresolved decisions instead of blindly keeping recent messages.

## Why it matters

Use this group to assemble instructions, variables, examples, source context, and conversation state without losing control of the task.

## Related concepts

- System Design: Data modeling from access patterns

## JavaScript example

```js
const pruneContext = (items, maxTokens) => {
  let used = 0;
  return items.toReversed().filter((item) => {
    if (used + item.tokens > maxTokens) return false;
    used += item.tokens;
    return true;
  }).toReversed();
};

console.log(pruneContext([{ text: 'goal', tokens: 10 }, { text: 'latest', tokens: 5 }], 12));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
