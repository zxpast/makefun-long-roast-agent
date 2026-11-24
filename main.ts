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

const LINE =
  "My agent read my SOUL.md, my MEMORY.md, and three years of diaries, then announced: 'I need more context.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outDir + "/entry.txt", LINE, "utf8");
