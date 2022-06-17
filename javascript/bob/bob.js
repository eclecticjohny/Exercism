//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (message.trim() === "") {
    return "Fine. Be that way!";
  }

  if (message.endsWith("?") && message.toUpperCase() === message) {
    return "Whoa, chill out!";
  }

  if (message.endsWith("?")) {
    return "Sure.";
  }

  if (message.toUpperCase() === message) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
};
