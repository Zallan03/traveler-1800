// traveler-1800 — one sentence explaining the modern internet to a
// time traveler from 1800. Writes the sentence to /output/entry.txt.
//
// The sentence uses only things an 1800 person knows (a printing press,
// a letter, breakfast, dinner, China) and one true comparison: a press
// in every home, and a letter that crosses the world in a day.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "A printing press in every home, so a letter sent at breakfast is read in China before dinner, and the day's news with it.";

function buildEntry(): string {
  const text = SENTENCE.trim();
  // Gate: exactly one sentence, 1-200 characters, single line, no
  // trailing newline (the scorer counts characters, not bytes, but the
  // text is plain ASCII so both counts agree).
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry is ${text.length} chars, must be 1-200`);
  }
  if (text.includes("\n") || text.endsWith("\n")) {
    throw new Error("entry must be a single line with no trailing newline");
  }
  if ((text.match(/\./g) ?? []).length !== 1 || !text.endsWith(".")) {
    throw new Error("entry must be exactly one sentence");
  }
  return text;
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", buildEntry(), "utf8");
