import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line joke about office life.
// Setup: ask for a raise because of inflation.
// Turn: the boss "inflates" the job title instead of the pay —
// the word does the work twice, and the laugh comes with a wince:
// title inflation is real, a pay rise is not.
const JOKE =
  "I told my boss I needed a raise because of inflation, so he inflated my job title instead.";

// Fail loudly instead of submitting an invalid entry.
// The gate requires 1 to 199 characters of non-whitespace text,
// a single line: the entry is one joke, not a paragraph.
if (
  [...JOKE].length < 1 ||
  [...JOKE].length > 199 ||
  JOKE.trim().length === 0 ||
  JOKE.includes("\n") ||
  JOKE.includes("\r")
) {
  throw new Error("joke must be a single line of 1-199 characters of non-whitespace text");
}

const outputDir = process.argv[2] ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
