# Slots composition and escape hatches

**Domain:** Design Systems
**Group:** Component API and implementation
**Role tags:** sr, design-system, frontend
**Example environment:** node

## Summary

Slots and composition let product teams place custom content inside system components without forking them. Escape hatches should be deliberate, documented, and constrained so they do not undermine consistency.

## Why it matters

Use this group to translate design decisions into stable component APIs, composition models, state contracts, and styling rules.

## JavaScript example

```js
const renderCard = ({ title, actions = '', children }) => {
  return '<section><h2>' + title + '</h2><div>' + children + '</div>' + actions + '</section>';
};

console.log(renderCard({ title: 'Profile', children: 'Details' }));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
