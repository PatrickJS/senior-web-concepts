import frontend from '../src/concepts/frontend.js';
import backend from '../src/concepts/backend.js';

const print = (name, records) => {
  console.log(`\n${name} (${records.length})`);
  for (const record of records) {
    console.log(`- ${record.title} [${record.group}]`);
  }
};

print('Frontend', frontend);
print('Backend', backend);
console.log(`\nTotal: ${frontend.length + backend.length}`);
