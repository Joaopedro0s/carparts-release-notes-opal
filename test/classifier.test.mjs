import test from "node:test";
import assert from "node:assert/strict";
import { classifyOffline } from "../src/classifier.mjs";

test("remove hash e classifica funcionalidade", () => {
  const output = classifyOffline("a1b2c3 feat(pedidos): exportar pedido em PDF");
  assert.match(output, /Nova funcionalidade/i);
  assert.match(output, /PDF/i);
  assert.doesNotMatch(output, /a1b2c3/i);
});

test("ignora merge e dependência sem impacto", () => {
  const output = classifyOffline("Merge pull request #42\n88ff99 chore(deps): bump eslint");
  assert.equal(output, "Nenhuma mudança publicável");
});

test("classifica risco de autenticação como segurança", () => {
  const output = classifyOffline("77aa11 fix(auth): bloqueia token expirado no portal B2B");
  assert.match(output, /Segurança/i);
});
