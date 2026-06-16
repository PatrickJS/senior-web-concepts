# GitHub issues for design changes

**Domain:** Design Systems
**Group:** Figma and design-code handoff
**Role tags:** mid, design-system, design, dx
**Example environment:** node

## Summary

GitHub issues connect design requests to engineering review, implementation, tests, release notes, and linked Figma evidence. They make design system changes traceable instead of scattered across comments and chat.

## Why it matters

Use this group to make design intent inspectable and traceable through variants, responsive constraints, specs, issues, and acceptance criteria.

## JavaScript example

```js
const issue = {
  title: 'Update button focus ring',
  links: { figma: true, pullRequest: true },
  labels: ['design-system', 'accessibility']
};

console.log(issue.links.figma && issue.labels.includes('design-system'));
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
