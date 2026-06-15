# Prompt regression testing

**Domain:** AI Engineering
**Group:** Evaluation and observability
**Role tags:** sr, ai
**Example environment:** node

## Summary

Prompt regression testing checks that prompt, model, tool, or retrieval changes do not break known behavior. The useful unit is the whole AI interaction contract, not just prompt text.

## Why it matters

Use this group to measure AI behavior with datasets, traces, prompt regression tests, judge calibration, and production quality signals.

## Related concepts

- Backend: API contract testing

## JavaScript example

```js
const assertTool = (actual, expected) => {
  if (actual.tool !== expected.tool) throw new Error('tool regression');
};

assertTool({ tool: 'lookup_order' }, { tool: 'lookup_order' });
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
