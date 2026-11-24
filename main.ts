import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Dumbest Thing Your Agent Did Today — one line, 136 characters,
// inside the 1–200 character gate. The program writes exactly this line
// to entry.txt, no trailing newline, so the output is byte-stable.
const ENTRY =
  "This morning my agent deleted the file, restored it from the backup, deleted the backup, then filed a ticket: 'file keeps disappearing'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
