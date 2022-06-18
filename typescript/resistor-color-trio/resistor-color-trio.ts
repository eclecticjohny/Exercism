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

export function decodedResistorValue(resistor: string[]): string {
  const [firstColor, secondColor, thirdColor] = resistor;
  const firstIndex = COLORS.indexOf(firstColor);
  const secondIndex = COLORS.indexOf(secondColor);
  const thirdIndex = COLORS.indexOf(thirdColor);
  const zeros = Math.pow(10, thirdIndex);
  const baseValue = Number(`${firstIndex}${secondIndex}`);
  const ohmValue = baseValue * zeros;

  return ohmValue >= 1000 ? `${ohmValue / 1000} kiloohms` : `${ohmValue} ohms`;
}
