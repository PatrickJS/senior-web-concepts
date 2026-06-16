import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import frontend from '../src/concepts/frontend.js';
import backend from '../src/concepts/backend.js';
import softwareEngineering from '../src/concepts/software-engineering.js';
import designSystem from '../src/concepts/design-system.js';
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

const softwareEngineeringGroups = new Map([
  ['Code structure and modularity', 'Use this group to reason about module shape, dependency direction, abstraction, information hiding, and how local code structure affects future change.'],
  ['Modeling, APIs, and contracts', 'Use this group to express business rules, invariants, outcomes, and compatibility expectations directly in code boundaries.'],
  ['Testing and quality signals', 'Use this group to choose tests that prove useful behavior instead of only executing implementation details.'],
  ['Refactoring and evolution', 'Use this group to change code safely over time while managing debt, legacy behavior, toggles, and maintainability signals.'],
  ['Collaboration and delivery discipline', 'Use this group to make software work reviewable, explainable, sliceable, and maintainable across a team.'],
  ['Debugging, configuration, and runtime behavior', 'Use this group to connect everyday code decisions to diagnosis, configuration safety, logs, profiling, and production behavior.']
]);

const designSystemGroups = new Map([
  ['Foundations and taxonomy', 'Use this group to clarify what the design system owns, how design and engineering collaborate, and how shared UI language stays coherent across products.'],
  ['Tokens and theming', 'Use this group to connect Figma variables, semantic tokens, code outputs, themes, and migration paths without letting visual decisions drift between tools.'],
  ['Figma and design-code handoff', 'Use this group to make design intent inspectable and traceable through variants, responsive constraints, specs, issues, and acceptance criteria.'],
  ['Component API and implementation', 'Use this group to translate design decisions into stable component APIs, composition models, state contracts, and styling rules.'],
  ['Documentation, testing, and release', 'Use this group to keep component behavior documented, tested, versioned, and safe for consuming teams to upgrade.'],
  ['Adoption and operations', 'Use this group to treat the design system as a product with roadmap, coverage, governance, package distribution, and debt management.']
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

const roleTagOrder = [
  'jr',
  'mid',
  'sr',
  'staff',
  'software',
  'frontend',
  'design',
  'design-system',
  'backend',
  'system',
  'data',
  'platform',
  'network',
  'ai',
  'security',
  'dx',
  'product'
];

const roleTagMetadata = new Map([
  ['jr', {
    label: 'Junior',
    kind: 'Career levels',
    description: 'Foundational concepts a junior engineer should be able to recognize, explain, and apply with guidance.'
  }],
  ['mid', {
    label: 'Mid-level',
    kind: 'Career levels',
    description: 'Concepts a mid-level engineer should be able to apply independently in routine product and platform work.'
  }],
  ['sr', {
    label: 'Senior',
    kind: 'Career levels',
    description: 'Concepts a senior engineer should be able to use for design trade-offs, production debugging, and technical leadership.'
  }],
  ['staff', {
    label: 'Staff',
    kind: 'Career levels',
    description: 'Concepts a staff-level engineer should be able to apply across teams, platform boundaries, and long-lived architecture decisions.'
  }],
  ['software', {
    label: 'Software engineering',
    kind: 'Role tracks',
    description: 'Requirements for general software craft: modularity, domain modeling, contracts, testing, refactoring, debugging, code review, documentation, and maintainability.'
  }],
  ['frontend', {
    label: 'Frontend',
    kind: 'Role tracks',
    description: 'Requirements for browser, UI architecture, frontend performance, accessibility, delivery, and client-side correctness work.'
  }],
  ['design', {
    label: 'Design',
    kind: 'Role tracks',
    description: 'Requirements for product and interface design collaboration, Figma semantics, accessibility intent, interaction patterns, responsive behavior, and handoff quality.'
  }],
  ['design-system', {
    label: 'Design system',
    kind: 'Role tracks',
    description: 'Requirements for tokens, component libraries, Figma-to-code workflows, GitHub governance, documentation, release policy, and adoption across products.'
  }],
  ['backend', {
    label: 'Backend',
    kind: 'Role tracks',
    description: 'Requirements for APIs, services, databases, distributed systems, runtime behavior, and production backend ownership.'
  }],
  ['system', {
    label: 'System design',
    kind: 'Role tracks',
    description: 'Requirements for architecture trade-offs, capacity, reliability, boundaries, cost, security, and operational design.'
  }],
  ['data', {
    label: 'Data & storage',
    kind: 'Role tracks',
    description: 'Requirements for relational data, storage topology, query performance, pipelines, analytics, and data governance.'
  }],
  ['platform', {
    label: 'Platform',
    kind: 'Role tracks',
    description: 'Requirements for delivery systems, infrastructure, runtime platforms, security controls, observability, and developer experience.'
  }],
  ['network', {
    label: 'Network',
    kind: 'Role tracks',
    description: 'Requirements for IP addressing, routing, DNS, TLS, edge delivery, transport behavior, access control, and network troubleshooting.'
  }],
  ['ai', {
    label: 'AI engineering',
    kind: 'Role tracks',
    description: 'Requirements for LLM behavior, prompting, retrieval, evaluation, safety, tool use, agents, cost, and rollout.'
  }],
  ['security', {
    label: 'Security',
    kind: 'Supporting tracks',
    description: 'Requirements that involve access control, policy, supply chain, privacy, abuse prevention, and secure production boundaries.'
  }],
  ['dx', {
    label: 'Developer experience',
    kind: 'Supporting tracks',
    description: 'Requirements for tools, templates, generated artifacts, platform ergonomics, and paved paths that improve engineering workflows.'
  }],
  ['product', {
    label: 'Product',
    kind: 'Supporting tracks',
    description: 'Requirements that connect engineering concepts to product decisions, user impact, reporting, or business semantics.'
  }]
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
    domain: 'Software Engineering',
    folder: 'software-engineering',
    records: softwareEngineering,
    groups: softwareEngineeringGroups,
    defaultRoleTags: ['sr', 'software']
  },
  {
    domain: 'Design Systems',
    folder: 'design-system',
    records: designSystem,
    groups: designSystemGroups,
    defaultRoleTags: ['sr', 'design-system', 'design']
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
const roleFileName = (tag) => `${slugify(tag)}.md`;
const siteNodeId = (...parts) => parts.map((part) => slugify(String(part))).join(':');

const roleTagsFor = (domain, record) => {
  const tags = record.roleTags ?? domain.defaultRoleTags;
  if (!Array.isArray(tags) || tags.length === 0) {
    throw new Error(`Missing role tags for ${domain.domain}: ${record.title}`);
  }
  return [...new Set(tags)];
};

const roleTagSort = (left, right) => {
  const leftIndex = roleTagOrder.indexOf(left);
  const rightIndex = roleTagOrder.indexOf(right);
  if (leftIndex !== -1 || rightIndex !== -1) {
    return (leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex) - (rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex);
  }
  return left.localeCompare(right);
};

const roleLabel = (tag) => roleTagMetadata.get(tag)?.label ?? tag;
const roleKind = (tag) => roleTagMetadata.get(tag)?.kind ?? 'Other tags';
const roleDescription = (tag) => roleTagMetadata.get(tag)?.description ?? `Requirements generated from the \`${tag}\` role tag.`;
const topicCountLabel = (count) => `${count} ${count === 1 ? 'topic' : 'topics'}`;

const collectTaggedTopics = () => domains.flatMap((domain) => domain.records.map((record) => {
  const roleTags = roleTagsFor(domain, record);
  return {
    domain: domain.domain,
    folder: domain.folder,
    groups: domain.groups,
    record,
    roleTags,
    topicHref: `../${domain.folder}/topics/${topicFileName(record)}`
  };
}));

const roleRequirements = () => {
  const requirements = new Map();
  for (const topic of collectTaggedTopics()) {
    for (const tag of topic.roleTags) {
      const topics = requirements.get(tag) ?? [];
      topics.push(topic);
      requirements.set(tag, topics);
    }
  }

  return [...requirements]
    .map(([tag, topics]) => ({ tag, topics }))
    .sort((left, right) => roleTagSort(left.tag, right.tag));
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
  const levelCounts = ['jr', 'mid', 'sr', 'staff']
    .map((tag) => ({
      tag,
      label: roleLabel(tag),
      count: records.filter((record) => roleTagsFor(domainConfig, record).includes(tag)).length
    }))
    .filter((item) => item.count > 0);

  if (levelCounts.length > 0) {
    lines.push('## Career-level progression', '');
    for (const level of levelCounts) {
      lines.push(`- [${level.label}](../roles/${roleFileName(level.tag)}) — ${topicCountLabel(level.count)}`);
    }
    lines.push('');
  }

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

const siteHtml = () => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Senior Web Concepts Explorer</title>
    <meta name="description" content="Interactive track and knowledge graph explorer for the Senior Web Concepts JavaScript/Node.js map.">
    <link rel="icon" href="data:,">
    <link rel="stylesheet" href="./assets/site.css">
  </head>
  <body>
    <header class="site-header">
      <div>
        <p class="eyebrow">Senior Web Concepts</p>
        <h1>Docs and Knowledge Graph</h1>
        <p class="lede">A generated docs map for tracks, role requirements, topic pages, and role overlap.</p>
      </div>
      <nav aria-label="Primary">
        <a href="#graph-title">Knowledge graph</a>
        <a href="./roles/README.md">Role paths</a>
        <a href="https://github.com/PatrickJS/senior-web-concepts">GitHub</a>
      </nav>
    </header>

    <main>
      <section class="graph-panel graph-hero" aria-labelledby="graph-title">
        <div class="panel-heading graph-heading">
          <div>
            <h2 id="graph-title">Knowledge Graph</h2>
            <p id="graph-note">Click nodes to move between tracks, roles, groups, topics, and role-overlap lines.</p>
          </div>
          <a id="focused-link" href="./index.html">Open focused docs</a>
        </div>

        <svg id="graph" role="img" aria-label="Clickable knowledge graph"></svg>

        <section class="toolbar graph-toolbar" aria-label="Explorer filters">
          <label class="search-label" for="search">Search concepts, tags, groups, and summaries</label>
          <input id="search" type="search" autocomplete="off" placeholder="Search for testing, tokens, queues, networking...">
          <div class="filter-row">
            <label>
              Track
              <select id="track-filter"></select>
            </label>
            <label>
              Level
              <select id="level-filter"></select>
            </label>
            <label>
              Role
              <select id="role-filter"></select>
            </label>
            <button id="reset-view" type="button">Reset</button>
          </div>
        </section>
      </section>

      <section class="stats-grid" id="stats" aria-label="Repository stats"></section>

      <section class="docs-grid">
        <aside class="panel">
          <div class="panel-heading">
            <h2>Tracks</h2>
            <p>Click a track to focus the graph and topic list.</p>
          </div>
          <div id="track-list" class="card-list"></div>
        </aside>

        <aside class="panel">
          <div class="panel-heading">
            <h2>Role Paths</h2>
            <p>Generated from role tags on the concept source files.</p>
          </div>
          <div id="role-list" class="chip-list"></div>
        </aside>

        <section class="panel">
          <div class="panel-heading">
            <h2>Topics</h2>
            <p id="topic-count"></p>
          </div>
          <div id="topic-list" class="topic-list"></div>
        </section>
      </section>
    </main>

    <script type="module" src="./assets/site.js"></script>
  </body>
</html>
`;

const siteData = () => {
  const topics = [];
  const nodes = [{ id: 'root', kind: 'root', label: 'Senior Web Concepts', href: './index.html', count: 0 }];
  const links = [];
  const topicByQualifiedTitle = new Map();
  const topicByTitle = new Map();

  const addNode = (node) => {
    if (!nodes.some((item) => item.id === node.id)) nodes.push(node);
  };

  const addLink = (source, target, kind, extra = {}) => {
    if (source === target) return;
    if (!links.some((item) => item.source === source && item.target === target && item.kind === kind)) {
      links.push({ source, target, kind, ...extra });
    }
  };

  for (const domain of domains) {
    const domainId = siteNodeId('domain', domain.folder);
    addNode({
      id: domainId,
      kind: 'domain',
      label: domain.domain,
      folder: domain.folder,
      href: `./${domain.folder}/README.md`,
      count: domain.records.length
    });
    addLink('root', domainId, 'contains');

    for (const [groupName, note] of domain.groups) {
      const groupId = siteNodeId('group', domain.folder, groupName);
      addNode({
        id: groupId,
        kind: 'group',
        label: groupName,
        domain: domain.domain,
        folder: domain.folder,
        href: `./${domain.folder}/README.md#${slugify(groupName)}`,
        note
      });
      addLink(domainId, groupId, 'contains');
    }

    for (const record of domain.records) {
      const roleTags = roleTagsFor(domain, record);
      const snippet = snippets[record.example];
      const groupId = siteNodeId('group', domain.folder, record.group);
      const topicId = siteNodeId('topic', domain.folder, record.title);
      const href = `./${domain.folder}/topics/${topicFileName(record)}`;
      const topic = {
        id: topicId,
        title: record.title,
        domain: domain.domain,
        folder: domain.folder,
        group: record.group,
        summary: record.summary,
        roleTags,
        example: record.example,
        environment: snippet?.environment ?? 'unknown',
        href,
        related: record.related ?? []
      };
      topics.push(topic);
      topicByQualifiedTitle.set(`${domain.domain}: ${record.title}`.toLowerCase(), topic);
      topicByTitle.set(record.title.toLowerCase(), topic);
      addNode({
        id: topicId,
        kind: 'topic',
        label: record.title,
        domain: domain.domain,
        folder: domain.folder,
        group: record.group,
        summary: record.summary,
        href,
        roleTags
      });
      addLink(groupId, topicId, 'contains');
    }
  }

  const requirements = roleRequirements();
  const roleTopicSets = new Map();
  for (const requirement of requirements) {
    const roleId = siteNodeId('role', requirement.tag);
    roleTopicSets.set(roleId, new Set(requirement.topics.map((topic) => siteNodeId('topic', topic.folder, topic.record.title))));
    addNode({
      id: roleId,
      kind: 'role',
      label: roleLabel(requirement.tag),
      tag: requirement.tag,
      href: `./roles/${roleFileName(requirement.tag)}`,
      count: requirement.topics.length,
      roleKind: roleKind(requirement.tag),
      description: roleDescription(requirement.tag)
    });
    addLink('root', roleId, 'requires');

    for (const topic of requirement.topics) {
      const topicId = siteNodeId('topic', topic.folder, topic.record.title);
      addLink(roleId, topicId, 'requires');
    }
  }

  for (let leftIndex = 0; leftIndex < requirements.length; leftIndex += 1) {
    for (let rightIndex = leftIndex + 1; rightIndex < requirements.length; rightIndex += 1) {
      const leftRole = requirements[leftIndex];
      const rightRole = requirements[rightIndex];
      const leftId = siteNodeId('role', leftRole.tag);
      const rightId = siteNodeId('role', rightRole.tag);
      const leftTopics = roleTopicSets.get(leftId);
      const rightTopics = roleTopicSets.get(rightId);
      const shared = [...leftTopics].filter((topicId) => rightTopics.has(topicId));
      if (shared.length >= 3) {
        addLink(leftId, rightId, 'overlap', { count: shared.length });
      }
    }
  }

  for (const topic of topics) {
    for (const related of topic.related) {
      const target = topicByQualifiedTitle.get(related.toLowerCase()) ?? topicByTitle.get(related.replace(/^[^:]+:\s*/u, '').toLowerCase());
      if (target) addLink(topic.id, target.id, 'related');
    }
  }

  const domainData = domains.map((domain) => ({
    id: siteNodeId('domain', domain.folder),
    label: domain.domain,
    folder: domain.folder,
    href: `./${domain.folder}/README.md`,
    count: domain.records.length,
    groups: [...domain.groups].map(([name, note]) => ({
      id: siteNodeId('group', domain.folder, name),
      name,
      note,
      topics: topics.filter((topic) => topic.folder === domain.folder && topic.group === name)
    }))
  }));

  return {
    summary: {
      topicCount: topics.length,
      domainCount: domains.length,
      roleCount: requirements.length,
      graphNodeCount: nodes.length,
      graphLinkCount: links.length
    },
    domains: domainData,
    roles: requirements.map((requirement) => ({
      id: siteNodeId('role', requirement.tag),
      tag: requirement.tag,
      label: roleLabel(requirement.tag),
      kind: roleKind(requirement.tag),
      description: roleDescription(requirement.tag),
      href: `./roles/${roleFileName(requirement.tag)}`,
      count: requirement.topics.length,
      topics: requirement.topics.map((topic) => siteNodeId('topic', topic.folder, topic.record.title))
    })),
    topics,
    graph: { nodes, links }
  };
};

