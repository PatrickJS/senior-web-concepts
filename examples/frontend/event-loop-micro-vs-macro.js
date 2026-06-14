setTimeout(() => console.log('4. macrotask: setTimeout'), 0);
queueMicrotask(() => console.log('2. microtask: queueMicrotask'));
Promise.resolve().then(() => console.log('3. microtask: promise reaction'));
console.log('1. synchronous code');
