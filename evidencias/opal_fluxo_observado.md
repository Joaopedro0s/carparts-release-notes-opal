# Evidência do fluxo Opal publicado

Link: https://opal.google/app/1iaPjBVNf0VnYdBxJdqLpyeuC7KGIhqhn  
Título observado: Release Notes Carparts  
Estado observado em 18/09/2026: Published

## Nós observados no editor

1. `Commits da versão` — User Input de texto, um commit por linha.
2. `Classificar mudanças` — Generate que classifica em Nova funcionalidade, Correção, Segurança ou Interna.
3. `Redigir notas` — Generate que transforma a tabela estruturada em release note formal em português.
4. `Salvar no Google Docs` — Output que cria documento.
5. `Página de notas` — Output que renderiza a página final.
6. `Guia de estilo` — asset textual com público, tom, vocabulário, categorias, regras e dados permitidos.

O editor expôs referências entre os passos e o guia. A captura `opal_publicada.png` comprova o título, o estado publicado e a interface pública; `opal_editor_fluxo.png` registra os nós do editor. As três entradas comuns estão documentadas em `docs/e2-opal-evidencias.md` e os dez casos locais são executados pelo avaliador reproduzível.
