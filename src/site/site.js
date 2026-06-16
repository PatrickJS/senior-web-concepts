const graphEl = document.querySelector('#graph');
const statsEl = document.querySelector('#stats');
const trackListEl = document.querySelector('#track-list');
const roleListEl = document.querySelector('#role-list');
const topicListEl = document.querySelector('#topic-list');
const topicCountEl = document.querySelector('#topic-count');
const searchEl = document.querySelector('#search');
const trackFilterEl = document.querySelector('#track-filter');
const levelFilterEl = document.querySelector('#level-filter');
const roleFilterEl = document.querySelector('#role-filter');
const resetEl = document.querySelector('#reset-view');
const focusedLinkEl = document.querySelector('#focused-link');
const graphNoteEl = document.querySelector('#graph-note');

const data = await fetch('./assets/knowledge-graph.json').then((response) => {
  if (!response.ok) throw new Error(`Unable to load graph data: ${response.status}`);
  return response.json();
});

const nodesById = new Map(data.graph.nodes.map((node) => [node.id, node]));
const domainById = new Map(data.domains.map((domain) => [domain.id, domain]));
const roleById = new Map(data.roles.map((role) => [role.id, role]));
const roleByTag = new Map(data.roles.map((role) => [role.tag, role]));
const topicById = new Map(data.topics.map((topic) => [topic.id, topic]));

const state = {
  query: '',
  trackId: 'all',
  levelTag: 'all',
  roleId: 'all',
  selectedId: 'root'
};

const colors = {
  root: '#17202a',
  domain: '#2563eb',
  group: '#16805c',
  topic: '#b45309',
  role: '#b42318'
};

const levelTags = ['jr', 'mid', 'sr', 'staff'];
const byLabel = (left, right) => left.label.localeCompare(right.label);
const truncate = (value, max = 34) => value.length > max ? `${value.slice(0, max - 1)}...` : value;

const topicMatches = (topic) => {
  if (state.trackId !== 'all') {
    const selectedDomain = domainById.get(state.trackId);
    if (selectedDomain && topic.folder !== selectedDomain.folder) return false;
  }

  if (state.roleId !== 'all') {
    const selectedRole = roleById.get(state.roleId);
    if (selectedRole && !topic.roleTags.includes(selectedRole.tag)) return false;
  }

  if (state.levelTag !== 'all' && !topic.roleTags.includes(state.levelTag)) return false;

  if (!state.query) return true;
  const haystack = [
    topic.title,
    topic.domain,
    topic.group,
    topic.summary,
    topic.environment,
    ...topic.roleTags
  ].join(' ').toLowerCase();
  return haystack.includes(state.query);
};

const filteredTopics = () => data.topics.filter(topicMatches);

const setSelected = (id) => {
  state.selectedId = id;
  const node = nodesById.get(id);
  if (node?.kind === 'domain') {
    state.trackId = id;
    state.roleId = 'all';
  }
  if (node?.kind === 'role') {
    if (levelTags.includes(node.tag)) {
      state.levelTag = node.tag;
    } else {
      state.roleId = id;
    }
  }
  if (node?.kind === 'topic') {
    const topic = topicById.get(id);
    const domain = data.domains.find((item) => item.folder === topic.folder);
    state.trackId = domain?.id ?? state.trackId;
  }
  render();
};

const renderStats = () => {
  const stats = [
    ['Topics', data.summary.topicCount],
    ['Tracks', data.summary.domainCount],
    ['Role paths', data.summary.roleCount],
    ['Graph nodes', data.summary.graphNodeCount],
    ['Graph links', data.summary.graphLinkCount]
  ];

  statsEl.innerHTML = stats.map(([label, value]) => (
    `<article class="stat-card"><strong>${value}</strong><span>${label}</span></article>`
  )).join('');
};

const renderFilters = () => {
  trackFilterEl.innerHTML = [
    '<option value="all">All tracks</option>',
    ...data.domains.map((domain) => `<option value="${domain.id}">${domain.label}</option>`)
  ].join('');
  trackFilterEl.value = state.trackId;

  levelFilterEl.innerHTML = [
    '<option value="all">All levels</option>',
    ...levelTags.map((tag) => `<option value="${tag}">${tag}</option>`)
  ].join('');
  levelFilterEl.value = state.levelTag;

  roleFilterEl.innerHTML = [
    '<option value="all">All roles</option>',
    ...data.roles.map((role) => `<option value="${role.id}">${role.label}</option>`)
  ].join('');
  roleFilterEl.value = state.roleId;
};

