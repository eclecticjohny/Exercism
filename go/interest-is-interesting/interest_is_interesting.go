package interest

// InterestRate returns the interest rate for the provided balance.
func InterestRate(balance float64) float32 {
	var interestRate float32
	switch {
	case balance < 0:
		interestRate = 3.213
	case 0 <= balance && balance < 1000:
		interestRate = 0.5
	case 1000 <= balance && balance < 5000:
		interestRate = 1.621
	case 5000 <= balance:
		interestRate = 2.475
	}
	return interestRate
}

// Interest calculates the interest for the provided balance.
func Interest(balance float64) float64 {
	rate := float64(InterestRate(balance)) / 100
	return balance * rate
}

// AnnualBalanceUpdate calculates the annual balance update, taking into account the interest rate.
func AnnualBalanceUpdate(balance float64) float64 {
	return balance + Interest(balance)
}

// YearsBeforeDesiredBalance calculates the minimum number of years required to reach the desired balance:
func YearsBeforeDesiredBalance(balance, targetBalance float64) int {
	var years int
	for balance < targetBalance {
		balance = AnnualBalanceUpdate(balance)
		years += 1
	}
	return years
}
