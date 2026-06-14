import { ReadableStream, WritableStream } from 'node:stream/web';
import { setTimeout as delay } from 'node:timers/promises';

const source = new ReadableStream({
  start(controller) {
    for (const value of [1, 2, 3, 4, 5]) controller.enqueue(value);
    controller.close();
  }
});

const sink = new WritableStream({
  async write(value) {
    await delay(25);
    console.log('processed', value);
  }
}, { highWaterMark: 1 });

await source.pipeTo(sink);
