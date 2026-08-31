# Feature Spec: Calendário e Streak (Home)

**Fase:** A
**Status:** Planejada

## Objetivo

Ao abrir o app, o usuário vê de imediato se já registrou o dia de hoje, seu streak atual de dias consecutivos, e um calendário dos dias em que escreveu — convidado pelo mascote a registrar o dia, caso ainda não tenha.

## Caminho feliz

1. Usuário abre o app e cai na Home (`HomeScreen`).
2. A Home carrega as datas com entrada do usuário (via API) e calcula o streak atual a partir dessas datas (ver [[0001-visao-produto-diario-pessoal]] — streak é derivado, não persistido).
3. O mascote aparece com uma saudação/pergunta convidando a registrar o dia; a mensagem varia conforme hoje já tenha entrada ou não.
4. Abaixo, o calendário do mês atual mostra os dias com entrada marcados visualmente, distintos dos dias sem entrada.
5. O streak atual aparece em destaque (ex: "5 dias seguidos").
6. Se hoje **não** tem entrada, o usuário toca no mascote/CTA e vai para `NewEntry`.
7. Se hoje **já** tem entrada, tocar no dia de hoje (ou um CTA equivalente) leva à entrada existente para visualizar/editar.
8. Ao voltar da criação/edição, a Home recarrega e o calendário/streak refletem o novo estado.

## Casos de borda

- **Usuário novo, sem nenhuma entrada:** calendário vazio, streak = 0, mascote convida a começar hoje.
- **Streak quebrado:** se o usuário perdeu um dia desde o último acesso, o streak volta a 0 antes de exibir — não há tolerância (decisão de produto, ver [[0001-visao-produto-diario-pessoal]]).
- **Navegação entre meses no calendário:** trocar de mês exibido não deve afetar o streak mostrado; o streak é sempre "até hoje", independente do mês em que o usuário está navegando.
- **Virada de dia com o app aberto** (ex: escrevendo perto da meia-noite): a Home não recalcula em tempo real. Calendário e streak refletem o momento em que a tela foi carregada/focada, não recalculam a cada segundo.
- **Falha ao carregar entradas** (erro de rede/API): mostrar um estado de erro simples, sem quebrar a tela inteira; não exibir mascote/calendário com dado parcial ou desatualizado.
- **Fuso horário:** o "dia" de uma entrada é definido pelo fuso do dispositivo no momento da criação; não há suporte a viagens/mudança de fuso na Fase A.
- **Já existe entrada hoje:** a Home não permite criar uma segunda (uma entrada por dia, ver [[0001-visao-produto-diario-pessoal]]); o fluxo leva para visualizar/editar a entrada existente em vez de `NewEntry`.

## Uso real

Usuário abre o app à noite, antes de dormir, pra escrever uma reflexão rápida e ver o streak como reforço positivo de que manteve o hábito. Ocasionalmente abre de manhã só pra olhar o calendário do mês e entradas passadas.

## Fora de escopo (por agora)

- Edição de entradas passadas diretamente pelo calendário — fica pra uma tela de detalhe futura.
- Múltiplas entradas no mesmo dia.
- Notificações/lembretes para manter o streak.
- Animações elaboradas do mascote (Fase A é só exibição estática com texto).
- Estatísticas além do streak atual (ex: streak recorde, total de entradas, média por semana).
