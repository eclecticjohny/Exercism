// export function isArmstrongNumber(input: number): boolean {
//   const digits = input.toString().split("");

//   let sum = 0;
//   for (const digit of digits) {
//     sum += Math.pow(Number(digit), digits.length);
//   }

//   return sum === input;
// }

export function isArmstrongNumber(input: number): boolean {
  const digits = input.toString().split("");
  const sum = digits.reduce(
    (acc, curr) => acc + Math.pow(Number(curr), digits.length),
    0
  );
  return sum === input;
}
