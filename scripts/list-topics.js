import frontend from '../src/concepts/frontend.js';
import backend from '../src/concepts/backend.js';
import systemDesign from '../src/concepts/system-design.js';
import aiEngineering from '../src/concepts/ai-engineering.js';
import dataStorage from '../src/concepts/data-storage.js';
import platformEngineering from '../src/concepts/platform-engineering.js';
import networkEngineering from '../src/concepts/network-engineering.js';

const print = (name, records, defaultRoleTags) => {
  console.log(`\n${name} (${records.length})`);
  for (const record of records) {
    const roleTags = record.roleTags ?? defaultRoleTags;
    console.log(`- ${record.title} [${record.group}] (${roleTags.join(', ')})`);
  }
};

print('Frontend', frontend, ['sr', 'frontend']);
print('Backend', backend, ['sr', 'backend']);
print('System Design', systemDesign, ['sr', 'system']);
print('AI Engineering', aiEngineering, ['sr', 'ai']);
print('Data & Storage Engineering', dataStorage, ['sr', 'data']);
print('Platform Engineering', platformEngineering, ['sr', 'platform']);
print('Network Engineering', networkEngineering, ['sr', 'network']);

const total = frontend.length + backend.length + systemDesign.length + aiEngineering.length + dataStorage.length + platformEngineering.length + networkEngineering.length;
console.log(`\nTotal: ${total}`);
