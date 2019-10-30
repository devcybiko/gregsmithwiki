# Python CheatSheet

$(toc)

## Variables
	* Use upper and lower case letters
	* Plus "_" and "$" if necessary
	* Assign values with '=' sign
	* can take any kind of value (string, number, etc)
`foo = 1`
`bar = "hiya"`

```python
# An f-string accepts all data types without conversion
print(f"Expert status: {expert_status}")
```

## Constants
	* numeric constants (digits, period, more digits) `3.14159`
	* string constants (double-quote, characters, ending double-quote) `"hello world"`

## Console I/O
`print("string...")`
`name = input("This is a prompt")`

## Conditionals

# Incorporate the random library

import random

  

# Print Title

print("Let's Play Rock Paper Scissors!")

  

# Specify the three options

options = ["r", "p", "s"]

  

# Computer Selection

computer_choice = random.choice(options)

  

# User Selection

user_choice =  input("Make your Choice: (r)ock, (p)aper, (s)cissors? ")

  

# Conditionals
```
if (user_choice ==  "r"  and computer_choice ==  "p"):
	print("You chose rock. The computer chose paper.")
	print("Sorry. You lose.")
elif (user_choice ==  "r"  and computer_choice ==  "s"):
	print("You chose rock. The computer chose scissors.")
	print("Yay! You won.")

print("A smashing tie!")

  

elif (user_choice ==  "p"  and computer_choice ==  "s"):

print("You chose paper. The computer chose scissors.")

print("Sorry. You lose.")

  

elif (user_choice ==  "p"  and computer_choice ==  "r"):

print("You chose paper. The computer chose rock.")

print("Yay! You won.")

  

elif (user_choice ==  "s"  and computer_choice ==  "p"):

print("You chose scissors. The computer chose paper.")

print("Yay! You won.")

  

elif (user_choice ==  "s"  and computer_choice ==  "s"):

print("You chose scissors. The computer chose scissors.")

print("A smashing tie!")

  

elif (user_choice ==  "s"  and computer_choice ==  "r"):

print("You chose scissors. The computer chose rock.")

print("Sorry. You lose.")

  

else:

print("I don't understand that!")

print("Next time, choose from 'r', 'p', or 's'.")
```
## Loops
* Remember: put a colon at the end of the line
* Remember: indentation indicates "scope"

### For Loop
```
for i in range(0, 100):
	print(i)
```

### While Loop
```
```

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjAyNDk0NjI0NV19
-->