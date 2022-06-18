const LOWER_ALPHA = "abcdefghijklmnopqrstuvwxyz";

export function isPangram(sentence: string): boolean {
  return LOWER_ALPHA.split("").every((letter) =>
    sentence.toLowerCase().includes(letter)
  );
}
