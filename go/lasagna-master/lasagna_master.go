package lasagna

func PreparationTime(layers []string, avgPrepTime int) int {
	if avgPrepTime <= 0 {
		avgPrepTime = 2
	}
	return len(layers) * avgPrepTime
}

func Quantities(layers []string) (int, float64) {
	noodles := 0
	sauce := 0.0
	for _, layer := range layers {
		if layer == "noodles" {
			noodles++
		} else if layer == "sauce" {
			sauce++
		}
	}
	return noodles * 50, float64(sauce) * 0.2
}

func AddSecretIngredient(friendList []string, ownList []string) {
	ownList[len(ownList)-1] = friendList[len(friendList)-1]
}

func ScaleRecipe(ingredients []float64, portions int) []float64 {
	var scaledRecipe []float64
	for _, ingredient := range ingredients {
		scaledRecipe = append(scaledRecipe, ingredient/2*float64(portions))
	}
	return scaledRecipe
}
