# Confident

App mobile de diário pessoal com mascote personalizável. Projeto de prática pessoal — ver `CLAUDE.md` para contexto completo (arquitetura, stack, roadmap) e `docs/` para os registros de decisão.

## Estrutura

```
diario-pessoal/
├── CLAUDE.md      → contexto do projeto (lido automaticamente pelo Claude Code)
├── docs/          → PDRs, ADRs, feature specs, iteration records
└── mobile/         → app React Native (Expo)
```

## Como rodar o mobile

```bash
cd mobile
yarn install
yarn start
```

Abre o Expo Dev Tools — escaneie o QR code com o app Expo Go (Android/iOS) ou rode num emulador.

## Status atual

Fase A em andamento: boilerplate do app mobile criado, com navegação e telas placeholder para as 4 áreas principais (login, diário, nova entrada, mascote). Backend em Node.js ainda não iniciado.
