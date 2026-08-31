import { Calendar } from 'react-native-calendars';
import { useMedia, useTheme } from 'tamagui';

import { formatDateISO } from '../utils/streak';

type EntryCalendarProps = {
  datesWithEntry: ReadonlySet<string>;
  today: Date;
};

export default function EntryCalendar({ datesWithEntry, today }: EntryCalendarProps) {
  const theme = useTheme();
  const media = useMedia();
  const isNarrowScreen = media.xxs;

  const getColor = (token: keyof typeof theme) => String(theme[token]?.get());

  const markedDates = Object.fromEntries(
    Array.from(datesWithEntry).map((date) => [date, { marked: true, dotColor: getColor('green9') }])
  );

  return (
    <Calendar
      current={formatDateISO(today)}
      markedDates={markedDates}
      theme={{
        backgroundColor: getColor('background'),
        calendarBackground: getColor('background'),
        dayTextColor: getColor('color'),
        textDisabledColor: getColor('color6'),
        monthTextColor: getColor('color'),
        textSectionTitleColor: getColor('color10'),
        arrowColor: getColor('color'),
        todayTextColor: getColor('blue10'),
        selectedDayBackgroundColor: getColor('blue9'),
        dotColor: getColor('green9'),
        textMonthFontFamily: 'PressStart2P_400Regular',
        textDayFontFamily: 'VT323_400Regular',
        textDayHeaderFontFamily: 'VT323_400Regular',
        textMonthFontSize: isNarrowScreen ? 10 : 12,
        textDayFontSize: isNarrowScreen ? 15 : 18,
        textDayHeaderFontSize: isNarrowScreen ? 12 : 14,
      }}
    />
  );
}
