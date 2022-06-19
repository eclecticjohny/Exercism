export function transform(old: { [key: string]: string[] }): {
  [key: string]: number;
} {
  const newObj: { [key: string]: number } = {};
  for (const key in old) {
    for (const letter of old[key]) {
      newObj[letter.toLowerCase()] = Number(key);
    }
  }
  return newObj;
}
