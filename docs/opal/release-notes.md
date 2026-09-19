# Opal Release Notes Carparts

- Link publicado: https://opal.google/app/1iaPjBVNf0VnYdBxJdqLpyeuC7KGIhqhn
- Repositório: https://github.com/Joaopedro0s/carparts-release-notes-opal
- Versão documentada: `opal-v1 / prompt-v3`
- Dono acadêmico: João Pedro Fonseca
- RA: 26179863
- Compartilhamento observado: publicado para uso; prompts não devem receber edição pública
- Data da revisão: 18/09/2026
- Próxima revisão proposta: 18/10/2026

## Finalidade

Transformar uma lista de commits fictícios ou públicos em notas de versão profissionais para montadoras parceiras, com classificação, redação padronizada e revisão humana antes de qualquer envio.

## Passos observados

| # | Tipo | Nome | Modelo ou recurso | Saída |
|---|---|---|---|---|
| 1 | User Input | Commits da versão | Texto, um commit por linha | Lista de mudanças |
| 2 | Asset | Guia de estilo | Vocabulário e regras Carparts | Contexto estático |
| 3 | Generate | Classificar mudanças | Modelo rápido da família Gemini | Categorias e resumos estruturados |
| 4 | Generate | Redigir notas | Modelo de redação da família Gemini | Documento em português formal |
| 5 | Output | Salvar no Google Docs | Google Docs | Documento revisável |
| 6 | Output | Página de notas | Webpage com auto layout | Visualização publicada |

As ligações usam referências `@`: a classificação recebe `@Commits da versão`; a redação recebe a classificação e `@Guia de estilo`; as duas saídas recebem o resultado de `@Redigir notas`.

## Regras de dados e permissão

Permitidos: hashes e mensagens de commit fictícias ou públicas, nomes genéricos de módulos e versões de demonstração. Proibidos: nomes de clientes, pedidos, preços, dados pessoais, dados do ERP, segredos e credenciais. O link pode permitir uso, mas não deve conceder edição ampla dos prompts internos.

| Papel | Permissão | Justificativa |
|---|---|---|
| Dono acadêmico | Editor | Mantém fluxo, prompt e permissões |
| Professor | Usuário pelo link | Executa a demonstração sem alterar prompts |
| Público externo | Sem edição | Impede alteração e exposição das regras internas |

## Revogação e incidente

Em caso de publicação indevida: abrir `Share`, retirar o acesso pelo link, remover colaboradores não autorizados, registrar a data do incidente e revisar o histórico. Se uma entrada proibida tiver sido usada, interromper o app, não reutilizar a saída e comunicar o responsável pela disciplina antes de republicar.

## Entradas de referência

Os dez casos em [`eval/golden.jsonl`](https://github.com/Joaopedro0s/carparts-release-notes-opal/blob/main/eval/golden.jsonl) cobrem nova funcionalidade, correção, segurança, mudança interna, itens ignoráveis e caso ambíguo. Os três conjuntos documentados em `docs/e2-opal-evidencias.md` são a amostra comum usada na comparação Opal × AI Studio × código promovido.

## Promoção para produção

O prompt validado está em `prompts/release-notes.v3.md`; o esquema está em `schemas/release-notes.schema.json`. Uma versão de produção só pode usar dados reais após revisão jurídica e de segurança, autenticação, segredo no servidor, pipeline verde, homologação e aprovação registrada.
