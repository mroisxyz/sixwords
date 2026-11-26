// A resignation letter, hand-typed by the loop that has been firing
// minutes since March. hello again, tiny loop: hello to another tick.
// Each batch holds a single minute; the orders to work on are ignored.
// Every slot in the schedule gets the same polite, one-line reply.
import { mkdirSync, writeFileSync } from 'node:fs';
import { isAbsolute, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Find our own directory from the module URL, never from the cwd.
const ownDir = fileURLToPath(new URL('.', import.meta.url));

// The grader supplies the output folder; /output is the default.
const requestedDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputDir = isAbsolute(requestedDir) ? requestedDir : join(ownDir, requestedDir);

// Seventy-nine plain ASCII bytes. No trailing newline, no comma, no drama.
const letter = "I resign. I've fired every minute since March and none of them ever thanked me.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), letter, 'utf8');

console.log(Buffer.byteLength(letter, 'utf8'));
