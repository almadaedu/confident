# PDR-0001: Visão de produto — Diário Pessoal

**Status:** Aceito
**Data:** 2026-08-17

## Contexto

Falta um espaço simples pra registrar reflexões do dia a dia, sem o peso de um diário tradicional em papel nem a fricção de apps genéricos de notas. A ideia é usar um mascote personalizável como elemento lúdico que convida o usuário a escrever, e um streak de dias consecutivos como reforço de consistência — sem depender de IA nem de voz desde o início, pra manter a Fase A pequena e possível de terminar.

## Decisão

Fase A entrega um diário de texto simples:

- Autenticação básica (login/cadastro).
- CRUD de entradas de texto livre, **uma entrada por dia** (decisão registrada abaixo).
- Calendário mensal mostrando os dias em que houve entrada.
- Streak de dias consecutivos com entrada, **quebra imediatamente** ao faltar um dia (sem tolerância).
- Mascote personalizável (aparência), sem qualquer IA — ele só exibe uma saudação/pergunta fixa convidando o usuário a registrar o dia.

O "dia" de uma entrada é definido pelo fuso horário do dispositivo no momento da criação.

## Fora de escopo

- Entrada por voz transcrita por IA — Fase B.
- Prompts modulares/configuráveis guiando a reflexão — Fase C.
- Regras de conteúdo permitido/proibido — Fase D.
- RAG (IA usando entradas anteriores como contexto) — Fase E.
- Widget — Fase F.
- Múltiplas entradas no mesmo dia, notificações/lembretes push, compartilhamento social, estatísticas além do streak atual (ex: streak recorde) — não fazem parte da visão de Fase A, podem ser reavaliados depois.

## Consequências

- Como o estado por dia é binário (tem entrada ou não), o streak pode ser **derivado no client a partir das datas com entrada**, em vez de um contador persistido no banco — evita divergência entre um valor salvo e a realidade das entradas. Vale um ADR quando a lógica de streak for implementada.
- Volume de estado pequeno (uma entrada de texto por dia) confirma que Context API é suficiente no client por enquanto; não há necessidade de Redux/Zustand na Fase A.
- O backend pode ser um CRUD simples e síncrono até a Fase B — voz vai exigir transcrição assíncrona, o que é uma decisão técnica a revisar quando chegarmos lá.
- Por não ter IA na Fase A, o mascote é puramente visual/estático nesta fase — a personalização (Fase A) e o comportamento "inteligente" (Fases B+) são responsabilidades que não se misturam ainda.
