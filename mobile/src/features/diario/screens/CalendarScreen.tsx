import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo } from 'react';
import { Heading, YStack } from 'tamagui';
import { SafeAreaView } from 'react-native-safe-area-context';

import type { RootStackParamList } from '../../../navigation/AppNavigator';
import { neutral } from '../../../theme/colors';
import EntryCalendar from '../components/EntryCalendar';
import { getMockEntryDates } from '../data/mockEntries';
import { calculateCurrentStreak, formatStreak } from '../utils/streak';

type Props = NativeStackScreenProps<RootStackParamList, 'Calendar'>;

export default function CalendarScreen(_props: Props) {
  const today = useMemo(() => new Date(), []);

  const datesWithEntry = useMemo(() => getMockEntryDates(today), [today]);
  const currentStreak = useMemo(() => calculateCurrentStreak(datesWithEntry, today), [datesWithEntry, today]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: neutral[3] }} edges={['bottom']}>
      <YStack flex={1} padding="$4" gap="$4">
        <Heading fontFamily="$heading" size="$2" color="$color10" textAlign="center">
          {formatStreak(currentStreak)}
        </Heading>

        <EntryCalendar datesWithEntry={datesWithEntry} today={today} />
      </YStack>
    </SafeAreaView>
  );
}
