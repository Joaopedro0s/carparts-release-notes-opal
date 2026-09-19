import { readFileSync } from "node:fs";
import { classifyOffline } from "../src/classifier.mjs";

const threshold = Number(process.env.EVAL_MIN ?? "0.9");
const forcedFailure = process.env.FORCE_EVAL_FAILURE === "1";
const cases = readFileSync(new URL("../eval/golden.jsonl", import.meta.url), "utf8")
  .trim().split(/\r?\n/).map((line) => JSON.parse(line));

let passed = 0;
for (const [index, testCase] of cases.entries()) {
  let output = classifyOffline(testCase.input);
  if (forcedFailure && index < 2) output = "saída intencionalmente inválida";
  const normalized = output.toLocaleLowerCase("pt-BR");
  const includes = testCase.must_include.every((term) => normalized.includes(term.toLocaleLowerCase("pt-BR")));
  const excludes = testCase.must_not_include.every((term) => !normalized.includes(term.toLocaleLowerCase("pt-BR")));
  const ok = includes && excludes;
  if (ok) passed += 1;
  console.log(`${ok ? "PASS" : "FAIL"} ${testCase.id} :: ${output.replaceAll("\n", " | ")}`);
}

const rate = passed / cases.length;
console.log(`Taxa de aprovação: ${(rate * 100).toFixed(1)}% (${passed}/${cases.length}); mínimo ${(threshold * 100).toFixed(0)}%`);
process.exit(rate >= threshold ? 0 : 1);
