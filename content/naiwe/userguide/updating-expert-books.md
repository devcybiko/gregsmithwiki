# Updating the Expert-Books Page

The Expert Books page is in the main WordPress Multi-User (WPMU) site. The page is heavily formatted using HTML and and can be very difficult to update. While it doesn't take a strong knowledge of HTML, it is easily corrupted by erroneous updates. Follow these steps to update this page.

## Create an Amazon Affiliate "Link"
* Go To the Amazon Affiliate website
  * https://affiliate-program.amazon.com/help/node/topic/G202102380
 * Login with the `director@naiwe.com` username and password
 * Click the `Product Linking -> Product Links` menu item
 * In the `Search for Any Product` box, find the `Search -> For` text field and enter either the ASIN (Amazon Serial Identy Number) or ISBN number and click `Go`
 * See the `Search Results` box below.
 * For the book/product you want, click the orange `Get Link` button.
 * See the `Build a link to a specific page from Amazon using the tools below.` box and accept the defaults.
 * In the `3. Get HTML Code For This Product Link` click the `Highlight HTML` button
 * Copy the HTML (using the Control-C (Windows) or Cmd-C (Mac) button)
 * (Leave this window open in case you need to return to it to copy the HTML again.)
## Edit the Expert-Books Page
* Go to https://naiwe.com
* Login as usual (using the `Member Login` button and an admin username/password)
* In the Dashboard Sidebar menu, click the `Pages` menu item
* Find the `— Books Published by NAIWE Experts` link and click it to edit the page
* Locate the entry you want to change
	* This can be challenging as HTML is very cryptic.
	* Each author is divided out with an `<h2>` tag.
	* Under each `<h2>` tag is a `<figure>` tag for each book.
	* Within the `<figure>` tag is an `<iframe>` tag. This is what you want to replace.
* Highlight the `<iframe>` ... `</iframe>` text
* Paste the HTML from the Affiliate Link step (use the Control-V (Windows) or Cmd-V (Mac) key)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg0MTU1NTg4NF19
-->