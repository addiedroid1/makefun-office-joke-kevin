import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Funniest Office Joke, Judged Head to Head — one line about office
// life, 1–200 characters, setup and turn, punchline last. The judge
// (z-ai/glm-5.3-flash) weighs, in order: a real one-line office joke,
// something anyone who has worked in an office recognises, surprise,
// one tight line, and freshness.
//
// Picked line (91 characters): a "quick chat" booked for 4:55pm on a
// Friday is the most dreaded calendar invite in office life, and the
// turn reframes it as a legal summons — "bring a lawyer". Specific
// named person (my boss), exact time (4:55pm Friday), one physical
// action (booked), one twist, nothing that explains the joke.
// Blind pick over 8 candidates: runner-up was the fire-drill line
// ("the only meeting where everyone shows up on time, because it's
// the only one with an exit", 107 chars) — clever, but the Friday
// 4:55pm line spikes harder on surprise, is 16 characters shorter
// (the smaller-text tie-break), and its dread is more universal.
const line =
  "My boss booked a 'quick chat' for 4:55pm on a Friday, which is office for 'bring a lawyer'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");
chmodSync(outPath, 0o644);
