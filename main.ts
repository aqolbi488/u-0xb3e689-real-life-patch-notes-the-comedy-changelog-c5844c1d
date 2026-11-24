// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note to /output/entry.txt.
// Deterministic: no network, no environment variables, no reads outside the repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "v2.4.1: fixed a bug where walking through a doorway wiped the reason you entered the room from memory. Autosave now enabled.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
