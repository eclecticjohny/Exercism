// Package weather is the package weather.
package weather

// CurrentCondition is the current weather condition.
var CurrentCondition string

// CurrentLocation is the current location for the forecast.
var CurrentLocation string

// Forecast is a func to get the forecast for the current location.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
