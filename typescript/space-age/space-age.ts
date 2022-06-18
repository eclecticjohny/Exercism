export function age(planet: string, seconds: number): number {
  const convertedPlanet = convertPlanetToEarthYear(planet);

  return Number((seconds / convertedPlanet).toFixed(2));
}

function convertPlanetToEarthYear(planet: string): number {
  const earthYear = 31557600;

  switch (planet) {
    case "earth":
      return earthYear;
    case "mercury":
      return earthYear * 0.2408467;
    case "venus":
      return earthYear * 0.61519726;
    case "mars":
      return earthYear * 1.8808158;
    case "jupiter":
      return earthYear * 11.862615;
    case "saturn":
      return earthYear * 29.447498;
    case "uranus":
      return earthYear * 84.016846;
    case "neptune":
      return earthYear * 164.79132;
    default:
      return 0;
  }
}
