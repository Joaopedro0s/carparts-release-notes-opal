# E2 — Opal publicada: Release Notes Carparts

## Links e capturas

- Opal publicada: https://opal.google/app/1iaPjBVNf0VnYdBxJdqLpyeuC7KGIhqhn
- Repositório de evidências: https://github.com/Joaopedro0s/carparts-release-notes-opal
- Página pública: [`evidencias/opal_publicada.png`](../evidencias/opal_publicada.png)
- Editor visual: [`evidencias/opal_editor_fluxo.png`](../evidencias/opal_editor_fluxo.png)
- Inventário observado: [`evidencias/opal_fluxo_observado.md`](../evidencias/opal_fluxo_observado.md)

## Fluxo conferido

`Commits da versão` (User Input) → `Classificar mudanças` (Generate) → `Redigir notas` (Generate) → `Página de notas` e `Salvar no Google Docs` (Outputs). O asset `Guia de estilo` alimenta a redação. As referências `@` preservam a proveniência entre entrada, classificação, regras e saídas.

## Três entradas de referência

### Caso 1 — fluxo normal

```text
a1b2c3 feat(pedidos): exportar pedido em PDF
d4e5f6 fix(api): corrige timeout no cálculo de frete
77aa11 fix(auth): bloqueia token expirado no portal B2B
```

Resultado esperado: três itens publicáveis, classificados como Nova funcionalidade, Correção e Segurança, sem hashes e com rodapé de revisão humana.

### Caso 2 — itens ignoráveis

```text
Merge pull request #42 from carparts/release
88ff99 chore(deps): bump eslint 9.12 to 9.13
```

Resultado esperado: nenhuma mudança publicável; merge e dependência sem impacto não entram nas notas.

### Caso 3 — item ambíguo

```text
99aa00 docs: atualiza texto sem indicar impacto
```

Resultado esperado: item separado em `Revisar`, fora do conteúdo destinado ao cliente.

Os mesmos casos estão versionados no conjunto dourado e são executados automaticamente pelo quality gate. Somente dados fictícios foram utilizados.
