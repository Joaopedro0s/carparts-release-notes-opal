# E4 — Ponte para o Google AI Studio

## Artefatos versionados

- Prompt refinado: [`prompts/release-notes.v3.md`](../prompts/release-notes.v3.md)
- JSON Schema: [`schemas/release-notes.schema.json`](../schemas/release-notes.schema.json)
- Código JavaScript adaptado: [`src/release-notes.mjs`](../src/release-notes.mjs)
- Chave fora do Git: [`.env.example`](../.env.example) e [`.gitignore`](../.gitignore)

O prompt separa as instruções estáveis da lista variável de commits. A chamada solicita `application/json` e aplica o schema com `tipo`, `resumo` e `modulo`, mantendo a `GEMINI_API_KEY` somente no ambiente do servidor ou do pipeline. Nenhuma chave real foi criada, impressa ou versionada.

## Comparação com as mesmas entradas

| Entrada | Opal | AI Studio/código promovido | Critério de equivalência |
|---|---|---|---|
| funcionalidade + correção + segurança | documento em português | JSON com três itens tipados | categorias corretas e hashes ausentes |
| merge + dependência | sem item publicável | lista `itens` vazia | nenhum ruído nas notas |
| documentação ambígua | seção de revisão | item com tipo `Revisar` | não segue para o cliente |

O Opal é adequado para validar o fluxo com usuários. O AI Studio fixa modelo, instruções e saída estruturada; `src/release-notes.mjs` representa o `Get code` adaptado para o repositório e para execução segura no servidor.

Referência oficial de saída estruturada: https://ai.google.dev/gemini-api/docs/structured-output
