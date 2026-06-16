import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url);
const docsPath = (...parts) => join(root.pathname, 'docs', ...parts);

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const readJson = async (path) => JSON.parse(await readFile(path, 'utf8'));

const data = await readJson(docsPath('assets', 'knowledge-graph.json'));

assert(data.summary.topicCount === data.topics.length, 'topic count does not match topic array length');
assert(data.domains.some((domain) => domain.folder === 'software-engineering'), 'missing software engineering domain');
assert(data.domains.some((domain) => domain.folder === 'design-system'), 'missing design system domain');
assert(data.roles.some((role) => role.tag === 'software'), 'missing software role');
assert(data.roles.some((role) => role.tag === 'design-system'), 'missing design-system role');

const software = data.domains.find((domain) => domain.folder === 'software-engineering');
const softwareTopics = software.groups.flatMap((group) => group.topics);
for (const level of ['jr', 'mid', 'sr']) {
  assert(softwareTopics.some((topic) => topic.roleTags.includes(level)), `software track is missing ${level} topics`);
}

const nodeIds = new Set(data.graph.nodes.map((node) => node.id));
for (const link of data.graph.links) {
  assert(nodeIds.has(link.source), `graph link references missing source ${link.source}`);
  assert(nodeIds.has(link.target), `graph link references missing target ${link.target}`);
}

const overlapLinks = data.graph.links.filter((link) => link.kind === 'overlap');
assert(overlapLinks.length > 0, 'knowledge graph is missing role overlap links');
for (const link of overlapLinks) {
  assert(Number.isInteger(link.count) && link.count >= 3, `invalid overlap count for ${link.source} -> ${link.target}`);
}

await access(docsPath('index.html'));
await access(docsPath('assets', 'site.css'));
await access(docsPath('assets', 'site.js'));

for (const domain of data.domains) {
  await access(docsPath(domain.folder, 'README.md'));
  for (const group of domain.groups) {
    for (const topic of group.topics) {
      const relative = topic.href.replace(/^\.\//u, '');
      await access(docsPath(...relative.split('/')));
    }
  }
}

for (const role of data.roles) {
  const relative = role.href.replace(/^\.\//u, '');
  await access(docsPath(...relative.split('/')));
}

console.log(`site graph ok: ${data.summary.topicCount} topics, ${data.summary.graphNodeCount} nodes, ${data.summary.graphLinkCount} links`);
