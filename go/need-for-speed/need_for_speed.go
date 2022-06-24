package speed

type Car struct {
	battery      int
	batteryDrain int
	speed        int
	distance     int
}

// NewCar creates a new remote controlled car with full battery and given specifications.
func NewCar(speed, batteryDrain int) Car {
	return Car{
		battery:      100,
		batteryDrain: batteryDrain,
		speed:        speed,
		distance:     0,
	}
}

type Track struct {
	distance int
}

// NewTrack created a new track
func NewTrack(distance int) Track {
	return Track{
		distance: distance,
	}
}

// Drive drives the car one time. If there is not enough battery to drive one more time,
// the car will not move.
func Drive(car Car) Car {
	var battery int
	var distance int

	if (car.battery - car.batteryDrain) > 0 {
		battery = car.battery - car.batteryDrain
		distance = car.distance + car.speed
	} else {
		battery = car.battery
		distance = car.distance
	}

	return Car{
		battery:      battery,
		batteryDrain: car.batteryDrain,
		speed:        car.speed,
		distance:     distance,
	}
}

// CanFinish checks if a car is able to finish a certain track.
func CanFinish(car Car, track Track) bool {
	return car.battery >= (track.distance/car.speed)*car.batteryDrain
}
