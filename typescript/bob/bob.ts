const LOWER_ALPHA = "abcdefghijklmnopqrstuvwxyz";

export function hey(message: string): string {
  const trimmedMessage = message.trim();

  if (trimmedMessage === "") {
    return "Fine. Be that way!";
  }

  if (
    trimmedMessage.endsWith("?") &&
    trimmedMessage.toUpperCase() === trimmedMessage &&
    trimmedMessage
      .split("")
      .some((char) => LOWER_ALPHA.includes(char.toLowerCase()))
  ) {
    return "Calm down, I know what I'm doing!";
  }

  if (trimmedMessage.endsWith("?")) {
    return "Sure.";
  }

  if (
    trimmedMessage.toUpperCase() === trimmedMessage &&
    trimmedMessage
      .split("")
      .some((char) => LOWER_ALPHA.includes(char.toLowerCase()))
  ) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
}
