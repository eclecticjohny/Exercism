//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSeconds) => {
  const planetSeconds = convertPlanet(planet);

  return Number((ageInSeconds / planetSeconds).toFixed(2));
};

const convertPlanet = (planet) => {
  const earth = 31557600;

  switch (planet) {
    case "earth":
      return earth;
    case "mercury":
      return earth * 0.2408467;
    case "venus":
      return earth * 0.61519726;
    case "mars":
      return earth * 1.8808158;
    case "jupiter":
      return earth * 11.862615;
    case "saturn":
      return earth * 29.447498;
    case "uranus":
      return earth * 84.016846;
    case "neptune":
      return earth * 164.79132;
    default:
      return "Invalid planet";
  }
};
