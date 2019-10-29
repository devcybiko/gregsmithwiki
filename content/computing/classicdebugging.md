# Classic Debugging Tips

1. Computers don't lie.
	1. If it says something's broken - it's broken
2. If you keep getting the same error despite the fact that you made a change, make sure you're editing the same file
	1. Make sure you saved the last file you editted
	2. If possible, use Auto Save
3. Print out values
4. Print out data types of values
5. Insert a debug line at the start and end of a function
6. Insert an obviously wrong line of code - maybe we're not even getting here.
7. Browsers
	1. Always run with the Debugger and with Network/Disable-Caching
8. Make sure the HTML ids match the JQuery ID
9. Give the computer what it wants
	8. File not found? Give it the file.
	9. NaN? - Find out what value is not a number and give it a number.
	10. Division by zero? - find out what variable is zero and give it a value.
10. If something suddenly stops working - what changed?
	1. Always look at the acute errors 
11. Stay focused - fix one thing at a time.
13. If the 'cycle time' between a change and seeing it on-screen is really long, Consider breaking the problem out into a smaller sample piece of code and debugging that instead.
14. If you keep getting the same errror despite the fact that you made a change - make sure you saved the file.
15. If you keep getting the same errror despite the fact that you made a change - make sure you edited the right file - in the right folder.
16. FOr code that is taking a long time to run, consider returning a static value at the top of the function that is slow during the testing.
17. Challenge your Assumptions
	1. Are you sure the value you're passing was received?
	19. Are you in the right folder?
	20. Did you use the right URL?
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQ0MTQ4MjM3MCw1ODE4MDcwMTQsODM4OD
Y0MDg5LDE1MjQ4MjI5OTcsOTE2NTY0NzAxLDIxNDEwMjkyMjIs
LTkwMTMxMTc2MCwxNDk1NTE4MjcxLC0xNDQ3MDIwNDE1LDE4MD
U2MTYzNThdfQ==
-->
