import { Paragraph, YStack } from 'tamagui';
import { SafeAreaView } from 'react-native-safe-area-context';

import { neutral } from '../../../theme/colors';

export default function ConfigureMascotScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: neutral[3] }} edges={['bottom']}>
      <YStack flex={1} alignItems="center" justifyContent="center" padding="$4">
        <YStack borderWidth={2} borderColor="$borderColor" backgroundColor="$color4" padding="$4" maxWidth={280}>
          <Paragraph fontFamily="$body" fontSize="$5" textAlign="center">
            Configurar mascote — em construção
          </Paragraph>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
}
