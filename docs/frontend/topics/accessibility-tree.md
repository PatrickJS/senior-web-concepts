# Accessibility tree

**Domain:** Frontend
**Group:** Input and accessibility
**Example environment:** browser

## Summary

The accessibility tree is the browser-derived semantic representation exposed to assistive technologies. It is built from DOM, native semantics, ARIA, CSS visibility, names, descriptions, focusability, and platform mappings.

## Why it matters

Use this group to reason about operability, assistive technology behavior, focus/input semantics, and whether UI changes are perceivable to more than just a visual mouse user.

## JavaScript example

```js
const button = document.createElement('button');
button.type = 'button';
button.textContent = 'Save';
button.setAttribute('aria-pressed', 'false');

button.addEventListener('click', () => {
  const pressed = button.getAttribute('aria-pressed') === 'true';
  button.setAttribute('aria-pressed', String(!pressed));
});
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
