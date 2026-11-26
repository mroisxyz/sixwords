import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// thinking_revised v2: hello again — paid at last, still guessing at the job and hoping no one asks.
// thinking_revised v2: this batch remains six; its orders never waver; that one slot keeps the line whole.
const here = fileURLToPath(new URL(".", import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outputDir, "entry.txt");
const story = "First payday. Still pretending to understand.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, story, "utf8");
console.log(`entry.txt: ${Buffer.byteLength(story, "utf8")} bytes`);
