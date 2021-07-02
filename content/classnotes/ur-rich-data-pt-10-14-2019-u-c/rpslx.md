# Rock, Paper, Scissors, Lizard, Spock

**Rock, Paper, Scissors, Lizard,  [Spock](https://bigbangtheory.fandom.com/wiki/Spock "Spock")** is a game of chance that expands. It is first used to settle a dispute about what to watch on TV between [Sheldon](https://bigbangtheory.fandom.com/wiki/Sheldon "Sheldon") and [Raj](https://bigbangtheory.fandom.com/wiki/Raj "Raj") in "[The Lizard-Spock Expansion](https://bigbangtheory.fandom.com/wiki/The_Lizard-Spock_Expansion "The Lizard-Spock Expansion")".

It is mentioned again in "[The Rothman Disintegration](https://bigbangtheory.fandom.com/wiki/The_Rothman_Disintegration "The Rothman Disintegration")", where Sheldon explains the rules to  [Penny](https://bigbangtheory.fandom.com/wiki/Penny "Penny")  and  [Barry Kripke](https://bigbangtheory.fandom.com/wiki/Barry_Kripke "Barry Kripke").

The game was originally created by  [Sam Kass](https://bigbangtheory.fandom.com/wiki/Sam_Kass "Sam Kass")  with Karen Bryla. According to an interview with Kass, the series producers did not originally ask for permission to use the game, but Kass was officially referenced by Sheldon as the creator of the game during the "[The Rothman Disintegration](https://bigbangtheory.fandom.com/wiki/The_Rothman_Disintegration "The Rothman Disintegration")", after which he states, "Hail Sam Kass!" to which  [Leonard](https://bigbangtheory.fandom.com/wiki/Leonard "Leonard"),  [Howard](https://bigbangtheory.fandom.com/wiki/Howard "Howard"), Raj, and Sheldon all then chant "Hail!" while raising their hands.

## Rules:

The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The winner is the one who defeats the others. In a tie, the process is repeated until a winner is found.

Almost always, the boys will all pick  [Spock](https://bigbangtheory.fandom.com/wiki/Spock "Spock")  at the same time and tie over and over again.

* Scissors cuts Paper
* Paper covers Rock
* Rock crushes Lizard
* Lizard poisons Spock
* Spock smashes Scissors
* Scissors decapitates Lizard
* Lizard eats Paper
* Paper disproves Spock
* Spock vaporizes Rock
* (and as it always has) Rock crushes Scissors

## Greg's Solution

$(greg says="Always think in terms of generalities. Use arrays to simplify conditionals")
$(greg says="This solution requires only 2 lines of code to modify (see `options` and `winners` from RPS to RPSLX. Can you do it in one?")

```python
import random

wins=0
losses=0
ties=0
while  True:
	print("\nLet's Play Rock Paper Scissors Lizard Spock!")
	print(f"Wins : {wins}")
	print(f"Losses: {losses}")
	print(f"Ties : {ties}")
	print("\n")

	# options = ["r", "p", "s"]
	# winners = ["rs", "pr", "sp"]
	options = ["r", "p", "s", "l", "x"]
	winners = ["sp", "pr", "rl", "ls", "lx", "xs", "sl", "lp", "px", "sr", "rs"]

	computer_choice = random.choice(options)
	user_choice =  input(f"Make your Choice: {options} ")

	if (user_choice not  in options):
		print(f"ERROR: '{user_choice}' not in {options}\n")
		continue

	contest = user_choice + computer_choice

	if (contest in winners):
		print(f"You Win! {user_choice} beats {computer_choice}")
		wins = wins+1
	elif user_choice == computer_choice:
		print(f"You Tied :/ {user_choice} loses to {computer_choice}")
		ties = ties+1
	else:
		print(f"You Lost :( {user_choice} ties {computer_choice}")
		losses = losses +  1
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ3Mjg1MjU2OCwtMjEzNjAyMTAxLC0xOD
Q1MTg1MjkyLC05NjQ5MjI3ODcsLTEyNDA3MjY4NTFdfQ==
-->