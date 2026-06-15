# Refusal and escalation paths

**Domain:** AI Engineering
**Group:** Safety, security, and data handling
**Role tags:** sr, ai
**Example environment:** node

## Summary

Refusal and escalation paths define what the product does when the model cannot safely or confidently complete a request. Good designs preserve user trust with clear alternatives, support handoff, or constrained partial help.

## Why it matters

Use this group to reduce prompt injection, unsafe output, privacy leakage, and unclear escalation behavior in AI-backed systems.

## Related concepts

- System Design: Degradation and fallback design

## JavaScript example

```js
const decideOutcome = ({ confidence, risk }) => {
  if (risk === 'high') return 'human-review';
  if (confidence < 0.5) return 'ask-clarifying-question';
  return 'answer';
};

console.log(decideOutcome({ confidence: 0.4, risk: 'low' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
