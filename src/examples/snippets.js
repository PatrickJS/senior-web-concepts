export default {
  "pointer-events": {
    "environment": "browser",
    "code": "const box = document.querySelector('[data-drag-box]');\n\nbox.addEventListener('pointerdown', (event) => {\n  box.setPointerCapture(event.pointerId);\n  box.dataset.dragging = 'true';\n});\n\nbox.addEventListener('pointermove', (event) => {\n  if (box.dataset.dragging !== 'true') return;\n  box.style.translate = `${event.clientX}px ${event.clientY}px`;\n});\n\nbox.addEventListener('pointerup', (event) => {\n  box.releasePointerCapture(event.pointerId);\n  delete box.dataset.dragging;\n});\n"
  },
  "live-region": {
    "environment": "browser",
    "code": "const region = document.querySelector('[aria-live=\"polite\"]');\n\nexport const announce = (message) => {\n  region.textContent = '';\n  requestAnimationFrame(() => {\n    region.textContent = message;\n  });\n};\n\nannounce('Saved changes');\n"
  },
  "accessibility-tree": {
    "environment": "browser",
    "code": "const button = document.createElement('button');\nbutton.type = 'button';\nbutton.textContent = 'Save';\nbutton.setAttribute('aria-pressed', 'false');\n\nbutton.addEventListener('click', () => {\n  const pressed = button.getAttribute('aria-pressed') === 'true';\n  button.setAttribute('aria-pressed', String(!pressed));\n});\n"
  },
  "idempotent-action": {
    "environment": "node",
    "code": "const inFlight = new Map();\n\nexport const runOnce = async (key, action) => {\n  if (inFlight.has(key)) return inFlight.get(key);\n\n  const promise = action().finally(() => inFlight.delete(key));\n  inFlight.set(key, promise);\n  return promise;\n};\n\nawait runOnce('save:profile:patrickjs', async () => ({ ok: true }));\n"
  },
  "deterministic-render": {
    "environment": "node",
    "code": "export const renderUserCard = (state) => {\n  const name = state.user?.name ?? 'Unknown';\n  const plan = state.user?.plan ?? 'free';\n  return `<article><h2>${name}</h2><p>${plan}</p></article>`;\n};\n\nconst state = Object.freeze({ user: { name: 'Patrick', plan: 'pro' } });\nconsole.log(renderUserCard(state));\n"
  },
  "priority-inversion": {
    "environment": "node",
    "code": "const queue = [];\n\nexport const schedule = (priority, task) => {\n  queue.push({ priority, task });\n  queue.sort((a, b) => b.priority - a.priority);\n};\n\nschedule(1, () => console.log('background render'));\nschedule(10, () => console.log('input update first'));\n\nwhile (queue.length > 0) queue.shift().task();\n"
  },
  "speculation-rules": {
    "environment": "browser",
    "code": "const rules = {\n  prerender: [{ source: 'list', urls: ['/pricing', '/docs'] }],\n  prefetch: [{ source: 'document', where: { href_matches: '/*' } }]\n};\n\nconst script = document.createElement('script');\nscript.type = 'speculationrules';\nscript.textContent = JSON.stringify(rules);\ndocument.head.append(script);\n"
  },
  "web-vitals-observer": {
    "environment": "browser",
    "code": "const report = ({ name, value, id }) => {\n  navigator.sendBeacon('/vitals', JSON.stringify({ name, value, id }));\n};\n\nnew PerformanceObserver((list) => {\n  for (const entry of list.getEntries()) {\n    report({ name: entry.entryType, value: entry.startTime, id: entry.id });\n  }\n}).observe({ type: 'largest-contentful-paint', buffered: true });\n"
  },
  "cls-observer": {
    "environment": "browser",
    "code": "let cls = 0;\n\nnew PerformanceObserver((list) => {\n  for (const entry of list.getEntries()) {\n    if (!entry.hadRecentInput) cls += entry.value;\n  }\n  console.log({ cls });\n}).observe({ type: 'layout-shift', buffered: true });\n"
  },
  "inp-observer": {
    "environment": "browser",
    "code": "new PerformanceObserver((list) => {\n  for (const entry of list.getEntries()) {\n    console.log('interaction latency candidate', {\n      duration: entry.duration,\n      inputDelay: entry.processingStart - entry.startTime\n    });\n  }\n}).observe({ type: 'event', buffered: true, durationThreshold: 40 });\n"
  },
  "long-task": {
    "environment": "browser",
    "code": "new PerformanceObserver((list) => {\n  for (const task of list.getEntries()) {\n    console.warn('long task blocked the main thread', task.duration);\n  }\n}).observe({ type: 'longtask', buffered: true });\n"
  },
  "performance-observer": {
    "environment": "node",
    "code": "import { performance, PerformanceObserver } from 'node:perf_hooks';\n\nconst observer = new PerformanceObserver((list) => {\n  for (const entry of list.getEntries()) console.log(entry.name, entry.duration);\n});\n\nobserver.observe({ entryTypes: ['measure'] });\nperformance.mark('start');\nawait new Promise((resolve) => setTimeout(resolve, 20));\nperformance.mark('end');\nperformance.measure('async-work', 'start', 'end');\n"
  },
  "gc-timing": {
    "environment": "node",
    "code": "const registry = new FinalizationRegistry((label) => {\n  console.log('GC eventually collected', label);\n});\n\nlet value = { payload: new Array(1000).fill('x') };\nregistry.register(value, 'large-payload');\nvalue = null;\n\nconsole.log('GC is nondeterministic; never depend on this callback for correctness.');\n"
  },
  "detached-dom": {
    "environment": "browser",
    "code": "const listeners = new WeakMap();\n\nexport const mount = (node) => {\n  const onClick = () => console.log('clicked');\n  node.addEventListener('click', onClick);\n  listeners.set(node, onClick);\n};\n\nexport const unmount = (node) => {\n  node.removeEventListener('click', listeners.get(node));\n  listeners.delete(node);\n  node.remove();\n};\n"
  },
  "memory-leak": {
    "environment": "browser",
    "code": "const controller = new AbortController();\n\nwindow.addEventListener('resize', () => {\n  console.log(window.innerWidth);\n}, { signal: controller.signal });\n\nexport const dispose = () => {\n  controller.abort();\n};\n"
  },
  "streaming-fetch": {
    "environment": "browser",
    "code": "/* global fetch */\nconst response = await fetch('/events');\nconst reader = response.body.getReader();\nconst decoder = new TextDecoder();\n\nwhile (true) {\n  const { value, done } = await reader.read();\n  if (done) break;\n  console.log(decoder.decode(value, { stream: true }));\n}\n"
  },
  "abort-controller": {
    "environment": "node",
    "code": "/* global fetch */\nconst controller = new AbortController();\nconst timeout = setTimeout(() => controller.abort(), 1000);\n\ntry {\n  const response = await fetch('https://example.com', { signal: controller.signal });\n  console.log(response.status);\n} finally {\n  clearTimeout(timeout);\n}\n"
  },
  "backpressure-stream": {
    "environment": "node",
    "code": "import { WritableStream } from 'node:stream/web';\n\nconst sink = new WritableStream({\n  async write(chunk) {\n    await new Promise((resolve) => setTimeout(resolve, 10));\n    console.log('wrote', chunk);\n  }\n}, { highWaterMark: 1 });\n\nconst writer = sink.getWriter();\nfor (const chunk of ['a', 'b', 'c']) {\n  await writer.ready;\n  await writer.write(chunk);\n}\nawait writer.close();\n"
  },
  "webrtc": {
    "environment": "browser",
    "code": "const peer = new RTCPeerConnection({ iceServers: [] });\nconst channel = peer.createDataChannel('updates');\n\nchannel.addEventListener('open', () => {\n  channel.send(JSON.stringify({ type: 'cursor', x: 10, y: 20 }));\n});\n\nconst offer = await peer.createOffer();\nawait peer.setLocalDescription(offer);\n"
  },
  "crdt-gset": {
    "environment": "node",
    "code": "const mergeGSet = (a, b) => new Set([...a, ...b]);\n\nconst tabA = new Set(['task:1']);\nconst tabB = new Set(['task:2']);\nconst merged = mergeGSet(tabA, tabB);\n\nconsole.log([...merged]);\n"
  },
  "offline-conflict": {
    "environment": "node",
    "code": "const mergeField = (local, remote) => {\n  if (local.version > remote.version) return local;\n  if (remote.version > local.version) return remote;\n  return { ...remote, value: local.value, conflict: local.value !== remote.value };\n};\n\nconsole.log(mergeField(\n  { value: 'dark', version: 3 },\n  { value: 'light', version: 2 }\n));\n"
  },
  "optimistic-rollback": {
    "environment": "node",
    "code": "let state = { liked: false, count: 0 };\n\nconst optimisticLike = async (save) => {\n  const previous = state;\n  state = { liked: true, count: state.count + 1 };\n\n  try {\n    await save();\n  } catch {\n    state = previous;\n  }\n};\n"
  },
  "event-sourcing-frontend": {
    "environment": "node",
    "code": "const events = [\n  { type: 'todo.added', text: 'Ship docs' },\n  { type: 'todo.completed', index: 0 }\n];\n\nconst project = (state, event) => {\n  if (event.type === 'todo.added') return { todos: [...state.todos, { text: event.text, done: false }] };\n  if (event.type === 'todo.completed') return { todos: state.todos.map((todo, index) => index === event.index ? { ...todo, done: true } : todo) };\n  return state;\n};\n\nconsole.log(events.reduce(project, { todos: [] }));\n"
  },
  "finite-state": {
    "environment": "node",
    "code": "const transitions = {\n  idle: { SUBMIT: 'saving' },\n  saving: { RESOLVE: 'saved', REJECT: 'error' },\n  error: { RETRY: 'saving' },\n  saved: { EDIT: 'idle' }\n};\n\nconst transition = (state, event) => transitions[state]?.[event] ?? state;\nconsole.log(transition('saving', 'RESOLVE'));\n"
  },
  "microfrontend": {
    "environment": "browser",
    "code": "const registry = new Map();\n\nexport const registerApp = (name, app) => registry.set(name, app);\n\nexport const mountApp = async (name, target) => {\n  const app = registry.get(name) ?? await import(`/apps/${name}.js`);\n  return app.mount(target);\n};\n"
  },
  "edge-rendering": {
    "environment": "node",
    "code": "export default async function handleRequest(request) {\n  const url = new URL(request.url);\n  return new Response(`<h1>${url.pathname}</h1>`, {\n    headers: { 'content-type': 'text/html; charset=utf-8' }\n  });\n}\n"
  },
  "server-components": {
    "environment": "node",
    "code": "export const ProductServerComponent = async ({ id, db }) => {\n  const product = await db.products.get(id);\n  return {\n    type: 'ProductCard',\n    props: { title: product.title, price: product.price }\n  };\n};\n"
  },
  "hydration": {
    "environment": "browser",
    "code": "const state = JSON.parse(document.querySelector('#__STATE__').textContent);\n\nfor (const node of document.querySelectorAll('[data-hydrate]')) {\n  const module = await import(node.dataset.hydrate);\n  module.hydrate(node, state[node.id]);\n}\n"
  },
  "suspense": {
    "environment": "node",
    "code": "const createResource = (promise) => {\n  let status = 'pending';\n  let result;\n  const suspender = promise.then(\n    (value) => { status = 'success'; result = value; },\n    (error) => { status = 'error'; result = error; }\n  );\n\n  return () => {\n    if (status === 'pending') throw suspender;\n    if (status === 'error') throw result;\n    return result;\n  };\n};\n"
  },
  "waterfall": {
    "environment": "node",
    "code": "const loadPageBad = async () => {\n  const user = await loadUser();\n  const posts = await loadPosts(user.id);\n  return { user, posts };\n};\n\nconst loadPageBetter = async (id) => {\n  const [user, posts] = await Promise.all([loadUser(id), loadPosts(id)]);\n  return { user, posts };\n};\n"
  },
  "scheduler": {
    "environment": "browser",
    "code": "const post = globalThis.scheduler?.postTask\n  ? (task) => scheduler.postTask(task, { priority: 'user-blocking' })\n  : (task) => setTimeout(task, 0);\n\npost(() => console.log('run after yielding to input'));\n"
  },
  "tearing": {
    "environment": "node",
    "code": "let store = { count: 0, version: 1 };\n\nconst getSnapshot = () => store;\n\nconst render = () => {\n  const snapshot = getSnapshot();\n  return `${snapshot.count}:${snapshot.version}`;\n};\n"
  },
  "ui-race": {
    "environment": "node",
    "code": "let latestRequestId = 0;\n\nconst search = async (query, fetchResults) => {\n  const requestId = ++latestRequestId;\n  const results = await fetchResults(query);\n  if (requestId !== latestRequestId) return;\n  render(results);\n};\n"
  },
  "prototype-pollution": {
    "environment": "node",
    "code": "const unsafeKeys = new Set(['__proto__', 'prototype', 'constructor']);\n\nexport const assignSafe = (target, source) => {\n  for (const [key, value] of Object.entries(source)) {\n    if (unsafeKeys.has(key)) continue;\n    target[key] = value;\n  }\n  return target;\n};\n"
  },
  "dom-clobbering": {
    "environment": "browser",
    "code": "const form = document.querySelector('form[data-login-form]');\nconst action = form.getAttribute('action');\n\n// Avoid reading document.loginForm or form.action when attacker-controlled\n// names/ids can shadow properties.\nconsole.log(new URL(action, location.origin).href);\n"
  },
  "trusted-types": {
    "environment": "browser",
    "code": "const policy = trustedTypes.createPolicy('app-html', {\n  createHTML(value) {\n    return value.replaceAll('<script', '&lt;script');\n  }\n});\n\nconst target = document.querySelector('#preview');\ntarget.innerHTML = policy.createHTML('<p>safe preview</p>');\n"
  },
  "csp": {
    "environment": "node",
    "code": "import { createServer } from 'node:http';\n\ncreateServer((request, response) => {\n  const nonce = crypto.randomUUID();\n  response.setHeader('content-security-policy', `script-src 'nonce-${nonce}'; object-src 'none'; base-uri 'none'`);\n  response.end(`<script nonce=\"${nonce}\">console.log('ok')</script>`);\n}).listen(0);\n"
  },
  "csrf-xss": {
    "environment": "node",
    "code": "const escapeHtml = (value) => String(value)\n  .replaceAll('&', '&amp;')\n  .replaceAll('<', '&lt;')\n  .replaceAll('>', '&gt;')\n  .replaceAll('\"', '&quot;');\n\nexport const renderComment = (comment) => `<p>${escapeHtml(comment)}</p>`;\nexport const verifyCsrf = (session, token) => session.csrfToken === token;\n"
  },
  "same-site": {
    "environment": "node",
    "code": "const cookie = [\n  'session=abc123',\n  'HttpOnly',\n  'Secure',\n  'SameSite=Lax',\n  'Path=/'\n].join('; ');\n\nconsole.log('Set-Cookie:', cookie);\n"
  },
  "cors": {
    "environment": "node",
    "code": "import { createServer } from 'node:http';\n\ncreateServer((request, response) => {\n  response.setHeader('access-control-allow-origin', 'https://app.example.com');\n  response.setHeader('access-control-allow-methods', 'GET,POST,OPTIONS');\n  response.setHeader('access-control-allow-headers', 'content-type,authorization');\n  if (request.method === 'OPTIONS') return response.end();\n  response.end(JSON.stringify({ ok: true }));\n}).listen(0);\n"
  },
  "resource-hints": {
    "environment": "browser",
    "code": "const addHint = (rel, href, as) => {\n  const link = document.createElement('link');\n  link.rel = rel;\n  link.href = href;\n  if (as) link.as = as;\n  document.head.append(link);\n};\n\naddHint('preconnect', 'https://cdn.example.com');\naddHint('preload', '/fonts/app.woff2', 'font');\naddHint('prefetch', '/next-route.js', 'script');\n"
  },
  "priority-hints": {
    "environment": "browser",
    "code": "const hero = document.querySelector('img[data-hero]');\nhero.fetchPriority = 'high';\nhero.loading = 'eager';\n\nconst belowFold = document.querySelector('img[data-below-fold]');\nbelowFold.fetchPriority = 'low';\nbelowFold.loading = 'lazy';\n"
  },
  "etag-cache-control": {
    "environment": "node",
    "code": "import { createHash } from 'node:crypto';\n\nexport const sendCached = (request, response, body) => {\n  const etag = `\"${createHash('sha256').update(body).digest('base64url')}\"`;\n  response.setHeader('etag', etag);\n  response.setHeader('cache-control', 'public, max-age=60, stale-while-revalidate=300');\n  if (request.headers['if-none-match'] === etag) {\n    response.writeHead(304).end();\n    return;\n  }\n  response.end(body);\n};\n"
  },
  "swr-cache": {
    "environment": "node",
    "code": "const cache = new Map();\n\nexport const getStaleWhileRevalidate = async (key, load) => {\n  const entry = cache.get(key);\n  if (entry) {\n    load().then((value) => cache.set(key, { value, time: Date.now() }));\n    return entry.value;\n  }\n\n  const value = await load();\n  cache.set(key, { value, time: Date.now() });\n  return value;\n};\n"
  },
  "cache-invalidation": {
    "environment": "node",
    "code": "const keyForUser = (userId, version) => `user:${userId}:v${version}`;\n\nconst writeUser = async (user, db, cache) => {\n  const saved = await db.users.save({ ...user, cacheVersion: user.cacheVersion + 1 });\n  cache.delete(keyForUser(saved.id, user.cacheVersion));\n  cache.set(keyForUser(saved.id, saved.cacheVersion), saved);\n  return saved;\n};\n"
  },
  "service-worker": {
    "environment": "browser",
    "code": "self.addEventListener('install', (event) => {\n  event.waitUntil(caches.open('v1').then((cache) => cache.addAll(['/'])));\n  self.skipWaiting();\n});\n\nself.addEventListener('activate', (event) => {\n  event.waitUntil(self.clients.claim());\n});\n\nself.addEventListener('fetch', (event) => {\n  event.respondWith(fetch(event.request));\n});\n"
  },
  "indexeddb": {
    "environment": "browser",
    "code": "const openRequest = indexedDB.open('app', 1);\n\nopenRequest.onupgradeneeded = () => {\n  openRequest.result.createObjectStore('events', { keyPath: 'id' });\n};\n\nconst db = await new Promise((resolve, reject) => {\n  openRequest.onsuccess = () => resolve(openRequest.result);\n  openRequest.onerror = () => reject(openRequest.error);\n});\n"
  },
  "mutation-observer": {
    "environment": "browser",
    "code": "const pending = new Set();\n\nconst observer = new MutationObserver((records) => {\n  for (const record of records) pending.add(record.target);\n  queueMicrotask(() => {\n    for (const node of pending) console.log('changed', node);\n    pending.clear();\n  });\n});\n\nobserver.observe(document.body, { subtree: true, childList: true });\n"
  },
  "resize-observer": {
    "environment": "browser",
    "code": "const observer = new ResizeObserver((entries) => {\n  requestAnimationFrame(() => {\n    for (const entry of entries) {\n      entry.target.style.setProperty('--width', `${entry.contentRect.width}px`);\n    }\n  });\n});\n\nobserver.observe(document.querySelector('[data-panel]'));\n"
  },
  "intersection-observer": {
    "environment": "browser",
    "code": "const observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (!entry.isIntersecting) continue;\n    entry.target.src = entry.target.dataset.src;\n    observer.unobserve(entry.target);\n  }\n}, { rootMargin: '200px' });\n\nfor (const image of document.querySelectorAll('img[data-src]')) observer.observe(image);\n"
  },
  "css-pipeline": {
    "environment": "browser",
    "code": "const el = document.querySelector('[data-card]');\n\n// Layout-affecting: width, height, top, left.\nel.style.width = '320px';\n\n// Composite-friendly: transform and opacity.\nel.style.transform = 'translate3d(10px, 0, 0)';\nel.style.opacity = '0.9';\n"
  },
  "containment": {
    "environment": "browser",
    "code": "const panel = document.querySelector('[data-virtual-list]');\npanel.style.contain = 'layout paint size';\npanel.style.contentVisibility = 'auto';\npanel.style.containIntrinsicSize = '800px';\n"
  },
  "wasm": {
    "environment": "node",
    "code": "const bytes = new Uint8Array([\n  0, 97, 115, 109, 1, 0, 0, 0\n]);\n\nconst module = await WebAssembly.compile(bytes);\nconsole.log(module instanceof WebAssembly.Module);\n"
  },
  "offscreen-canvas": {
    "environment": "browser",
    "code": "const canvas = document.querySelector('canvas');\nconst offscreen = canvas.transferControlToOffscreen();\nconst worker = new Worker('/paint-worker.js', { type: 'module' });\nworker.postMessage({ canvas: offscreen }, [offscreen]);\n"
  },
  "transferable": {
    "environment": "node",
    "code": "import { Worker } from 'node:worker_threads';\n\nconst worker = new Worker(new URL('./worker-receiver.js', import.meta.url));\nconst buffer = new ArrayBuffer(1024);\nworker.postMessage(buffer, [buffer]);\nconsole.log(buffer.byteLength); // 0 after transfer\n"
  },
  "shared-array-buffer": {
    "environment": "node",
    "code": "const shared = new SharedArrayBuffer(4);\nconst view = new Int32Array(shared);\n\nAtomics.store(view, 0, 41);\nAtomics.add(view, 0, 1);\nconsole.log(Atomics.load(view, 0));\n"
  },
  "workers": {
    "environment": "browser",
    "code": "const worker = new Worker('/cpu-worker.js', { type: 'module' });\nworker.postMessage({ type: 'hash', payload: 'large input' });\n\nawait navigator.serviceWorker.register('/service-worker.js', { type: 'module' });\n"
  },
  "web-components": {
    "environment": "browser",
    "code": "class UserBadge extends HTMLElement {\n  connectedCallback() {\n    this.textContent = this.getAttribute('name') ?? 'Unknown';\n    this.dispatchEvent(new CustomEvent('ready', { bubbles: true }));\n  }\n}\n\ncustomElements.define('user-badge', UserBadge);\n"
  },
  "custom-elements": {
    "environment": "browser",
    "code": "class AsyncPanel extends HTMLElement {\n  static observedAttributes = ['open'];\n  connectedCallback() { this.render(); }\n  disconnectedCallback() { this.abortController?.abort(); }\n  attributeChangedCallback() { this.render(); }\n  render() { this.textContent = this.hasAttribute('open') ? 'Open' : 'Closed'; }\n}\n\ncustomElements.define('async-panel', AsyncPanel);\n"
  },
  "shadow-dom": {
    "environment": "browser",
    "code": "const host = document.querySelector('theme-card');\nconst root = host.attachShadow({ mode: 'open' });\nroot.innerHTML = `\n  <style>:host { display: block; }</style>\n  <slot></slot>\n`;\n"
  },
  "module-federation": {
    "environment": "browser",
    "code": "const manifest = await fetch('/remotes/catalog.json').then((response) => response.json());\nconst remote = await import(manifest.url);\n\nremote.mount(document.querySelector('#catalog'), { tenantId: 'acme' });\n"
  },
  "dynamic-import": {
    "environment": "browser",
    "code": "const routes = {\n  '/settings': () => import('./routes/settings.js'),\n  '/billing': () => import('./routes/billing.js')\n};\n\nconst module = await routes[location.pathname]?.();\nmodule?.render();\n"
  },
  "code-splitting": {
    "environment": "browser",
    "code": "const loadAdminTools = async (user) => {\n  if (!user.roles.includes('admin')) return null;\n  return import('./admin-tools.js');\n};\n"
  },
  "tree-shaking": {
    "environment": "node",
    "code": "export const used = () => 'kept by bundler';\nexport const unused = () => 'removed when side effects are absent';\n\n// Keep module top level free of irreversible side effects when possible.\n"
  },
  "render-blocking": {
    "environment": "browser",
    "code": "const script = document.createElement('script');\nscript.src = '/analytics.js';\nscript.defer = true;\ndocument.head.append(script);\n\nconst css = document.createElement('link');\ncss.rel = 'preload';\ncss.as = 'style';\ncss.href = '/critical.css';\ndocument.head.append(css);\n"
  },
  "layout-thrashing": {
    "environment": "browser",
    "code": "const items = [...document.querySelectorAll('.item')];\nconst rects = items.map((item) => item.getBoundingClientRect());\n\nrequestAnimationFrame(() => {\n  for (const [index, item] of items.entries()) {\n    item.style.transform = `translateY(${rects[index].height}px)`;\n  }\n});\n"
  },
  "task-starvation": {
    "environment": "node",
    "code": "const yieldToLoop = () => new Promise((resolve) => setTimeout(resolve, 0));\n\nfor (let index = 0; index < 100000; index++) {\n  if (index % 1000 === 0) await yieldToLoop();\n  // process chunk\n}\n"
  },
  "event-loop": {
    "environment": "node",
    "code": "setTimeout(() => console.log('macrotask'), 0);\nqueueMicrotask(() => console.log('microtask'));\nPromise.resolve().then(() => console.log('promise job'));\nconsole.log('sync');\n"
  },
  "stale-closure": {
    "environment": "node",
    "code": "let currentToken = 'v1';\nconst getToken = () => currentToken;\n\nconst submit = async () => {\n  const tokenAtSendTime = getToken();\n  return { authorization: `Bearer ${tokenAtSendTime}` };\n};\n\ncurrentToken = 'v2';\nconsole.log(await submit());\n"
  },
  "memoization": {
    "environment": "node",
    "code": "const memoize = (fn) => {\n  const cache = new Map();\n  return (input) => {\n    const key = JSON.stringify(input);\n    if (!cache.has(key)) cache.set(key, fn(input));\n    return cache.get(key);\n  };\n};\n"
  },
  "referential-equality": {
    "environment": "node",
    "code": "const stableOptions = Object.freeze({ pageSize: 50 });\n\nconst shouldRerender = (previous, next) => previous.options !== next.options;\nconsole.log(shouldRerender({ options: stableOptions }, { options: stableOptions }));\n"
  },
  "immutable-data": {
    "environment": "node",
    "code": "const updateTodo = (state, id, patch) => ({\n  ...state,\n  todos: state.todos.map((todo) => todo.id === id ? { ...todo, ...patch } : todo)\n});\n"
  },
  "structural-sharing": {
    "environment": "node",
    "code": "const nextState = (state) => ({\n  ...state,\n  user: { ...state.user, name: 'Patrick' }\n});\n\nconst state = { user: { name: 'Old' }, settings: { theme: 'dark' } };\nconst next = nextState(state);\nconsole.log(state.settings === next.settings);\n"
  },
  "vdom-diff": {
    "environment": "node",
    "code": "const diffByKey = (previous, next) => {\n  const oldByKey = new Map(previous.map((node) => [node.key, node]));\n  return next.map((node) => ({ before: oldByKey.get(node.key), after: node }));\n};\n"
  },
  "fiber": {
    "environment": "node",
    "code": "const workLoop = (units, deadline) => {\n  while (units.length > 0 && deadline.timeRemaining() > 1) {\n    const unit = units.shift();\n    unit.perform();\n  }\n  return units;\n};\n"
  },
  "reconciliation": {
    "environment": "node",
    "code": "const reconcileChildren = (oldChildren, newChildren) => {\n  const oldByKey = new Map(oldChildren.map((child) => [child.key, child]));\n  return newChildren.map((child) => ({ ...child, previous: oldByKey.get(child.key) }));\n};\n"
  },
  "time-slicing": {
    "environment": "node",
    "code": "const processInSlices = async (items, visit) => {\n  for (let index = 0; index < items.length; index++) {\n    visit(items[index]);\n    if (index % 500 === 0) await new Promise((resolve) => setTimeout(resolve, 0));\n  }\n};\n"
  },
  "concurrent-rendering": {
    "environment": "node",
    "code": "let committed = { text: 'old' };\nlet draft = { ...committed, text: 'new' };\n\nconst commit = () => {\n  committed = draft;\n};\n"
  },
  "streaming-ssr": {
    "environment": "node",
    "code": "import { createServer } from 'node:http';\n\ncreateServer(async (request, response) => {\n  response.setHeader('content-type', 'text/html; charset=utf-8');\n  response.write('<main><h1>Loading</h1>');\n  await new Promise((resolve) => setTimeout(resolve, 50));\n  response.end('<section>Data loaded</section></main>');\n}).listen(0);\n"
  },
  "islands": {
    "environment": "browser",
    "code": "for (const island of document.querySelectorAll('[data-island]')) {\n  if (island.matches('[data-eager]')) {\n    const module = await import(island.dataset.island);\n    module.hydrate(island);\n  }\n}\n"
  },
  "tcp-aimd": {
    "environment": "node",
    "code": "let congestionWindow = 1;\n\nconst onAck = () => {\n  congestionWindow += 1 / congestionWindow;\n};\n\nconst onLoss = () => {\n  congestionWindow = Math.max(1, Math.floor(congestionWindow / 2));\n};\n\nonAck();\nonLoss();\nconsole.log({ congestionWindow });\n"
  },
  "tls-handshake": {
    "environment": "node",
    "code": "const tls13Handshake = [\n  'ClientHello: supported versions, cipher suites, key share',\n  'ServerHello: selected suite and key share',\n  'EncryptedExtensions + Certificate + Finished',\n  'Client Finished',\n  'Application data with forward secrecy'\n];\n\nconsole.log(tls13Handshake);\n"
  },
  "http2": {
    "environment": "node",
    "code": "import http2 from 'node:http2';\n\nconst server = http2.createServer();\nserver.on('stream', (stream, headers) => {\n  stream.respond({ ':status': 200, 'content-type': 'application/json' });\n  stream.end(JSON.stringify({ path: headers[':path'] }));\n});\nserver.listen(0);\n"
  },
  "quic-loss": {
    "environment": "node",
    "code": "const packets = new Map([[1, 'sent'], [2, 'sent'], [3, 'sent']]);\nconst acked = new Set([1, 3]);\n\nfor (const packet of packets.keys()) {\n  if (!acked.has(packet)) console.log('retransmit packet data from', packet);\n}\n"
  },
  "connection-pool": {
    "environment": "node",
    "code": "class Pool {\n  constructor(limit) { this.limit = limit; this.active = 0; this.queue = []; }\n  async run(task) {\n    if (this.active >= this.limit) await new Promise((resolve) => this.queue.push(resolve));\n    this.active++;\n    try { return await task(); }\n    finally { this.active--; this.queue.shift()?.(); }\n  }\n}\n"
  },
  "zero-downtime": {
    "environment": "node",
    "code": "let accepting = true;\nconst inflight = new Set();\n\nexport const handle = async (request) => {\n  if (!accepting) return new Response('draining', { status: 503 });\n  const work = processRequest(request);\n  inflight.add(work);\n  try { return await work; }\n  finally { inflight.delete(work); }\n};\n\nexport const drain = async () => {\n  accepting = false;\n  await Promise.allSettled(inflight);\n};\n"
  },
  "tx-isolation": {
    "environment": "node",
    "code": "const updateWithSnapshotCheck = async (db, id, expectedVersion, patch) => {\n  const row = await db.get(id);\n  if (row.version !== expectedVersion) throw new Error('serialization conflict');\n  return db.save(id, { ...row, ...patch, version: row.version + 1 });\n};\n"
  },
  "btree-lsm": {
    "environment": "node",
    "code": "const chooseIndexEngine = ({ writeHeavy, rangeQueries }) => {\n  if (writeHeavy && !rangeQueries) return 'LSM tree: batch writes, compact later';\n  return 'B-tree: ordered pages and predictable range scans';\n};\n\nconsole.log(chooseIndexEngine({ writeHeavy: true, rangeQueries: false }));\n"
  },
  "query-planner": {
    "environment": "node",
    "code": "const estimate = ({ rows, selectivity, randomIoCost }) => ({\n  seqScan: rows,\n  indexScan: rows * selectivity * randomIoCost\n});\n\nconsole.log(estimate({ rows: 1_000_000, selectivity: 0.001, randomIoCost: 4 }));\n"
  },
  "deadlock": {
    "environment": "node",
    "code": "const waitsFor = new Map([\n  ['tx1', ['tx2']],\n  ['tx2', ['tx1']]\n]);\n\nconst hasCycle = (node, seen = new Set()) => {\n  if (seen.has(node)) return true;\n  seen.add(node);\n  return (waitsFor.get(node) ?? []).some((next) => hasCycle(next, new Set(seen)));\n};\n\nconsole.log(hasCycle('tx1'));\n"
  },
  "acid-base": {
    "environment": "node",
    "code": "const acidTransfer = async (db, from, to, amount) => db.transaction(async (tx) => {\n  await tx.debit(from, amount);\n  await tx.credit(to, amount);\n});\n\nconst baseUpdate = async (events, event) => {\n  events.publish(event);\n  return { accepted: true, visibleAfterProjection: true };\n};\n"
  },
  "saga": {
    "environment": "node",
    "code": "const runSaga = async (steps) => {\n  const completed = [];\n  try {\n    for (const step of steps) {\n      await step.do();\n      completed.push(step);\n    }\n  } catch (error) {\n    for (const step of completed.reverse()) await step.undo?.();\n    throw error;\n  }\n};\n"
  },
  "redlock": {
    "environment": "node",
    "code": "const acquireWithFencing = async (locks, resource) => {\n  const token = await locks.nextFencingToken(resource);\n  const quorum = await locks.tryAcquireQuorum(resource, token, { ttlMs: 3000 });\n  if (!quorum) throw new Error('lock quorum failed');\n  return { resource, token };\n};\n"
  },
  "cap": {
    "environment": "node",
    "code": "const handlePartition = ({ requireFreshReads }) => {\n  if (requireFreshReads) return 'CP: reject or route to leader during partition';\n  return 'AP: accept writes and reconcile later';\n};\n"
  },
  "gcounter": {
    "environment": "node",
    "code": "const mergeCounter = (a, b) => {\n  const nodes = new Set([...Object.keys(a), ...Object.keys(b)]);\n  return Object.fromEntries([...nodes].map((node) => [node, Math.max(a[node] ?? 0, b[node] ?? 0)]));\n};\n\nconsole.log(mergeCounter({ a: 2 }, { a: 1, b: 3 }));\n"
  },
  "read-your-writes": {
    "environment": "node",
    "code": "const readProfile = async ({ primary, replica, userId, minVersion }) => {\n  const row = await replica.get(userId);\n  if (row.version >= minVersion) return row;\n  return primary.get(userId);\n};\n"
  },
  "kafka-rebalance": {
    "environment": "node",
    "code": "const assignPartitions = (members, partitions) => partitions.map((partition, index) => ({\n  partition,\n  member: members[index % members.length]\n}));\n\nconsole.log(assignPartitions(['a', 'b'], [0, 1, 2, 3]));\n"
  },
  "rabbitmq-dlq": {
    "environment": "node",
    "code": "const handleMessage = async (message, channel) => {\n  try {\n    await processMessage(message);\n    channel.ack(message);\n  } catch (error) {\n    if (message.attempts >= 3) channel.sendToQueue('orders.dlq', message.body);\n    else channel.nack(message, false, false);\n  }\n};\n"
  },
  "grpc-flow": {
    "environment": "node",
    "code": "import { Readable } from 'node:stream';\n\nconst source = Readable.from(['a', 'b', 'c']);\nsource.on('data', (chunk) => {\n  const ok = sendToClient(chunk);\n  if (!ok) source.pause();\n});\n\nonClientDrain(() => source.resume());\n"
  },
  "n-plus-one": {
    "environment": "node",
    "code": "const createBatcher = (loadMany) => {\n  let queue = [];\n  return (id) => new Promise((resolve) => {\n    queue.push({ id, resolve });\n    queueMicrotask(async () => {\n      const batch = queue;\n      queue = [];\n      const rows = await loadMany(batch.map((item) => item.id));\n      batch.forEach((item) => item.resolve(rows.get(item.id)));\n    });\n  });\n};\n"
  },
  "oauth": {
    "environment": "node",
    "code": "const validateAccessToken = async (token, mode, authServer) => {\n  if (mode === 'jwt') return verifyJwtLocally(token);\n  if (mode === 'introspection') return authServer.introspect(token);\n  throw new Error('unknown validation mode');\n};\n"
  },
  "rate-limit": {
    "environment": "node",
    "code": "class TokenBucket {\n  constructor({ capacity, refillPerSecond }) {\n    this.capacity = capacity;\n    this.tokens = capacity;\n    this.refillPerSecond = refillPerSecond;\n    this.updatedAt = Date.now();\n  }\n  take() {\n    const elapsed = (Date.now() - this.updatedAt) / 1000;\n    this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillPerSecond);\n    this.updatedAt = Date.now();\n    if (this.tokens < 1) return false;\n    this.tokens -= 1;\n    return true;\n  }\n}\n"
  },
  "circuit-breaker": {
    "environment": "node",
    "code": "const breaker = { failures: 0, openedUntil: 0 };\n\nexport const callWithBreaker = async (task) => {\n  if (Date.now() < breaker.openedUntil) throw new Error('circuit open');\n  try {\n    const result = await task();\n    breaker.failures = 0;\n    return result;\n  } catch (error) {\n    breaker.failures++;\n    if (breaker.failures >= 3) breaker.openedUntil = Date.now() + 5000;\n    throw error;\n  }\n};\n"
  },
  "otel": {
    "environment": "node",
    "code": "const parseTraceParent = (value) => {\n  const [version, traceId, parentId, flags] = value.split('-');\n  return { version, traceId, parentId, sampled: flags === '01' };\n};\n\nconsole.log(parseTraceParent('00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01'));\n"
  },
  "prometheus-cardinality": {
    "environment": "node",
    "code": "const labels = ({ route, method, status }) => ({ route, method, status });\n\n// Avoid labels like userId, email, requestId, or raw URL.\nconsole.log(labels({ route: '/users/:id', method: 'GET', status: 200 }));\n"
  },
  "log-sampling": {
    "environment": "node",
    "code": "const shouldLog = ({ level, rate = 0.01 }) => {\n  if (level === 'error') return true;\n  return Math.random() < rate;\n};\n"
  },
  "io": {
    "environment": "node",
    "code": "import { createReadStream } from 'node:fs';\n\nexport const streamFile = (path, response) => {\n  createReadStream(path).pipe(response);\n};\n"
  },
  "gc-node": {
    "environment": "node",
    "code": "console.log(process.execArgv);\nconsole.log('Node/V8 tuning examples: --max-old-space-size=4096 --trace-gc');\n"
  },
  "thread-pool": {
    "environment": "node",
    "code": "import { Worker } from 'node:worker_threads';\n\nexport const runCpuTask = (data) => new Promise((resolve, reject) => {\n  const worker = new Worker(new URL('./cpu-worker.js', import.meta.url), { workerData: data });\n  worker.once('message', resolve);\n  worker.once('error', reject);\n});\n"
  },
  "actor": {
    "environment": "node",
    "code": "const createActor = (handler) => {\n  const mailbox = [];\n  let running = false;\n  const pump = async () => {\n    if (running) return;\n    running = true;\n    while (mailbox.length > 0) await handler(mailbox.shift());\n    running = false;\n  };\n  return { send(message) { mailbox.push(message); void pump(); } };\n};\n"
  },
  "message-driven": {
    "environment": "node",
    "code": "class Bus {\n  handlers = new Map();\n  on(type, handler) { this.handlers.set(type, [...(this.handlers.get(type) ?? []), handler]); }\n  emit(event) { return Promise.all((this.handlers.get(event.type) ?? []).map((handler) => handler(event))); }\n}\n"
  },
  "cqrs": {
    "environment": "node",
    "code": "const project = (readModel, event) => {\n  if (event.type === 'invoice.paid') readModel.set(event.invoiceId, { status: 'paid' });\n  return readModel;\n};\n"
  },
  "outbox": {
    "environment": "node",
    "code": "const createOrder = async (db, order) => db.transaction(async (tx) => {\n  await tx.orders.insert(order);\n  await tx.outbox.insert({ type: 'order.created', orderId: order.id });\n});\n"
  },
  "sharding": {
    "environment": "node",
    "code": "import { createHash } from 'node:crypto';\n\nconst shardFor = (key, shardCount) => {\n  const hash = createHash('sha256').update(key).digest();\n  return hash.readUInt32BE(0) % shardCount;\n};\n"
  },
  "replica-lag": {
    "environment": "node",
    "code": "const canReadReplica = ({ primaryLsn, replicaLsn, maxLag }) => {\n  return primaryLsn - replicaLsn <= maxLag;\n};\n"
  },
  "db-pool-exhaustion": {
    "environment": "node",
    "code": "const withConnectionTimeout = (pool, ms) => Promise.race([\n  pool.connect(),\n  new Promise((_, reject) => setTimeout(() => reject(new Error('pool timeout')), ms))\n]);\n"
  },
  "prepared-cache": {
    "environment": "node",
    "code": "const statements = new Map();\n\nexport const prepareCached = async (client, sql) => {\n  if (!statements.has(sql)) statements.set(sql, await client.prepare(sql));\n  return statements.get(sql);\n};\n"
  },
  "vacuum": {
    "environment": "node",
    "code": "const needsVacuum = ({ liveRows, deadRows }) => {\n  const ratio = deadRows / Math.max(1, liveRows + deadRows);\n  return ratio > 0.2;\n};\n"
  },
  "pdb": {
    "environment": "node",
    "code": "const podDisruptionBudget = {\n  apiVersion: 'policy/v1',\n  kind: 'PodDisruptionBudget',\n  spec: { minAvailable: 2, selector: { matchLabels: { app: 'api' } } }\n};\n\nconsole.log(JSON.stringify(podDisruptionBudget, null, 2));\n"
  },
  "mesh-shift": {
    "environment": "node",
    "code": "const chooseVersion = (random = Math.random()) => {\n  if (random < 0.05) return 'canary';\n  return 'stable';\n};\n"
  },
  "cold-start": {
    "environment": "node",
    "code": "// Hoisted outside the handler so warm invocations reuse it.\nconst expensiveClient = await createClient();\n\nexport const handler = async (event) => {\n  return expensiveClient.query(event.query);\n};\n"
  },
  "gateway": {
    "environment": "node",
    "code": "const cacheKey = (request) => `${request.method}:${new URL(request.url).pathname}:${request.headers.get('authorization') ?? 'anon'}`;\n\nexport const gatewayCache = new Map();\n"
  },
  "job-retry": {
    "environment": "node",
    "code": "const nextDelay = (attempt) => Math.min(60_000, 1000 * 2 ** attempt);\n\nexport const handleJobFailure = (job) => {\n  if (job.attempt >= 5) return { queue: 'dead-letter', job };\n  return { queue: 'retry', runAt: Date.now() + nextDelay(job.attempt), job: { ...job, attempt: job.attempt + 1 } };\n};\n"
  },
  "cache-patterns": {
    "environment": "node",
    "code": "const getCacheAside = async (key, cache, db) => {\n  const cached = await cache.get(key);\n  if (cached) return cached;\n  const value = await db.get(key);\n  await cache.set(key, value);\n  return value;\n};\n"
  },
  "idempotency-key": {
    "environment": "node",
    "code": "const responses = new Map();\n\nexport const handlePost = async (request, create) => {\n  const key = request.headers.get('idempotency-key');\n  if (responses.has(key)) return responses.get(key);\n  const response = await create();\n  responses.set(key, response);\n  return response;\n};\n"
  },
  "version-vector": {
    "environment": "node",
    "code": "const dominates = (a, b) => Object.keys({ ...a, ...b }).every((node) => (a[node] ?? 0) >= (b[node] ?? 0));\n\nconsole.log(dominates({ a: 2, b: 1 }, { a: 1, b: 1 }));\n"
  },
  "raft": {
    "environment": "node",
    "code": "const requestVote = (candidate, voter) => {\n  if (candidate.term < voter.term) return { voteGranted: false, term: voter.term };\n  if (voter.votedFor && voter.votedFor !== candidate.id) return { voteGranted: false, term: voter.term };\n  return { voteGranted: true, term: candidate.term };\n};\n"
  },
  "bft": {
    "environment": "node",
    "code": "const requiredReplicas = (faults) => 3 * faults + 1;\nconst quorum = (faults) => 2 * faults + 1;\n\nconsole.log({ replicas: requiredReplicas(1), quorum: quorum(1) });\n"
  },
  "chaos": {
    "environment": "node",
    "code": "const maybeFail = async (task, rate = 0.05) => {\n  if (Math.random() < rate) throw new Error('injected failure');\n  return task();\n};\n"
  },
  "split-brain": {
    "environment": "node",
    "code": "const acceptWrite = ({ nodeEpoch, clusterEpoch }) => {\n  if (nodeEpoch !== clusterEpoch) throw new Error('stale primary fenced off');\n  return true;\n};\n"
  },
  "contract-test": {
    "environment": "node",
    "code": "const assertUserContract = (body) => {\n  if (typeof body.id !== 'string') throw new Error('id must be string');\n  if (typeof body.email !== 'string') throw new Error('email must be string');\n};\n"
  },
  "schema-evolution": {
    "environment": "node",
    "code": "const readUser = (payload) => ({\n  id: payload.id,\n  email: payload.email,\n  displayName: payload.displayName ?? payload.email\n});\n"
  },
  "protobuf-json": {
    "environment": "node",
    "code": "const json = Buffer.from(JSON.stringify({ id: 1, active: true }));\nconst binary = Buffer.from([8, 1, 16, 1]);\n\nconsole.log({ jsonBytes: json.byteLength, binaryBytes: binary.byteLength });\n"
  },
  "binary-protocol": {
    "environment": "node",
    "code": "const buffer = Buffer.alloc(8);\nbuffer.writeUInt32BE(42, 0);\nbuffer.writeUInt32BE(7, 4);\n\nconsole.log({ streamId: buffer.readUInt32BE(0), length: buffer.readUInt32BE(4) });\n"
  },
  "zero-copy": {
    "environment": "node",
    "code": "import { createReadStream } from 'node:fs';\n\nexport const sendFileLike = (path, response) => {\n  createReadStream(path).pipe(response);\n};\n"
  },
  "epoll-kqueue": {
    "environment": "node",
    "code": "import { createServer } from 'node:net';\n\ncreateServer((socket) => {\n  socket.on('data', (chunk) => socket.write(chunk));\n}).listen(0);\n"
  },
  "syscall-batching": {
    "environment": "node",
    "code": "const batched = [];\n\nexport const logLater = (line, stream) => {\n  batched.push(line);\n  if (batched.length >= 100) stream.write(`${batched.splice(0).join('\n')}\n`);\n};\n"
  },
  "atomics": {
    "environment": "node",
    "code": "const shared = new SharedArrayBuffer(4);\nconst view = new Int32Array(shared);\n\nAtomics.store(view, 0, 1);\nAtomics.notify(view, 0, 1);\n"
  },
  "lock-free": {
    "environment": "node",
    "code": "const value = new Int32Array(new SharedArrayBuffer(4));\n\nconst increment = () => {\n  let current;\n  do {\n    current = Atomics.load(value, 0);\n  } while (Atomics.compareExchange(value, 0, current, current + 1) !== current);\n};\n"
  },
  "bloom": {
    "environment": "node",
    "code": "import { createHash } from 'node:crypto';\n\nconst bits = new Uint8Array(1024);\nconst hash = (value, seed) => createHash('sha256').update(`${seed}:${value}`).digest()[0] % bits.length;\n\nexport const add = (value) => { bits[hash(value, 1)] = 1; bits[hash(value, 2)] = 1; };\nexport const mightContain = (value) => bits[hash(value, 1)] === 1 && bits[hash(value, 2)] === 1;\n"
  },
  "hyperloglog": {
    "environment": "node",
    "code": "const leadingZeros = (n) => Math.clz32(n) + 1;\nconst buckets = new Uint8Array(16);\n\nexport const observe = (hash) => {\n  const bucket = hash & 15;\n  buckets[bucket] = Math.max(buckets[bucket], leadingZeros(hash >>> 4));\n};\n"
  },
  "consistent-hashing": {
    "environment": "node",
    "code": "import { createHash } from 'node:crypto';\n\nconst hashInt = (value) => createHash('sha256').update(value).digest().readUInt32BE(0);\nconst ring = ['api-a', 'api-b', 'api-c'].map((node) => ({ node, point: hashInt(node) })).sort((a, b) => a.point - b.point);\n\nexport const pickNode = (key) => ring.find((entry) => entry.point >= hashInt(key))?.node ?? ring[0].node;\n"
  },
  "virtual-memory": {
    "environment": "node",
    "code": "import { open } from 'node:fs/promises';\n\nconst file = await open('/tmp/example.bin', 'a+');\nconst buffer = Buffer.alloc(4096);\nawait file.read(buffer, 0, buffer.length, 0);\nawait file.close();\n"
  },
  "seccomp": {
    "environment": "node",
    "code": "const containerPolicy = {\n  readOnlyRootFilesystem: true,\n  allowPrivilegeEscalation: false,\n  capabilities: { drop: ['ALL'] },\n  seccompProfile: { type: 'RuntimeDefault' }\n};\n"
  },
  "sidecar": {
    "environment": "node",
    "code": "const callThroughSidecar = async (request, sidecar) => {\n  const start = performance.now();\n  const response = await sidecar.forward(request);\n  return { response, sidecarOverheadMs: performance.now() - start };\n};\n"
  },
  "service-discovery": {
    "environment": "node",
    "code": "import { Resolver } from 'node:dns/promises';\n\nconst resolver = new Resolver();\nexport const discover = async (service) => resolver.resolveSrv(`_${service}._tcp.example.com`);\n"
  },
  "rollout": {
    "environment": "node",
    "code": "const routeRelease = (random = Math.random()) => {\n  if (random < 0.1) return 'green';\n  return 'blue';\n};\n"
  },
  "feature-flags": {
    "environment": "node",
    "code": "import { createHash } from 'node:crypto';\n\nconst bucket = (userId) => createHash('sha256').update(userId).digest()[0] / 255;\nexport const enabled = (userId, rollout) => bucket(userId) < rollout;\n"
  },
  "pipeline-backpressure": {
    "environment": "node",
    "code": "import { Transform } from 'node:stream';\n\nexport const slowTransform = new Transform({\n  objectMode: true,\n  async transform(chunk, encoding, callback) {\n    await processChunk(chunk);\n    callback(null, chunk);\n  }\n});\n"
  },
  "exactly-once": {
    "environment": "node",
    "code": "const processExactlyOnceEnough = async (db, event) => db.transaction(async (tx) => {\n  if (await tx.processed.exists(event.id)) return;\n  await tx.apply(event);\n  await tx.processed.insert({ id: event.id });\n});\n"
  },
  "idempotent-consumer": {
    "environment": "node",
    "code": "const seen = new Set();\n\nexport const consume = async (message, handler) => {\n  if (seen.has(message.id)) return 'duplicate';\n  await handler(message);\n  seen.add(message.id);\n  return 'processed';\n};\n"
  }
};
