# Speculative prerendering

**Domain:** Frontend
**Group:** Performance and Web Vitals
**Example environment:** browser

## Summary

Speculative prerendering asks the browser to prepare likely future navigations before the user clicks. It can make navigations instant, but must avoid private-state leaks, side effects, wasted bandwidth, and analytics double-counting.

## Why it matters

Use this group to connect browser metrics to concrete causes: network, parsing, main-thread work, layout, paint, and input latency.

## JavaScript example

```js
const rules = {
  prerender: [{ source: 'list', urls: ['/pricing', '/docs'] }],
  prefetch: [{ source: 'document', where: { href_matches: '/*' } }]
};

const script = document.createElement('script');
script.type = 'speculationrules';
script.textContent = JSON.stringify(rules);
document.head.append(script);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
