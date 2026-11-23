// hello, quiet machine: write the six words, then stop.
// hello again: a guitar, a crib, a whole life implied.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// The deliverable is fixed text: six words and no trailing newline.
const ENTRY = 'Sold his guitar. Bought a crib.';

// Resolve this file's own directory, independent of the caller's cwd.
const here = fileURLToPath(new URL('.', import.meta.url));

// The grader supplies the output directory; fall back to /output.
const outputDir = process.env['MAKEFUN_OUTPUT_DIR'] ?? '/output';

async function main(): Promise<void> {
  // batch: make the destination tree before writing anything.
  await mkdir(outputDir, { recursive: true });

  // orders: one UTF-8 encode, one byte count, one log line.
  const bytes = Buffer.byteLength(ENTRY, 'utf8');
  await writeFile(join(outputDir, 'entry.txt'), ENTRY, 'utf8');

  console.log(`entry.txt: ${bytes} bytes`);
  // bar: the story stops here; the silence carries the rest.
  void here;
}

await main();
