# Controlled vs uncontrolled components

**Domain:** Design Systems
**Group:** Component API and implementation
**Role tags:** sr, design-system, frontend
**Example environment:** node

## Summary

Controlled components let app state own the value, while uncontrolled components keep internal state until a boundary event. Design system components should choose the model that matches validation, form, and composition needs.

## Why it matters

Use this group to translate design decisions into stable component APIs, composition models, state contracts, and styling rules.

## JavaScript example

```js
const isControlled = (props) => Object.hasOwn(props, 'value') && typeof props.onChange === 'function';

console.log(isControlled({ value: 'search', onChange: () => {} }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