const renderTracks = () => {
  trackListEl.innerHTML = data.domains.map((domain) => {
    const levels = ['jr', 'mid', 'sr', 'staff']
      .map((tag) => {
        const count = domain.groups.flatMap((group) => group.topics).filter((topic) => topic.roleTags.includes(tag)).length;
        return count > 0 ? `${tag}: ${count}` : null;
      })
      .filter(Boolean)
      .join(' / ');

    return `<button class="track-card" type="button" data-node-id="${domain.id}" aria-pressed="${state.trackId === domain.id}">
      <strong>${domain.label}</strong>
      <span>${domain.count} topics${levels ? ` - ${levels}` : ''}</span>
    </button>`;
  }).join('');
};

const renderRoles = () => {
  const grouped = data.roles.reduce((groups, role) => {
    const items = groups.get(role.kind) ?? [];
    items.push(role);
    groups.set(role.kind, items);
    return groups;
  }, new Map());

  roleListEl.innerHTML = [...grouped].map(([kind, roles]) => (
    `<div class="role-group" aria-label="${kind}">
      ${roles.sort(byLabel).map((role) => `<button class="role-chip" type="button" data-node-id="${role.id}" aria-pressed="${state.roleId === role.id || state.levelTag === role.tag}">${role.label} (${role.count})</button>`).join('')}
    </div>`
  )).join('');
};

const renderTopics = () => {
  const topics = filteredTopics();
  topicCountEl.textContent = `${topics.length} matching topics`;
  topicListEl.innerHTML = topics.slice(0, 80).map((topic) => {
    const tags = topic.roleTags.map((tag) => {
      const role = data.roles.find((item) => item.tag === tag);
      return role ? `<a href="${role.href}">${tag}</a>` : `<span>${tag}</span>`;
    }).join('');

    return `<article class="topic-card">
      <h3><a href="${topic.href}">${topic.title}</a></h3>
      <div class="topic-meta">${topic.domain} / ${topic.group} / ${topic.environment}</div>
      <p class="topic-summary">${topic.summary}</p>
      <div class="tag-row">${tags}</div>
    </article>`;
  }).join('');

  if (topics.length > 80) {
    topicListEl.insertAdjacentHTML('beforeend', `<article class="topic-card"><strong>${topics.length - 80} more topics hidden.</strong><p class="topic-summary">Use search, track, or role filters to narrow the list.</p></article>`);
  }
};

const neighborIds = (id) => {
  const ids = new Set([id]);
  for (const link of data.graph.links) {
    if (link.source === id) ids.add(link.target);
    if (link.target === id) ids.add(link.source);
  }
  return ids;
};

const graphScope = () => {
  const selected = nodesById.get(state.selectedId) ?? nodesById.get('root');

  if (selected.kind === 'topic') {
    return neighborIds(selected.id);
  }

  if (selected.kind === 'group') {
    const ids = new Set([selected.id]);
    for (const link of data.graph.links) {
      if (link.source === selected.id) ids.add(link.target);
      if (link.target === selected.id) ids.add(link.source);
    }
    return ids;
  }

  if (selected.kind === 'domain') {
    const domain = domainById.get(selected.id);
    const ids = new Set([selected.id]);
    for (const group of domain.groups) {
      ids.add(group.id);
      for (const topic of group.topics.filter(topicMatches).slice(0, 90)) ids.add(topic.id);
    }
    return ids;
  }

  if (selected.kind === 'role') {
    const role = roleById.get(selected.id);
    const ids = new Set([selected.id]);
    for (const topicId of role.topics) {
      const topic = topicById.get(topicId);
      if (topic && topicMatches(topic)) {
        ids.add(topic.id);
        const domain = data.domains.find((item) => item.folder === topic.folder);
        if (domain) ids.add(domain.id);
      }
    }
    for (const link of data.graph.links) {
      if (link.kind !== 'overlap') continue;
      if (link.source === selected.id) ids.add(link.target);
      if (link.target === selected.id) ids.add(link.source);
    }
    return ids;
  }

  if (state.trackId !== 'all') return graphScopeForNode(state.trackId);
  if (state.roleId !== 'all') return graphScopeForNode(state.roleId);
  if (state.levelTag !== 'all') {
    const levelRole = roleByTag.get(state.levelTag);
    if (levelRole) return graphScopeForNode(levelRole.id);
  }

  return new Set(['root', ...data.domains.map((domain) => domain.id), ...data.roles.map((role) => role.id)]);
};

const graphScopeForNode = (id) => {
  const previous = state.selectedId;
  state.selectedId = id;
  const ids = graphScope();
  state.selectedId = previous;
  return ids;
};

