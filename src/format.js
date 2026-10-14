export function formatAmount(cents) {
  if (!Number.isSafeInteger(cents) || cents < 0) throw new TypeError('Invalid amount');
  return (cents / 100).toFixed(2);
}
