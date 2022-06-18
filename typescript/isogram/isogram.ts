export function isIsogram(sentence: string): boolean {
  const lettersOnly = sentence.toLowerCase().replace(/[^a-z]/g, "");
  const lettersOnlySet = new Set(lettersOnly);
  return lettersOnlySet.size === lettersOnly.length;
}
