package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "ten", "jack", "queen", "king":
		return 10
	default:
		return 0
	}
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	var moveToMake string
	dealerSum := ParseCard(dealerCard)
	playerSum := ParseCard(card1) + ParseCard(card2)

	switch {
	case playerSum == 22:
		moveToMake = "P"
	case playerSum == 21 && dealerSum >= 10:
		moveToMake = "S"
	case playerSum == 21 && dealerSum < 10:
		moveToMake = "W"
	case playerSum > 16 && playerSum < 21:
		moveToMake = "S"
	case playerSum > 11 && playerSum < 17 && dealerSum >= 7:
		moveToMake = "H"
	case playerSum > 11 && playerSum < 17 && dealerSum < 7:
		moveToMake = "S"
	case playerSum <= 11:
		moveToMake = "H"
	}

	return moveToMake
}