const layoutNodes = (nodes) => {
  const width = 1000;
  const height = 620;
  const center = { x: width / 2, y: height / 2 };
  const selectedId = nodes.some((node) => node.id === state.selectedId) ? state.selectedId : 'root';
  const placed = new Map();
  const selected = nodes.find((node) => node.id === selectedId) ?? nodes[0];

  if (selected) placed.set(selected.id, { ...selected, ...center });

  const rest = nodes.filter((node) => !placed.has(node.id));
  const groups = {
    domain: rest.filter((node) => node.kind === 'domain'),
    role: rest.filter((node) => node.kind === 'role'),
    group: rest.filter((node) => node.kind === 'group'),
    topic: rest.filter((node) => node.kind === 'topic'),
    other: rest.filter((node) => !['domain', 'role', 'group', 'topic'].includes(node.kind))
  };

  const rings = [
    { items: [...groups.domain, ...groups.role, ...groups.group, ...groups.other], radius: 170 },
    { items: groups.topic, radius: 270 }
  ];

  for (const ring of rings) {
    const count = Math.max(ring.items.length, 1);
    ring.items.forEach((node, index) => {
      const angle = (-Math.PI / 2) + (index / count) * Math.PI * 2;
      placed.set(node.id, {
        ...node,
        x: center.x + Math.cos(angle) * ring.radius,
        y: center.y + Math.sin(angle) * ring.radius
      });
    });
  }

  return { width, height, nodes: [...placed.values()] };
};

const renderGraph = () => {
  const scope = graphScope();
  const visibleNodes = data.graph.nodes.filter((node) => scope.has(node.id));
  const visibleNodeIds = new Set(visibleNodes.map((node) => node.id));
  const visibleLinks = data.graph.links.filter((link) => visibleNodeIds.has(link.source) && visibleNodeIds.has(link.target));
  const layout = layoutNodes(visibleNodes);
  const positioned = new Map(layout.nodes.map((node) => [node.id, node]));

  graphEl.setAttribute('viewBox', `0 0 ${layout.width} ${layout.height}`);
  graphEl.innerHTML = [
    '<g class="links">',
    ...visibleLinks.map((link) => {
      const source = positioned.get(link.source);
      const target = positioned.get(link.target);
      if (!source || !target) return '';
      const width = link.kind === 'overlap' ? Math.min(6, 1 + (link.count ?? 1) / 18) : 1.1;
      const title = link.kind === 'overlap' ? `<title>${link.count} shared topics</title>` : '';
      return `<line class="graph-link ${link.kind}" x1="${source.x}" y1="${source.y}" x2="${target.x}" y2="${target.y}" style="stroke-width: ${width}">${title}</line>`;
    }),
    '</g>',
    '<g class="nodes">',
    ...layout.nodes.map((node) => {
      const radius = node.kind === 'root' ? 26 : node.kind === 'topic' ? 8 : 14;
      const labelY = node.y + radius + 15;
      return `<g class="graph-node node-${node.kind}" data-node-id="${node.id}" tabindex="0" role="button" aria-label="${node.label}">
        <circle cx="${node.x}" cy="${node.y}" r="${radius}" fill="${colors[node.kind] ?? '#5b6675'}"></circle>
        <text x="${node.x}" y="${labelY}" text-anchor="middle">${truncate(node.label)}</text>
      </g>`;
    }),
    '</g>'
  ].join('');

  const selected = nodesById.get(state.selectedId) ?? nodesById.get('root');
  focusedLinkEl.href = selected?.href ?? './index.html';
  focusedLinkEl.textContent = selected?.kind === 'topic' ? 'Open topic docs' : 'Open focused docs';
  graphNoteEl.textContent = `${visibleNodes.length} visible nodes and ${visibleLinks.length} visible links. Click a node to refocus.`;
};

const render = () => {
  renderFilters();
  renderTracks();
  renderRoles();
  renderTopics();
  renderGraph();
};

renderStats();
render();

searchEl.addEventListener('input', () => {
  state.query = searchEl.value.trim().toLowerCase();
  render();
});

trackFilterEl.addEventListener('change', () => {
  state.trackId = trackFilterEl.value;
  state.selectedId = state.trackId === 'all' ? 'root' : state.trackId;
  render();
});

levelFilterEl.addEventListener('change', () => {
  state.levelTag = levelFilterEl.value;
  const levelRole = roleByTag.get(state.levelTag);
  state.selectedId = levelRole?.id ?? 'root';
  render();
});

roleFilterEl.addEventListener('change', () => {
  state.roleId = roleFilterEl.value;
  state.selectedId = state.roleId === 'all' ? 'root' : state.roleId;
  render();
});

resetEl.addEventListener('click', () => {
  state.query = '';
  state.trackId = 'all';
  state.levelTag = 'all';
  state.roleId = 'all';
  state.selectedId = 'root';
  searchEl.value = '';
  render();
});

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-node-id]');
  if (!target) return;
  setSelected(target.dataset.nodeId);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const target = event.target.closest('[data-node-id]');
  if (!target) return;
  event.preventDefault();
  setSelected(target.dataset.nodeId);
});
