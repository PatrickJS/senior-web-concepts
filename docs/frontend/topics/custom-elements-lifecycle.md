# Custom Elements lifecycle

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Role tags:** sr, frontend
**Example environment:** browser

## Summary

Custom Elements lifecycle callbacks handle construction, connection, disconnection, adoption, and observed attribute changes. Correct components defer DOM work until connected and clean up listeners, observers, and async work on disconnect.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
class AsyncPanel extends HTMLElement {
  static observedAttributes = ['open'];
  connectedCallback() { this.render(); }
  disconnectedCallback() { this.abortController?.abort(); }
  attributeChangedCallback() { this.render(); }
  render() { this.textContent = this.hasAttribute('open') ? 'Open' : 'Closed'; }
}

customElements.define('async-panel', AsyncPanel);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
