//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ALPHA_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";

export const isPangram = (sentence) =>
  sentence.length > 0 &&
  ALPHA_LOWERCASE.split("").every((letter) =>
    sentence.toLowerCase().includes(letter)
  );
