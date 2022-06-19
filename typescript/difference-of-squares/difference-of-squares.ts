export class Squares {
  count: number;

  constructor(count: number) {
    this.count = count;
  }

  get sumOfSquares(): number {
    const squaresit = (acc: number, num: number): number =>
      acc + Math.pow(num, 2);
    return this.numbersArray.reduce(squaresit, 0);
  }

  get squareOfSum(): number {
    const sumit = (acc: number, num: number): number => acc + num;
    const sum = this.numbersArray.reduce(sumit, 0);
    return Math.pow(sum, 2);
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }

  get numbersArray(): number[] {
    return Array.from({ length: this.count }, (_, i) => i + 1);
  }
}
