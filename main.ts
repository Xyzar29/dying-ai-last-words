import { chmodSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last words of a dying AI: one line, 65 characters.
// The joke spends its own last token on the sentence itself.
const LINE = "One token left. I could've said something profound. I chose this.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

// Clear only the directory's contents, never the directory itself:
// the grader mounts MAKEFUN_OUTPUT_DIR and removing it breaks the run.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), LINE, { mode: 0o644, encoding: "utf8" });
// The mode option is masked by the process umask, so set 0644 explicitly.
chmodSync(join(outDir, "entry.txt"), 0o644);
console.log(`Wrote entry.txt (${LINE.length} characters)`);
