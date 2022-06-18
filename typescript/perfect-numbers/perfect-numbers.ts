// function getFactors(number: number): number[] {
//   return Array.from(Array(number + 1), (_, i) => i).filter(
//     (i) => number % i === 0
//   );
// }

// function* numberFactorGenerator(number: number): Generator<number> {
//   let i = 0;
//   while (i <= number) {
//     if (number % i === 0) {
//       yield i;
//     }
//     i++;
//   }
// }

function factorialize(num: number): number[] {
  let fac: number[] = [],
    i = 1,
    ind = 0;

  while (i <= Math.floor(Math.sqrt(num))) {
    //inserting new elements in the middle using splice
    if (num % i === 0) {
      fac.splice(ind, 0, i);
      if (i !== num / i) {
        fac.splice(-ind, 0, num / i);
      }
      ind++;
    }
    i++;
  }

  //swapping first and last elements
  let temp = fac[fac.length - 1];
  fac[fac.length - 1] = fac[0];
  fac[0] = temp;

  // nice sorted array of factors
  return fac;
}

enum AliquotSum {
  Perfect = "perfect",
  Abundant = "abundant",
  Deficient = "deficient",
}

export function classify(givenNumber: number): AliquotSum {
  if (givenNumber <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  const aliquotSum = factorialize(givenNumber)
    .slice(0, -1)
    .reduce((acc, curr) => acc + curr, 0);

  return aliquotSum === givenNumber
    ? AliquotSum.Perfect
    : aliquotSum > givenNumber
    ? AliquotSum.Abundant
    : AliquotSum.Deficient;
}
