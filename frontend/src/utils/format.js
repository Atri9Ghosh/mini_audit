export function formatTimestamp(isoString) {
  const d = new Date(isoString);
  return d.toLocaleString();
}
