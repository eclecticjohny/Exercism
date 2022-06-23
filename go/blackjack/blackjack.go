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
	case "ten":
		return 10
	case "jack":
		return 10
	case "queen":
		return 10
	case "king":
		return 10
	default:
		return 0
	}
}

func addPlayerCards(card1, card2 string) int {
	return ParseCard(card1) + ParseCard(card2)
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	var moveToMake string
	playerScore := addPlayerCards(card1, card2)

	switch {
	case playerScore == 22:
		moveToMake = "P"
	case playerScore == 21 && ParseCard(dealerCard) >= 10:
		moveToMake = "S"
	case playerScore == 21 && ParseCard(dealerCard) < 10:
		moveToMake = "W"
	case playerScore > 16 && playerScore < 21:
		moveToMake = "S"
	case playerScore > 11 && playerScore < 17 && ParseCard(dealerCard) >= 7:
		moveToMake = "H"
	case playerScore > 11 && playerScore < 17 && ParseCard(dealerCard) < 7:
		moveToMake = "S"
	case playerScore <= 11:
		moveToMake = "H"
	}

	return moveToMake
}
