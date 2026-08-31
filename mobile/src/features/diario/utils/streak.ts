export function formatDateISO(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Conta a partir de hoje se hoje já tem entrada; senão parte de ontem, já que
// o dia de hoje só "quebra" o streak depois de encerrado (ver ADR-0002).
export function calculateCurrentStreak(datesWithEntry: ReadonlySet<string>, today: Date): number {
  const cursor = new Date(today);

  if (!datesWithEntry.has(formatDateISO(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  while (datesWithEntry.has(formatDateISO(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

export function formatStreak(days: number): string {
  if (days === 0) return 'Nenhum dia seguido ainda';
  return days === 1 ? '1 dia seguido' : `${days} dias seguidos`;
}
