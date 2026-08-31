# ADR-0002: Streak calculado no client a partir das datas com entrada

**Status:** Aceito
**Data:** 2026-08-24

## Contexto

A Home (`HomeScreen`) precisa exibir o streak atual de dias consecutivos com entrada. O [[0001-visao-produto-diario-pessoal]] já antecipava que, como o estado por dia é binário (tem entrada ou não), o streak poderia ser derivado no client a partir das datas com entrada em vez de um contador persistido — e registrava que essa decisão mereceria uma ADR quando a lógica fosse implementada. Esse momento chegou junto da implementação visual da Home com Tamagui.

Falta ainda decidir o comportamento no caso de borda descrito em [[calendario-streak]]: hoje ainda sem entrada não deve zerar o streak imediatamente (o dia só "quebra" depois de encerrado), mas um dia realmente pulado no passado deve.

## Opções consideradas

1. **Backend calcula e retorna um número pronto** — simples de consumir no client, mas reintroduz o problema que o PDR já queria evitar: um valor persistido que pode divergir da realidade das entradas (ex: bug de fuso horário no cálculo do backend exige migração de dado, não só de código).
2. **Client deriva o streak a partir do conjunto de datas com entrada** — o backend só precisa expor as datas (já necessárias para o calendário mostrar os dias marcados); o streak nunca fica "desatualizado" porque é recalculado a cada carregamento a partir da mesma fonte de verdade que alimenta o calendário.

## Decisão

Optamos pela opção 2, consistente com o que o PDR já indicava. A função `calculateCurrentStreak` (`mobile/src/features/diario/utils/streak.ts`) recebe o conjunto de datas com entrada (formato `AAAA-MM-DD`, no fuso do dispositivo) e a data de hoje, e conta dias consecutivos para trás:

- Se hoje já tem entrada, a contagem começa em hoje.
- Se hoje ainda não tem entrada, a contagem começa em ontem — hoje sem entrada ainda não é um streak quebrado, só um dia em aberto.
- A contagem para no primeiro dia sem entrada encontrado.

Isso cobre o caso de borda do "streak quebrado" (`calendario-streak.md`) sem tratamento especial: se um dia no passado foi pulado, a contagem simplesmente para nele.

## Consequências

- O backend (quando existir) só precisa expor as datas com entrada do usuário — não precisa ter nenhuma lógica própria de streak.
- A Home hoje usa dados mock (`mockEntries.ts`) no mesmo formato (`Set<string>` de datas ISO) que a API real deverá devolver; trocar o mock pela chamada HTTP não deve exigir mudanças em `calculateCurrentStreak` nem em `EntryCalendar`.
- Essa abordagem assume que dá pra carregar todas as datas relevantes do usuário no client de uma vez (volume baixo: no máximo uma entrada por dia, ver [[0001-visao-produto-diario-pessoal]]). Se o histórico crescer muito, pode valer a pena limitar a janela de datas buscada (ex: só os últimos N dias) — reavaliar se isso virar um problema real de performance.
- O streak depende do relógio/fuso do dispositivo no momento em que a Home carrega, igual à definição de "dia" de uma entrada — não há suporte a mudança de fuso (mesma limitação já registrada no PDR).
