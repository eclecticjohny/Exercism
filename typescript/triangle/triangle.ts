export class Triangle {
  sides: number[];

  constructor(...sides: number[]) {
    this.sides = sides.sort();
  }

  get isEquilateral(): boolean {
    // return (
    //   !this.isDegenerate &&
    //   this.sides.every((side) => side > 0 && side === this.sides[0])
    // );

    return !this.isDegenerate && new Set(this.sides).size === 1;
  }

  get isIsosceles(): boolean {
    // return (
    //   !this.isDegenerate &&
    //   this.sides.some(
    //     (side) => this.sides.filter((s) => s > 0 && s === side).length >= 2
    //   )
    // );

    return !this.isDegenerate && new Set(this.sides).size <= 2;
  }

  get isScalene(): boolean {
    // return (
    //   !this.isDegenerate &&
    //   this.sides.every(
    //     (side) => this.sides.filter((s) => s > 0 && s === side).length === 1
    //   )
    // );

    return !this.isDegenerate && new Set(this.sides).size === 3;
  }

  get isDegenerate(): boolean {
    const [a, b, c] = this.sides;
    return this.sides.some((side) => side === 0) || a + b <= c;
  }
}
