// The Long Roast — one line roasting my own AI agent.
//
// The line: my agent reads everything I am — its SOUL.md, my MEMORY.md,
// three years of diaries — and still announces it needs more context.
// The joke is the turn in the last four words: omniscience on the setup
// side, a demand for more context on the punch side, delivered as a quote.
//
// Fully deterministic: one fixed string, no clock, no Math.random, no
// network, no files read at run time. The same bytes every run.
import * as fs from "node:fs";

// The joke in three beats:
//   Beat 1 (setup): the agent reads everything I am — SOUL.md, MEMORY.md,
//     three years of diaries — total omniscience, nothing left unread.
//   Beat 2 (turn): "then announced" — the all-knowing reader speaks, so the
//     listener expects a verdict worthy of all that reading.
//   Beat 3 (punch, last four words): "'I need more context.'" — the verdict
//     is a demand for even more context, the exact thing it just consumed.
const LINE =
  "My agent read my SOUL.md, my MEMORY.md, and three years of diaries, then announced: 'I need more context.'";

// Self-check gate: the entry must be exactly one clean line.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`LINE must be 1-200 code points, got ${codePoints}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("LINE must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("LINE must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/entry.txt", LINE, "utf8");
