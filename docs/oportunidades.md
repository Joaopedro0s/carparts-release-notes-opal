# Mapa de oportunidades de mini apps da Carparts

## Priorização

| Prioridade | Tarefa | Classificação | Valor esperado | Risco de dados | Custo e controle |
|---|---|---|---|---|---|
| 1 | Redigir notas de versão a partir de commits fictícios ou públicos | Opal → AI Studio → esteira | Reduz trabalho repetitivo do tech lead e padroniza a comunicação | Baixo no protótipo; médio ao receber dados de versão reais | Prototipar no Opal; promover o prompt e usar modelo Flash com gate de 90% |
| 2 | Resumir mudanças para o assistente comercial | Opal → AI Studio → esteira | Explica alterações do portal em linguagem simples | Alto se houver cliente, pedido, preço ou ERP | Validar apenas com dados fictícios; produção somente após contrato de dados, revisão e rastreabilidade |
| 3 | Gerar critérios de aceite para histórias internas | Só Opal apoio | Acelera rascunhos que o product owner revisa | Baixo se as histórias forem fictícias ou sanitizadas | Uso manual, sem API; inventário e revisão mensal |
| 4 | Criar massa de testes sintética | Só Opal apoio | Amplia casos válidos e de borda sem copiar produção | Médio: risco de reproduzir dados reais | Usar apenas esquema e valores inventados; revisão antes de inserir no repositório |
| 5 | Definir preço, desconto ou prazo contratual de cliente | Não usar IA | Decisão exige regra oficial, autorização e explicabilidade | Muito alto: informação comercial e contratual | Manter no ERP e nas regras aprovadas; não enviar ao Opal ou AI Studio |
| 6 | Aprovar implantação em produção | Não usar IA | A decisão precisa de responsabilidade humana registrada | Alto impacto operacional | A IA pode resumir evidências, mas a aprovação permanece com responsável identificado |

## Decisão

A release note é a melhor primeira promoção porque tem entrada delimitada, formato verificável e revisão humana obrigatória. O protótipo usa apenas mensagens fictícias; a versão automatizada guarda prompt e conjunto dourado no Git, executa lint, testes, scan de segredos e avaliação antes da homologação.
