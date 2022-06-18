export function toRna(dnaStrand: string): string {
  return dnaStrand
    .split("")
    .map((dnaChar) => toRnaChar(dnaChar))
    .join("");
}

function toRnaChar(char: string): string {
  switch (char) {
    case "C":
      return "G";
    case "G":
      return "C";
    case "A":
      return "U";
    case "T":
      return "A";
    default:
      throw new Error("Invalid input DNA.");
  }
}
