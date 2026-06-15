import { mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import frontend from '../src/concepts/frontend.js';
import backend from '../src/concepts/backend.js';
import systemDesign from '../src/concepts/system-design.js';
import aiEngineering from '../src/concepts/ai-engineering.js';
import dataStorage from '../src/concepts/data-storage.js';
import platformEngineering from '../src/concepts/platform-engineering.js';
import networkEngineering from '../src/concepts/network-engineering.js';
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

const systemDesignGroups = new Map([
  ['Design process and trade-offs', 'Use this group to turn product goals into explicit requirements, constraints, trade-offs, and decisions that can be revisited later.'],
  ['Scale, capacity, and latency', 'Use this group to size traffic, storage, throughput, latency budgets, queues, caches, and concurrency before selecting technology.'],
  ['Boundaries and topology', 'Use this group to place client, edge, API, service, data, control-plane, and data-plane responsibilities deliberately.'],
  ['Data, consistency, and workflows', 'Use this group to connect access patterns, consistency needs, partitions, freshness, events, and workflow recovery into one design.'],
  ['Reliability and operations', 'Use this group to reason about failure modes, overload behavior, fallback, disaster recovery, observability, alerts, and releases.'],
  ['Security, abuse, and governance', 'Use this group to protect system boundaries, secrets, tenants, quotas, abuse paths, and operational policy surfaces.'],
  ['Cost, evolution, and decision records', 'Use this group to keep architecture economically grounded and evolvable through buy/build calls, migrations, and recorded decisions.']
]);

const aiEngineeringGroups = new Map([
  ['LLM fundamentals and model behavior', 'Use this group to understand how model limits, sampling, latency, throughput, and capability fit affect production AI features.'],
  ['Prompting and context engineering', 'Use this group to assemble instructions, variables, examples, source context, and conversation state without losing control of the task.'],
  ['Structured outputs and tool use', 'Use this group to make model interactions machine-checkable with schemas, tool contracts, validation, dispatch, and permission boundaries.'],
  ['Retrieval and knowledge grounding', 'Use this group to connect embeddings, chunking, metadata, retrieval, reranking, and source-of-truth rules into grounded answers.'],
  ['Evaluation and observability', 'Use this group to measure AI behavior with datasets, traces, prompt regression tests, judge calibration, and production quality signals.'],
  ['Safety, security, and data handling', 'Use this group to reduce prompt injection, unsafe output, privacy leakage, and unclear escalation behavior in AI-backed systems.'],
  ['Agentic workflows', 'Use this group to design loops that plan, act, observe, persist state, ask for human review, and recover from partial progress.'],
  ['Model operations, cost, and rollout', 'Use this group to route models, control cost, cache safely, stream responses, and roll out AI features with measurable risk.']
]);

const dataStorageGroups = new Map([
  ['Relational modeling and SQL', 'Use this group to design schemas, constraints, query shapes, and relational access patterns that stay understandable as data grows.'],
  ['Indexing and query performance', 'Use this group to connect query plans, index design, statistics, memory, and workload shape to practical performance outcomes.'],
  ['Transactions, migrations, and integrity', 'Use this group to protect correctness while schema, code, data volume, and concurrent writes change.'],
  ['Storage topology and replication', 'Use this group to reason about partitioning, replicas, backups, search indexes, time-series storage, and tenant boundaries.'],
  ['Analytics, pipelines, and governance', 'Use this group to move data into analytical systems with clear semantics, quality checks, lineage, and retention rules.']
]);

const platformEngineeringGroups = new Map([
  ['Source control, CI, and release automation', 'Use this group to turn changes into repeatable, reviewable, reversible delivery paths.'],
  ['Infrastructure, environments, and cloud networking', 'Use this group to model infrastructure state, environment promotion, DNS, certificates, load balancing, and network reachability.'],
  ['Containers, orchestration, and runtime platforms', 'Use this group to operate workloads with container hygiene, scheduling, autoscaling, service topology, and runtime constraints.'],
  ['Security, identity, and supply chain', 'Use this group to control secrets, permissions, artifact trust, policy, and blast radius across the platform.'],
  ['Observability, incidents, and operations', 'Use this group to make production ownership measurable, alertable, recoverable, and improvable after incidents.'],
  ['Developer experience and platform product', 'Use this group to build internal platforms, templates, local environments, and APIs that make good engineering paths easy to follow.']
]);

const networkEngineeringGroups = new Map([
  ['IP addressing and routing fundamentals', 'Use this group to reason about address space, route selection, NAT, and global traffic paths before blaming application code.'],
  ['DNS, TLS, and edge delivery', 'Use this group to connect names, certificates, proxies, CDNs, caches, and edge routing to real production reachability.'],
  ['Transport protocols and performance', 'Use this group to explain latency, connection setup, packet loss, congestion, MTU behavior, and load-balancing effects.'],
  ['Security and access control', 'Use this group to make network access explicit through firewalls, private links, zero-trust policy, and traffic protection.'],
  ['Service networking and cloud topology', 'Use this group to design how services, VPCs, gateways, regions, discovery, and address families connect.'],
  ['Observability and troubleshooting', 'Use this group to diagnose network behavior with captures, traces, probes, SLOs, and incident triage routines.']
]);

const domains = [
  {
    domain: 'Frontend',
    folder: 'frontend',
    records: frontend,
    groups: frontendGroups,
    defaultRoleTags: ['sr', 'frontend']
  },
  {
    domain: 'Backend',
    folder: 'backend',
    records: backend,
    groups: backendGroups,
    defaultRoleTags: ['sr', 'backend']
  },
  {
    domain: 'System Design',
    folder: 'system-design',
    records: systemDesign,
    groups: systemDesignGroups,
    defaultRoleTags: ['sr', 'system']
  },
  {
    domain: 'AI Engineering',
    folder: 'ai-engineering',
    records: aiEngineering,
    groups: aiEngineeringGroups,
    defaultRoleTags: ['sr', 'ai']
  },
  {
    domain: 'Data & Storage Engineering',
    folder: 'data-storage',
    records: dataStorage,
    groups: dataStorageGroups,
    defaultRoleTags: ['sr', 'data']
  },
  {
    domain: 'Platform Engineering',
    folder: 'platform-engineering',
    records: platformEngineering,
    groups: platformEngineeringGroups,
    defaultRoleTags: ['sr', 'platform']
  },
  {
    domain: 'Network Engineering',
    folder: 'network-engineering',
    records: networkEngineering,
    groups: networkEngineeringGroups,
    defaultRoleTags: ['sr', 'network']
  }
];

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

const roleTagsFor = (domain, record) => {
  const tags = record.roleTags ?? domain.defaultRoleTags;
  if (!Array.isArray(tags) || tags.length === 0) {
    throw new Error(`Missing role tags for ${domain.domain}: ${record.title}`);
  }
  return [...new Set(tags)];
};

const renderDiagram = (diagram) => {
  if (!diagram) return '';
  return `## Architecture sketch\n\n\`\`\`mermaid\n${diagram.trim()}\n\`\`\`\n\n`;
};

const renderRelated = (related) => {
  if (!related?.length) return '';
  const lines = ['## Related concepts', '', ...related.map((item) => `- ${item}`), ''];
  return `${lines.join('\n')}\n`;
};

const topicMarkdown = ({ domain, groups, record, roleTags }) => {
  const snippet = snippets[record.example];
  if (!snippet) throw new Error(`Missing snippet for ${domain}: ${record.title} (${record.example})`);

  const note = groups.get(record.group);
  if (!note) throw new Error(`Missing group note for ${domain}: ${record.group}`);

  return `# ${record.title}\n\n` +
    `**Domain:** ${domain}\n` +
    `**Group:** ${record.group}\n` +
    `**Role tags:** ${roleTags.join(', ')}\n` +
    `**Example environment:** ${snippet.environment}\n\n` +
    `## Summary\n\n${record.summary}\n\n` +
    `## Why it matters\n\n${note}\n\n` +
    renderDiagram(record.diagram) +
    renderRelated(record.related) +
    `## JavaScript example\n\n` +
    '```js\n' + snippet.code + '```\n\n' +
    `## Explain it clearly\n\n` +
    `A solid explanation should define the mechanism, name the failure mode it prevents or creates, and describe the trade-off you would make in a real JavaScript/Node.js application.\n`;
};

const indexMarkdown = ({ domain, records, groups, defaultRoleTags }) => {
  const domainConfig = { domain, defaultRoleTags };
  const grouped = byGroup(records);
  const lines = [`# ${domain} concepts`, '', `${records.length} topics mapped into summaries and JavaScript/Node.js examples.`, ''];

  for (const [group, note] of groups) {
    const items = grouped.get(group) ?? [];
    if (items.length === 0) continue;
    lines.push(`## ${group}`, '', note, '');
    for (const item of items) {
      lines.push(`- [${item.title}](topics/${topicFileName(item)}) — ${roleTagsFor(domainConfig, item).join(', ')}`);
    }
    lines.push('');
  }

  return `${lines.join('\n').replace(/\n+$/u, '')}\n`;
};

const writeDomain = async ({ domain, folder, records, groups }) => {
  const domainConfig = domains.find((item) => item.domain === domain);
  const base = join(root, 'docs', folder);
  const topics = join(base, 'topics');
  await rm(base, { recursive: true, force: true });
  await mkdir(topics, { recursive: true });
  await writeFile(join(base, 'README.md'), indexMarkdown({ domain, records, groups, defaultRoleTags: domainConfig.defaultRoleTags }));

  for (const record of records) {
    await writeFile(join(topics, topicFileName(record)), topicMarkdown({ domain, groups, record, roleTags: roleTagsFor(domainConfig, record) }));
  }
};

for (const domain of domains) {
  await writeDomain(domain);
}

console.log(`Generated ${domains.reduce((total, domain) => total + domain.records.length, 0)} topic pages.`);
