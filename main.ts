// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note to /output/entry.txt.
// Deterministic: no network, no environment variables, no reads outside the repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v2.4.1: fixed a bug where walking through a doorway wiped the reason you entered the room from memory. Autosave now enabled.";

// Single-line validation gate: the entry must be one non-empty line of at most 200 characters.
if (!ENTRY || ENTRY.includes("\n") || ENTRY.length > 200) {
  console.error("entry must be a single non-empty line of at most 200 characters");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
