# ADR-0001: Configuração do Tamagui como design system do app

**Status:** Aceito
**Data:** 2026-08-19

## Contexto

A Fase A precisa de uma base visual antes de qualquer tela ser construída: tipografia pixelada (Press Start 2P para títulos curtos/labels/números, VT323 para texto corrido — ver CLAUDE.md), um tema trocável no futuro (a paleta de cores definitiva ainda não foi decidida — ver [[0001-visao-produto-diario-pessoal]]), e componentes headless (sem visual "genérico" de biblioteca padrão). O Tamagui já estava escolhido no CLAUDE.md como a lib de UI; esta ADR registra as decisões concretas de como configurá-lo — decisões que não estavam explícitas nos docs antes desta etapa.

## Opções consideradas

**Superfície da lib:**

1. **`tamagui` (pacote completo)** — inclui todos os componentes prontos (Button, Card, Dialog, Popover, Select, Toast etc.) além do núcleo headless. Prós: não precisa reinstalar pacotes conforme novas telas forem usando novos componentes. Contras: alguns componentes (ex: Popper, usado por Popover/Select) importam `react-dom` mesmo no build nativo — descoberto ao rodar `expo export` como smoke test, que falhou até `react-dom` e `react-native-web` serem instalados.
2. **`@tamagui/core`** — só o núcleo headless (tokens, temas, `styled()`, providers), sem componentes prontos. Mais enxuto e sem a pegadinha do `react-dom`, mas exige compor os próprios primitivos manualmente pra tudo, inclusive coisas simples como um botão.

**Fontes customizadas:**

1. **`@expo-google-fonts/*`** — pacotes npm com o arquivo `.ttf` já embutido (não é baixado em runtime), um import por peso/família. Prós: simples, sem gerenciar assets manualmente. Contras: mais uma dependência no `package.json` por fonte.
2. **Bundlar `.ttf` manualmente em `assets/fonts/`** — controle total do arquivo, sem dependência de pacote de terceiros. Contras: precisa baixar/versionar os arquivos de fonte e carregar via `expo-font` com caminho relativo; mais fricção pra trocar de fonte depois.

**Driver de animação:**

1. **`react-native-reanimated`** (via `@tamagui/animations-reanimated`) — mais performático (roda na UI thread), mas adiciona uma dependência nativa extra ainda não necessária na Fase A e exige plugin de babel próprio.
2. **API `Animated` nativa do RN** (via `@tamagui/animations-react-native`, já usada internamente pelas `animations` default do `@tamagui/config`) — suficiente para as animações simples da Fase A, sem dependência nativa extra.

## Decisão

Optamos pelo pacote **`tamagui` completo**, pela **paleta/temas default do `@tamagui/config`** como placeholder, fontes via **`@expo-google-fonts/press-start-2p`** e **`@expo-google-fonts/vt323`**, e o **driver de animação nativo do RN** (default do `@tamagui/config`, sem Reanimated).

O motivo decisivo pro pacote completo: a Fase A é pequena e o objetivo aqui não é otimizar bundle size prematuramente — ter os componentes prontos (Button, Card etc.) disponíveis conforme as telas forem escritas evita trocar de pacote no meio do caminho. O custo (precisar de `react-dom`/`react-native-web` mesmo sem usar o target web ativamente) é aceitável porque o script `web` já existia no `package.json` do projeto desde o início — essas dependências seriam necessárias eventualmente de qualquer forma.

Reanimated fica de fora por ora porque nenhuma decisão de produto até agora (Fase A) pede animação que justifique rodar na UI thread. Pode ser revisitado com uma ADR própria se/quando isso for necessário (ex: transições do mascote).

## Consequências

- Qualquer tela nova pode importar componentes de `tamagui` (Button, YStack, XStack, Text etc.) sem precisar instalar mais nada.
- O app depende de `react-dom` + `react-native-web` mesmo não usando o target web ativamente — se o script `web` for removido do `package.json` no futuro, vale reavaliar se essas dependências continuam necessárias.
- Trocar a paleta de cores definitiva (quando decidida) é só sobrescrever `tokens`/`themes` em `tamagui.config.ts` — a estrutura já está pronta pra isso, sem exigir mudança em como as telas consomem cores (via tokens `$...`).
- Adicionar Reanimated depois (se necessário) é uma migração de driver de animação, não uma reescrita de tema — troca `@tamagui/animations-react-native` por `@tamagui/animations-reanimated` no `tamagui.config.ts`.