const roleIndexMarkdown = (requirements) => {
  const grouped = requirements.reduce((groups, requirement) => {
    const kind = roleKind(requirement.tag);
    const items = groups.get(kind) ?? [];
    items.push(requirement);
    groups.set(kind, items);
    return groups;
  }, new Map());

  const lines = [
    '# Role requirements',
    '',
    'Generated from `roleTags` in `src/concepts/*.js`. Use these pages as role-oriented learning paths compiled from the same concept source that generates the topic docs.',
    ''
  ];

  for (const kind of ['Career levels', 'Role tracks', 'Supporting tracks', 'Other tags']) {
    const items = grouped.get(kind) ?? [];
    if (items.length === 0) continue;
    lines.push(`## ${kind}`, '');
    for (const item of items) {
      lines.push(`- [${roleLabel(item.tag)}](./${roleFileName(item.tag)}) — ${topicCountLabel(item.topics.length)}`);
    }
    lines.push('');
  }

  return `${lines.join('\n').replace(/\n+$/u, '')}\n`;
};

const roleMarkdown = ({ tag, topics }) => {
  const lines = [
    `# ${roleLabel(tag)} requirements`,
    '',
    `**Role tag:** ${tag}`,
    `**Topics:** ${topics.length}`,
    '',
    roleDescription(tag),
    '',
    'A learner should be able to explain the mechanism, identify the production failure modes, and describe practical JavaScript/Node.js trade-offs for each required concept.',
    '',
    '## Coverage by domain',
    ''
  ];

  for (const domain of domains) {
    const count = topics.filter((topic) => topic.domain === domain.domain).length;
    if (count > 0) lines.push(`- ${domain.domain}: ${count}`);
  }

  lines.push('', '## Required concepts', '');

  for (const domain of domains) {
    const domainTopics = topics.filter((topic) => topic.domain === domain.domain);
    if (domainTopics.length === 0) continue;

    lines.push(`### ${domain.domain}`, '');
    for (const [group] of domain.groups) {
      const groupTopics = domainTopics.filter((topic) => topic.record.group === group);
      if (groupTopics.length === 0) continue;

      lines.push(`#### ${group}`, '');
      for (const topic of groupTopics) {
        lines.push(`- [${topic.record.title}](${topic.topicHref}) — ${topic.record.summary}`);
      }
      lines.push('');
    }
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

const writeRoleRequirements = async () => {
  const requirements = roleRequirements();
  const base = join(root, 'docs', 'roles');
  await rm(base, { recursive: true, force: true });
  await mkdir(base, { recursive: true });
  await writeFile(join(base, 'README.md'), roleIndexMarkdown(requirements));

  for (const requirement of requirements) {
    await writeFile(join(base, roleFileName(requirement.tag)), roleMarkdown(requirement));
  }

  return requirements.length;
};

const writeSite = async () => {
  const assets = join(root, 'docs', 'assets');
  await mkdir(assets, { recursive: true });
  await writeFile(join(root, 'docs', 'index.html'), siteHtml());
  await writeFile(join(assets, 'knowledge-graph.json'), `${JSON.stringify(siteData(), null, 2)}\n`);
  await copyFile(join(root, 'src', 'site', 'site.css'), join(assets, 'site.css'));
  await copyFile(join(root, 'src', 'site', 'site.js'), join(assets, 'site.js'));
};

for (const domain of domains) {
  await writeDomain(domain);
}

const roleRequirementCount = await writeRoleRequirements();
await writeSite();
const topicCount = domains.reduce((total, domain) => total + domain.records.length, 0);

console.log(`Generated ${topicCount} topic pages, ${roleRequirementCount} role requirement pages, and the Pages explorer.`);
