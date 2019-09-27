# Starting an App - Fry an Onion

When I was in college I had a girlfriend who cooked every night for dinner. She never knew what she was going to cook. But she would makes something out of whatever we had in the fridge.

To get started, she always peeled an onion and started frying it up. The aroma of frying onion got her creative culinary juices flowing and then she'd start pulling whatever food we had in the fridge out and make something awesome.

## The Software Equivalent of Frying an Onion

Whenver I start a new project, I hate to start from scratch. I usually think about the tech stack I want to use and start pulling them into my 'fridge'.

I also have a few 'template' or 'skeleton' projects lying around that are a leg-up or prototype for what I want to create. I can usually copy them into my workspace and get going. Just like my girlfriend never started with all the ingredients - just an onion, I also start with a skeleton which represents my 'onion.'

## On the Frontend
Almost always, when I'm creating a web page, I start with the Home page and a NavBar. Once I get that working, I start thinking about the pages I want on my site. This is the 'frying' part of my proverbial onion.

It's my preference to only put 2-3 tabs on the NavBar just to get it going. I don't worry about how beautiful it looks. I just want some content that works. Once I have the NavBar working and some pages working, I pick a page (often the simplest one) and start building it out. How far I build it out is largely due to time constraints and the customer's needs. If the customer needs full functionality, I'll build the whole page, if not, I'll get it working and then leave 'beautifying' it for later.

Sample Framework:
[https://github.com/devcybiko/NewProject](https://github.com/devcybiko/NewProject)
[https://github.com/devcybiko/NewBootStrapProject](https://github.com/devcybiko/NewBootStrapProject)

## On the Backend

On the backend, I start with a basic Node/Express server that serves up static pages. Once that is working, I start adding APIs one-by-one.

 [https://github.com/devcybiko/NewNodeProject](https://github.com/devcybiko/NewNodeProject)
 
 ## React Framework

I have yet to do any research on React "best practices", but here is my layout for a recent React project:

- Pupster
	- public (as supplied by `create-react-app`)
	- src
		- index.js
		- App.js
		- components
			- These are item-level components which should be functions (not Classes). As such they are 'presentation' components and have no state.
		- containers
			- These are container classes (not functions) that reference the components. These are where the state is kept.
		- pages
			- These are stateful class components - or not. They typically
		- presentation
		- utils
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MzMxNTE4MjYsNzE5NTg2NTQ2LC0xOT
EyOTY4ODgzLC0xNTE2MTI4NTg4LDE0NDAwODkwNTBdfQ==
-->