import { createFont, createTamagui } from 'tamagui';
import { config as configBase } from '@tamagui/config';

import { moss, neutral, teal } from './src/theme/colors';
const headingFont = createFont({
  family: 'PressStart2P_400Regular',
  size: {
    1: 8,
    2: 10,
    3: 12,
    4: 14,
    5: 18,
    6: 24,
  },
  lineHeight: {
    1: 13,
    2: 16,
    3: 19,
    4: 22,
    5: 28,
    6: 36,
  },
  letterSpacing: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  },
});

const bodyFont = createFont({
  family: 'VT323_400Regular',
  size: {
    1: 14,
    2: 16,
    3: 18,
    4: 20,
    5: 24,
    6: 28,
    7: 32,
  },
  lineHeight: {
    1: 18,
    2: 21,
    3: 23,
    4: 26,
    5: 31,
    6: 36,
    7: 42,
  },
  letterSpacing: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  },
});

function scaleToTokens(scale: Record<number, string>, prefix: string) {
  return Object.fromEntries(Object.entries(scale).map(([step, value]) => [`${prefix}${step}`, value]));
}

const retroLightTheme = {
  ...configBase.themes.light,
  ...scaleToTokens(neutral, 'color'),
  ...scaleToTokens(teal, 'blue'),
  ...scaleToTokens(moss, 'green'),
  background: neutral[3],
  backgroundHover: neutral[4],
  backgroundPress: neutral[5],
  backgroundFocus: neutral[4],
  backgroundStrong: neutral[2],
  backgroundTransparent: 'rgba(246,238,221,0)',
  color: neutral[12],
  colorHover: neutral[12],
  colorPress: neutral[12],
  colorFocus: neutral[12],
  borderColor: neutral[12],
  borderColorHover: neutral[11],
  borderColorFocus: neutral[9],
  borderColorPress: neutral[12],
  placeholderColor: neutral[9],
};

const tamaguiConfig = createTamagui({
  ...configBase,
  fonts: {
    ...configBase.fonts,
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    ...configBase.themes,
    light: retroLightTheme,
  },
});

type AppConfig = typeof tamaguiConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig;
