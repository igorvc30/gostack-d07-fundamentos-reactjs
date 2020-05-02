export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-br').format(new Date(date));
