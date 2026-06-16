# Component prop API design

**Domain:** Design Systems
**Group:** Component API and implementation
**Role tags:** sr, design-system, frontend
**Example environment:** node

## Summary

Component prop APIs translate design intent into reusable engineering interfaces. Good APIs expose stable semantic choices, prevent invalid combinations, and leave room for content and accessibility requirements.

## Why it matters

Use this group to translate design decisions into stable component APIs, composition models, state contracts, and styling rules.

## JavaScript example

```js
const buttonProps = ({ tone = 'primary', size = 'md', disabled = false }) => ({
  className: ['button', 'button-' + tone, 'button-' + size].join(' '),
  'aria-disabled': disabled || undefined
});

console.log(buttonProps({ tone: 'danger' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
