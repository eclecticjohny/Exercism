// export function count(str: string): Map<string, number> {
//   return str
//     .trim()
//     .split(/\s+/)
//     .map((s) => s.toLowerCase())
//     .reduce((map, word) => {
//       map.set(word, (map.get(word) || 0) + 1);
//       return map;
//     }, new Map<string, number>());
// }

export function count(phrase: string): Map<string, number> {
  const words = phrase.toLowerCase().match(/[\S]+/g) ?? [];
  let wordCounts = new Map<string, number>();

  for (let word of words) {
    wordCounts.set(word, (wordCounts.get(word) ?? 0) + 1);
  }

  return wordCounts;
}
