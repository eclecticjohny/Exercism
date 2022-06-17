//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";

export const hey = (message) => {
  const trimmedMessage = message.trim();

  if (trimmedMessage === "") {
    return "Fine. Be that way!";
  }

  if (
    trimmedMessage.endsWith("?") &&
    trimmedMessage.toUpperCase() === trimmedMessage &&
    trimmedMessage
      .split("")
      .some((char) => lowerAlpha.includes(char.toLowerCase()))
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
      .some((char) => lowerAlpha.includes(char.toLowerCase()))
  ) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
};
