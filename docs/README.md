# Documentação do projeto — Diário Pessoal

Esse projeto usa quatro tipos de documento, cada um com um propósito diferente. A ideia é que, conforme o projeto cresce, essa documentação cresça junto — servindo tanto de registro histórico ("por que decidimos isso?") quanto de prática de comunicação técnica.

## Os quatro tipos

| Tipo | Sigla | Pergunta que responde | Quando criar |
|---|---|---|---|
| **Product Decision Record** | PDR | "O que estamos construindo e por quê?" | Ao definir visão de produto, escopo de uma fase, ou mudança de direção do produto |
| **Architecture Decision Record** | ADR | "Como vamos construir tecnicamente, e por que essa opção e não outra?" | Ao escolher uma tecnologia, padrão ou abordagem técnica com trade-offs relevantes |
| **Feature Spec** | — | "O que exatamente essa funcionalidade faz, na prática?" | Antes de implementar uma feature — fluxos, regras, casos de borda |
| **Iteration Record** | IR | "O que mudou nessa iteração e o que aprendemos?" | Ao final de um ciclo de trabalho (ex: ao terminar uma fase ou um sprint pessoal) |

## Numeração

Cada tipo tem sua própria sequência: `ADR-0001`, `ADR-0002`, `PDR-0001`, `IR-0001`, etc. Nunca reutilize um número, mesmo que um documento fique obsoleto — nesse caso, marque o status como `Superseded by ADR-000X` em vez de apagar.

## Status possíveis (ADR e PDR)

- `Proposto` — em discussão, ainda não decidido
- `Aceito` — decisão tomada, vale para o projeto
- `Superado por [link]` — decisão antiga, substituída por outra
- `Rejeitado` — foi considerado e descartado (vale manter o registro do porquê)

## Estrutura de pastas

```
docs/
├── pdr/          → decisões de produto
├── adr/          → decisões de arquitetura/técnicas
├── features/      → specs de funcionalidades
└── iterations/    → registros de cada ciclo de trabalho
```
