export class Anagram {
  constructor(private input: string) {}

  public matches(...potentials: string[]): string[] {
    return potentials.filter(
      (potential) =>
        potential.toLowerCase() !== this.input.toLowerCase() &&
        this.lowerSplitSortJoin(potential) ===
          this.lowerSplitSortJoin(this.input)
    );
  }

  private lowerSplitSortJoin(input: string): string {
    return input.toLowerCase().split("").sort().join("");
  }
}
