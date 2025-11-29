export function computeDiff(oldText, newText) {
  const oldWords = oldText.split(/\s+/).filter(Boolean);
  const newWords = newText.split(/\s+/).filter(Boolean);

  const added = newWords.filter((w) => !oldWords.includes(w));
  const removed = oldWords.filter((w) => !newWords.includes(w));

  return {
    addedWords: Array.from(new Set(added)),
    removedWords: Array.from(new Set(removed)),
  };
}
