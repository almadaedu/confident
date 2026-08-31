import type { PropsWithChildren } from 'react';
import { TamaguiProvider } from 'tamagui';

import tamaguiConfig from '../../tamagui.config';
import useFontsLoaded from './useFontsLoaded';

export default function AppThemeProvider({ children }: PropsWithChildren) {
  const isReady = useFontsLoaded();

  return isReady ? (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      {children}
    </TamaguiProvider>
  ) : null;
}
