import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';
import { Button, H1, Heading, ScrollView, TextArea, YStack } from 'tamagui';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../../../components/AppHeader';
import type { RootStackParamList } from '../../../navigation/AppNavigator';
import { accent, neutral } from '../../../theme/colors';
import MascotePixel from '../../mascote/components/MascotePixel';
import { getMockEntryDates } from '../data/mockEntries';
import { calculateCurrentStreak, formatDateISO, formatStreak } from '../utils/streak';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const today = useMemo(() => new Date(), []);
  const todayISO = useMemo(() => formatDateISO(today), [today]);

  const datesWithEntry = useMemo(() => getMockEntryDates(today), [today]);
  const hasEntryToday = datesWithEntry.has(todayISO);
  const currentStreak = useMemo(() => calculateCurrentStreak(datesWithEntry, today), [datesWithEntry, today]);

  const [entryText, setEntryText] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const isDone = hasEntryToday || confirmed;
  const canSubmit = entryText.trim().length > 0;

  const mascotMessage = isDone ? 'Você já registrou hoje. Até amanhã!' : 'Oi! Como foi o seu dia hoje?';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: neutral[3] }} edges={['top', 'bottom']}>
      <AppHeader onCalendarPress={() => navigation.navigate('Calendar')} />

      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps="handled">
          <YStack flex={1} padding="$4">
            <YStack alignItems="center" gap="$1" marginBottom={12}>
              <H1 fontFamily="$heading" size="$5">
                Diário
              </H1>
              <Heading fontFamily="$heading" size="$2" color="$color10">
                {formatStreak(currentStreak)}
              </Heading>
            </YStack>
            <YStack flex={1} minHeight={0} alignItems="center">
              <YStack flexGrow={2} />
              <MascotePixel size={256} />
              <YStack flexGrow={1} />
            </YStack>
            <TextArea
              value={entryText}
              onChangeText={setEntryText}
              disabled={isDone}
              placeholder={mascotMessage}
              placeholderTextColor="$color9"
              fontFamily="$body"
              fontSize="$5"
              alignSelf="center"
              width="100%"
              maxWidth={500}
              minHeight={100}
              marginTop={5}
              marginBottom={12}
              borderRadius={10}
              borderWidth={2}
              borderColor="$borderColor"
              backgroundColor="$background"
              padding="$3"
            />

            <YStack gap="$3">
              <Button
                size="$5"
                borderRadius={10}
                borderWidth={2}
                borderColor="$borderColor"
                backgroundColor={isDone ? '$color5' : accent.base}
                pressStyle={{ backgroundColor: accent.press }}
                disabled={isDone || !canSubmit}
                opacity={isDone ? 0.6 : canSubmit ? 1 : 0.5}
                onPress={() => setConfirmed(true)}
              >
                {isDone ? 'Você já escreveu hoje' : 'Registrar hoje'}
              </Button>

              <Button size="$2" chromeless alignSelf="center" onPress={() => navigation.navigate('ConfigureMascot')}>
                Personalizar mascote
              </Button>
            </YStack>
          </YStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
