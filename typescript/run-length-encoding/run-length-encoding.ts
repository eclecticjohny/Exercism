export function encode(input: string): string {
  return input.replace(
    /(.)\1+/g,
    (match: string, char: string) => `${match.length}${char}`
  );
}

export function decode(input: string): string {
  return input.replace(/(\d+)(.)/g, (_, count: number, char: string) =>
    char.repeat(count)
  );
}
