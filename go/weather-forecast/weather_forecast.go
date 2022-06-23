// Package weather provides functionality to forecast weather conditions.
package weather

// CurrentCondition represents the current weather conditions.
var CurrentCondition string

// CurrentLocation represents the current location.
var CurrentLocation string

// Forecast takes a city and a condition and returns a string representing the current weather condition of a city.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
