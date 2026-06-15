# Instruction hierarchy

**Domain:** AI Engineering
**Group:** Prompting and context engineering
**Role tags:** sr, ai
**Example environment:** node

## Summary

Instruction hierarchy defines which instructions outrank others, such as system policy, developer intent, tool constraints, retrieved content, and user requests. It is the foundation for keeping model behavior stable when context contains conflicting text.

## Why it matters

Use this group to assemble instructions, variables, examples, source context, and conversation state without losing control of the task.

## Related concepts

- AI Engineering: Prompt injection defense
- System Design: Threat modeling at system boundaries

## JavaScript example

```js
const priority = ['system', 'developer', 'tool', 'user', 'retrieved'];

const sortInstructions = (items) => items.toSorted((a, b) => priority.indexOf(a.role) - priority.indexOf(b.role));
console.log(sortInstructions([{ role: 'retrieved' }, { role: 'system' }, { role: 'user' }]));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
