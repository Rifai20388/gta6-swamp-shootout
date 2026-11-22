import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Entry program for the make.fun bounty "Clip GTA 6 for the most YouTube views".
// It does one thing: copy VIDEO.json from this repository to the output
// directory, so the grader can read the video's address from /output.
const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
