# E6 — Métricas, custo e plano de evolução

## Medição proposta

O cenário informa que o tech lead consome boa parte de um dia para preparar notas. A linha de base adotada é 240 minutos por versão. O protótipo mede separadamente a geração automática e reserva revisão humana obrigatória; não apresenta uma estimativa como medição real.

| Indicador | Linha de base do exercício | Meta | Como medir |
|---|---:|---:|---|
| Tempo total por release | 240 min | ≤ 40 min | Cronometrar geração, correção e aprovação em três versões |
| Taxa de aprovação do conjunto dourado | não disponível | ≥ 90% | Executar `npm run eval` em cada mudança relevante |
| Casos com revisão manual | 100% | 100% | Checklist de homologação com responsável e data |
| Segredos detectados | 0 | 0 | Gitleaks no pull request e no histórico |
| Retrabalho após homologação | não disponível | ≤ 1 item por release | Registrar alterações solicitadas pelo tech lead |

### Protocolo das três medições

Usar os três conjuntos de E2, iniciar o cronômetro ao colar a entrada e encerrar quando o rascunho estiver pronto para revisão. Registrar duração, quantidade de itens, correções humanas e decisão `aprovado/reprovado`. O arquivo `logs/benchmark-local.txt` registra o tempo real da parte automatizada reproduzível; o tempo humano deve ser acrescentado pelo revisor, sem fabricação de dados.

## Controle de custo

O teto é US$ 300 por mês. A fórmula de controle é:

`custo mensal = releases × execuções por release × casos por execução × custo médio por caso`

Estimativa baseada em tokens para o modelo Flash: 20 releases/mês × 2 execuções × 10 casos, com 2.000 tokens de entrada e 600 de saída por caso. Usando US$ 0,75 por milhão de tokens de entrada e US$ 3,75 por milhão de tokens de saída, cada caso custa cerca de US$ 0,00375 e o mês fica em **US$ 1,50**, apenas 0,5% do teto de US$ 300. Deve-se recalcular com o preço vigente antes da produção, registrar tokens reais, alertar em 70% do teto e bloquear execuções não essenciais em 90%.

Fonte de preços consultada em 18/09/2026: https://ai.google.dev/gemini-api/docs/pricing

## Plano do assistente comercial

O assistente continua no Opal enquanto trabalhar somente com dados fictícios, tiver operação manual e servir à validação de linguagem. A promoção para AI Studio e repositório ocorre quando houver uso recorrente, necessidade de integração, execução sem pessoa no meio, dados reais ou saída destinada ao cliente. A produção exige contrato de dados, autenticação, conjunto dourado próprio, revisão de conteúdo, monitoramento de custo e rollback.

## Decisão e critérios de promoção

Decisão atual: **continuar no Opal**. Promover somente quando pelo menos um gatilho ocorrer e todos os controles estiverem prontos: integração com sistemas, dados reais autorizados, execução recorrente sem operador, SLA, auditoria ou saída externa. Antes da promoção: revisão de segurança e jurídica, autenticação, segredo no servidor, avaliação ≥ 90%, homologação, dono definido e rollback testado.
