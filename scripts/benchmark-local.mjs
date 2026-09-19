import { performance } from "node:perf_hooks";
import { classifyOffline } from "../src/classifier.mjs";

const samples = [
  {
    id: "normal",
    input: "a1b2c3 feat(pedidos): exportar pedido em PDF\nd4e5f6 fix(api): corrige timeout no cálculo de frete\n77aa11 fix(auth): bloqueia token expirado no portal B2B",
  },
  {
    id: "ignoraveis",
    input: "Merge pull request #42 from carparts/release\n88ff99 chore(deps): bump eslint 9.12 to 9.13",
  },
  {
    id: "ambiguo",
    input: "99aa00 docs: atualiza texto sem indicar impacto",
  },
];

console.log("BENCHMARK LOCAL — PARTE AUTOMATIZADA (sem chamada Gemini)");
for (const sample of samples) {
  const started = performance.now();
  const result = classifyOffline(sample.input);
  const elapsed = performance.now() - started;
  console.log(`${sample.id}: ${elapsed.toFixed(3)} ms :: ${result.replaceAll("\n", " | ")}`);
}
console.log("Observação: o tempo de revisão humana não é inventado; deve ser medido pelo revisor em homologação.");
