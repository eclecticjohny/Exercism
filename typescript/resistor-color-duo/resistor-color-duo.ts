const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function decodedValue(colors: string[]): number {
  const [first, second] = colors;
  const firstIndex = COLORS.indexOf(first);
  const secondIndex = COLORS.indexOf(second);

  return Number(`${firstIndex}${secondIndex}`);
}
