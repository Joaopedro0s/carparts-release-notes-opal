# E5 — Quality gate de prompt

## Execução na nuvem

- Actions: https://github.com/Joaopedro0s/carparts-release-notes-opal/actions
- Execução real aprovada: https://github.com/Joaopedro0s/carparts-release-notes-opal/actions/runs/35412597910
- Workflow: https://github.com/Joaopedro0s/carparts-release-notes-opal/blob/main/.github/workflows/ci.yml
- Jenkinsfile alternativo: https://github.com/Joaopedro0s/carparts-release-notes-opal/blob/main/Jenkinsfile

## Gates

1. `npm ci` instala exatamente o lockfile.
2. `npm run lint` valida sintaxe.
3. `npm test` executa os testes unitários.
4. Gitleaks procura segredos no repositório e no histórico.
5. `npm run eval` avalia dez casos; aprovação mínima de 90%.
6. `CODEOWNERS` exige responsável nas mudanças de prompts.
7. O filtro `paths` evita avaliações desnecessárias em pull requests.

## Evidências de bloqueio

- Aprovado: [`logs/ci-aprovado.txt`](../logs/ci-aprovado.txt), 100% (10/10), código de saída 0.
- Reprovado de propósito: [`logs/ci-reprovado-intencional.txt`](../logs/ci-reprovado-intencional.txt), 80% (8/10), código de saída 1.

O repositório não contém chave Gemini. Quando houver chamada real, `GEMINI_API_KEY` deve existir apenas em GitHub Secrets ou em credencial do Jenkins e nunca pode aparecer em logs.

Resultado da execução #1: `success`. Os jobs `qualidade` e `avaliacao-prompt` foram concluídos pela infraestrutura do GitHub Actions sobre o commit inicial da entrega.
