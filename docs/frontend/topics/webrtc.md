# WebRTC

**Domain:** Frontend
**Group:** Memory, streams, and advanced browser APIs
**Example environment:** browser

## Summary

WebRTC provides peer-to-peer media and data channels with NAT traversal, ICE, STUN/TURN, SDP negotiation, encryption, congestion control, and real-time delivery constraints.

## Why it matters

Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.

## JavaScript example

```js
const peer = new RTCPeerConnection({ iceServers: [] });
const channel = peer.createDataChannel('updates');

channel.addEventListener('open', () => {
  channel.send(JSON.stringify({ type: 'cursor', x: 10, y: 20 }));
});

const offer = await peer.createOffer();
await peer.setLocalDescription(offer);
```

## Explain it clearly

A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.
