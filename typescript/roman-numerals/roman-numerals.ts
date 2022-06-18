const romanMapping: { num: number; roman: string }[] = [
  { num: 1000, roman: "M" },
  { num: 900, roman: "CM" },
  { num: 500, roman: "D" },
  { num: 400, roman: "CD" },
  { num: 100, roman: "C" },
  { num: 90, roman: "XC" },
  { num: 50, roman: "L" },
  { num: 40, roman: "XL" },
  { num: 10, roman: "X" },
  { num: 9, roman: "IX" },
  { num: 5, roman: "V" },
  { num: 4, roman: "IV" },
  { num: 1, roman: "I" },
];

// export const toRoman = (inputNumber: number): string => {
//   return romanMapping.reduce<string>((res, { num, roman }) => {
//     while (inputNumber >= num) {
//       res += roman;
//       inputNumber -= num;
//     }
//     return res;
//   }, "");
// };

export const toRoman = (inputNumber: number): string => {
  let res = "";
  for (const { num, roman } of romanMapping) {
    while (inputNumber >= num) {
      res += roman;
      inputNumber -= num;
    }
  }

  return res;
};
