import { formatDateISO } from '../utils/streak';

export function getMockEntryDates(today: Date): Set<string> {
  const dates = new Set<string>();

  for (let daysAgo = 1; daysAgo <= 4; daysAgo += 1) {
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    dates.add(formatDateISO(date));
  }

  return dates;
}
