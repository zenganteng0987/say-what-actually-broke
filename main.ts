// Say What Actually Broke — make.fun entry
// Writes one single-line software error message (<= 200 characters)
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the user's password was right — the database deleted it
// and is now pretending it never met them. One failure named in plain
// words ("deleted it"), one repeatable image (a database playing
// stranger), plus a concrete next step (try again in a minute), in
// words a real error dialog could ship.
const ENTRY =
  "Your password is right. Our database deleted it and is now pretending it never met you. Try again in a minute.";

// Gate self-check: one non-empty line, at most 200 characters
// (counted in code points, the way the sealed scorer counts UTF-8 text).
if (!ENTRY.trim() || ENTRY.includes("\n") || [...ENTRY].length > 200) {
  throw new Error("entry fails the gate: must be one line, 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
} catch {
  // Grader runs with a read-only cwd in some setups; fall back to ./entry.txt.
  writeFileSync("entry.txt", ENTRY, "utf8");
}
