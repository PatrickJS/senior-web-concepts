import frontend from '../src/concepts/frontend.js';
import backend from '../src/concepts/backend.js';
import softwareEngineering from '../src/concepts/software-engineering.js';
import designSystem from '../src/concepts/design-system.js';
import systemDesign from '../src/concepts/system-design.js';
import aiEngineering from '../src/concepts/ai-engineering.js';
import dataStorage from '../src/concepts/data-storage.js';
import platformEngineering from '../src/concepts/platform-engineering.js';
import networkEngineering from '../src/concepts/network-engineering.js';

const roleTagOrder = ['jr', 'mid', 'sr', 'staff', 'software', 'frontend', 'design', 'design-system', 'backend', 'system', 'data', 'platform', 'network', 'ai', 'security', 'dx', 'product'];

const roleTagSort = (left, right) => {
  const leftIndex = roleTagOrder.indexOf(left);
  const rightIndex = roleTagOrder.indexOf(right);
  if (leftIndex !== -1 || rightIndex !== -1) {
    return (leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex) - (rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex);
  }
  return left.localeCompare(right);
};

const domains = [
  ['Frontend', frontend, ['sr', 'frontend']],
  ['Software Engineering', softwareEngineering, ['sr', 'software']],
  ['Design Systems', designSystem, ['sr', 'design-system', 'design']],
  ['Backend', backend, ['sr', 'backend']],
  ['System Design', systemDesign, ['sr', 'system']],
  ['AI Engineering', aiEngineering, ['sr', 'ai']],
  ['Data & Storage Engineering', dataStorage, ['sr', 'data']],
  ['Platform Engineering', platformEngineering, ['sr', 'platform']],
  ['Network Engineering', networkEngineering, ['sr', 'network']]
];

const roleCounts = new Map();

const print = (name, records, defaultRoleTags) => {
  console.log(`\n${name} (${records.length})`);
  for (const record of records) {
    const roleTags = [...new Set(record.roleTags ?? defaultRoleTags)];
    for (const tag of roleTags) roleCounts.set(tag, (roleCounts.get(tag) ?? 0) + 1);
    console.log(`- ${record.title} [${record.group}] (${roleTags.join(', ')})`);
  }
};

for (const [name, records, defaultRoleTags] of domains) {
  print(name, records, defaultRoleTags);
}

const total = domains.reduce((sum, [, records]) => sum + records.length, 0);
console.log(`\nTotal: ${total}`);

console.log('\nRole requirements');
for (const [tag, count] of [...roleCounts].sort(([left], [right]) => roleTagSort(left, right))) {
  console.log(`- ${tag}: ${count}`);
}
