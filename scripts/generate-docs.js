import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import frontend from '../src/concepts/frontend.js';
import backend from '../src/concepts/backend.js';
import snippets from '../src/examples/snippets.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const frontendGroups = new Map([
  ['Input and accessibility', 'Use this group to reason about operability, assistive technology behavior, focus/input semantics, and whether UI changes are perceivable to more than just a visual mouse user.'],
  ['Rendering correctness and state', 'Use this group to make UI behavior repeatable under retries, concurrency, async races, and partial failure.'],
  ['Performance and Web Vitals', 'Use this group to connect browser metrics to concrete causes: network, parsing, main-thread work, layout, paint, and input latency.'],
  ['Memory, streams, and advanced browser APIs', 'Use this group to reason about resource lifetime, browser memory retention, stream flow control, workers, transfer, and media/data channels.'],
  ['Offline, collaboration, and data modeling', 'Use this group to model state transitions, conflicts, merges, rollback, and event histories explicitly instead of treating the frontend as throwaway state.'],
  ['Frontend architecture and rendering models', 'Use this group to compare client rendering, server rendering, islands, hydration, server components, micro-frontends, and concurrent rendering trade-offs.'],
  ['Security, networking, and caching', 'Use this group to explain browser security boundaries, request policies, cache semantics, and delivery hints.'],
  ['Observers, layout, paint, and CSS pipeline', 'Use this group to reason about browser pipeline phases, observer callbacks, compositing, containment, and avoiding accidental layout cost.'],
  ['Bundling, modules, and delivery', 'Use this group to explain how JavaScript reaches the browser, how chunks are split, and what makes code removable or render-blocking.'],
  ['Event loop, data identity, and UI algorithms', 'Use this group to reason about scheduling, stale closures, identity, structural sharing, diffing, reconciliation, and cooperative rendering.']
]);

const backendGroups = new Map([
  ['Transport and protocol internals', 'Use this group to reason about how bytes move over the network, what happens under packet loss, and where protocol-level latency or head-of-line blocking comes from.'],
  ['Deployment and reliability patterns', 'Use this group to keep systems available while code, traffic, dependencies, and failure modes change.'],
  ['Databases, storage, and transactions', 'Use this group to connect correctness guarantees to indexes, query plans, isolation, locks, replication, and storage-engine behavior.'],
  ['Distributed systems and consistency', 'Use this group to reason about partitions, locks, consensus, conflict resolution, idempotency, and exactly-once claims.'],
  ['Messaging, streams, and event-driven systems', 'Use this group to design event pipelines that survive retries, reordering, backpressure, projection lag, and consumer failures.'],
  ['API design, auth, and edge controls', 'Use this group to make APIs safe, compatible, observable, throttled, cacheable, and resilient under N+1, auth, schema, or gateway pressure.'],
  ['Observability and operations', 'Use this group to make production behavior debuggable with traces, logs, metrics, cardinality control, sampling, and chaos experiments.'],
  ['Runtime, OS, and performance engineering', 'Use this group to reason about memory, CPU, syscalls, worker pools, event loops, atomics, lock-free algorithms, and zero-copy paths.'],
  ['Cloud, containers, and service topology', 'Use this group to model platform primitives like service meshes, discovery, sidecars, serverless, Kubernetes disruption controls, and container hardening.'],
  ['Caching, hashing, and approximate data structures', 'Use this group to design fast paths that remain correct enough under invalidation, shard movement, cardinality estimation, and hot-key pressure.']
]);

const slugify = (value) => value
  .toLowerCase()
  .replace(/&/g, 'and')
  .replace(/\+/g, ' plus ')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

const byGroup = (records) => records.reduce((groups, record) => {
  const items = groups.get(record.group) ?? [];
  items.push(record);
  groups.set(record.group, items);
  return groups;
}, new Map());

const topicFileName = (record) => `${slugify(record.title)}.md`;

const topicMarkdown = ({ domain, groups, record }) => {
  const snippet = snippets[record.example];
  const note = groups.get(record.group);

  return `# ${record.title}\n\n` +
    `**Domain:** ${domain}\n` +
    `**Group:** ${record.group}\n` +
    `**Example environment:** ${snippet.environment}\n\n` +
    `## Summary\n\n${record.summary}\n\n` +
    `## Why it matters\n\n${note}\n\n` +
    `## JavaScript example\n\n` +
    '```js\n' + snippet.code + '```\n\n' +
    `## Explain it clearly\n\n` +
    `A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.\n`;
};

const indexMarkdown = ({ domain, records, groups }) => {
  const grouped = byGroup(records);
  const lines = [`# ${domain} concepts`, '', `${records.length} topics mapped into summaries and JavaScript/Node.js examples.`, ''];

  for (const [group, note] of groups) {
    const items = grouped.get(group) ?? [];
    if (items.length === 0) continue;
    lines.push(`## ${group}`, '', note, '');
    for (const item of items) {
      lines.push(`- [${item.title}](topics/${topicFileName(item)})`);
    }
    lines.push('');
  }

  return `${lines.join('\n').replace(/\n+$/u, '')}\n`;
};

const writeDomain = async ({ domain, folder, records, groups }) => {
  const base = join(root, 'docs', folder);
  const topics = join(base, 'topics');
  await rm(base, { recursive: true, force: true });
  await mkdir(topics, { recursive: true });
  await writeFile(join(base, 'README.md'), indexMarkdown({ domain, records, groups }));

  for (const record of records) {
    await writeFile(join(topics, topicFileName(record)), topicMarkdown({ domain, groups, record }));
  }
};

await writeDomain({ domain: 'Frontend', folder: 'frontend', records: frontend, groups: frontendGroups });
await writeDomain({ domain: 'Backend', folder: 'backend', records: backend, groups: backendGroups });

console.log(`Generated ${frontend.length + backend.length} topic pages.`);
