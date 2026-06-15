# Tool permission boundaries

**Domain:** AI Engineering
**Group:** Structured outputs and tool use
**Role tags:** sr, ai
**Example environment:** node

## Summary

Tool permission boundaries restrict what the model can cause the system to read, write, spend, send, delete, or expose. Permission should be based on user authorization, task context, tool risk, and confirmation requirements.

## Why it matters

Use this group to make model interactions machine-checkable with schemas, tool contracts, validation, dispatch, and permission boundaries.

## Related concepts

- System Design: Threat modeling at system boundaries
- System Design: Secret and configuration boundaries

## JavaScript example

```js
const canCallTool = ({ user, tool }) => {
  if (tool.sideEffect === 'write' && !user.scopes.includes('write')) return false;
  if (tool.requiresConfirmation) return 'confirm';
  return true;
};

console.log(canCallTool({ user: { scopes: ['read'] }, tool: { sideEffect: 'write' } }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
