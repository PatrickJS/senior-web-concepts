import frontend from '../src/concepts/frontend.js';
import backend from '../src/concepts/backend.js';
import systemDesign from '../src/concepts/system-design.js';
import aiEngineering from '../src/concepts/ai-engineering.js';

const print = (name, records) => {
  console.log(`\n${name} (${records.length})`);
  for (const record of records) {
    console.log(`- ${record.title} [${record.group}]`);
  }
};

print('Frontend', frontend);
print('Backend', backend);
print('System Design', systemDesign);
print('AI Engineering', aiEngineering);
console.log(`\nTotal: ${frontend.length + backend.length + systemDesign.length + aiEngineering.length}`);
