export function getTimeFromNow(createdAt: string) {
  const createdAtDate = new Date(createdAt);
  const now = new Date();

  const diff = now.getTime() - createdAtDate.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) {
    return `Hoje`;
  }

  if (days === 1) {
    return `Há ${days} dia`;
  }

  if (days > 1) {
    return `Há ${days} dias`;
  }

  return "";
}
