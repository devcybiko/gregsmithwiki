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
```
if (user_choice ==  "r"  and computer_choice ==  "p"):
	print("You chose rock. The computer chose paper.")
	print("Sorry. You lose.")
elif (user_choice ==  "r"  and computer_choice ==  "s"):
	print("You chose rock. The computer chose scissors.")
	print("Yay! You won.")
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
```python
shopping = "y"
while shopping == "y":
	shopping = input("still shopping (y/n)")
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQ0NjY0NzAzNl19
-->