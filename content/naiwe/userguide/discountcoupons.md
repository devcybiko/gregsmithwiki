# NAIWE Webinar / Shopping Cart Setup

  

DOCS: [https://www.amember.com/docs/Shopping_Cart](https://www.amember.com/docs/Shopping_Cart)

  

1.  Login to amember admin
	-   [https://naiwe.com/amember/admin](http://naiwe.com/amember/admin)

2. Add new product
	-   Select Products -> Manage Products
	-   Click “New Product”
	-   Enter Title, Description, Comment, Category (Webinar)
	-   For Billing
	-   First Price ($30)
	-   First Period (Lifetime?)
	-   Shopping Cart
	-   Product image
	-   Click Save

3. Create Coupon
	-   Select Products->Coupons
	-   Click New Coupon Batch
	-   Coupon Useage Count: 10,000
	-   Discount: $20
	-   Advanced Settings
	-   Products: Webinar
	-   To use copuon: Select all “active” member items
	-   NOTE: Just “ACTIVE category “Webinar”? or ALL “active” items
	-   Click Save

4. Create Button
	-   Select Shopping Cart
	-   Click “Button/Link” at top of page
	-   Select Product (Choose the latest Webinar)
	-   Select type of element: Button
	-   Select action of element: Add & Checkout
	-   Title of Element: Register Now
	-   Select & Copy HTML Text

5. Update “Training Page”
	-   Go To NAIWE Website Dashboard
	-   Select “Tranings -> All items”
	-   Add/Edit new trianing Item
	-   Select “Text” editor (not “Visual”)
	-   Create your Training posting
	-   PASTE the BUTTON HTML From Step 4 onto page.
	-   Be sure to show the cost as follows: (note: The code NAIWEWEBINAR only works for active users)
```
<strong>Cost</strong>
NAIWE Members: $10 (use code NAIWEWEBINAR)
Non-Members: $30
```
-   Click “Publish” or “Update”
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIzMjg3MzYyNV19
-->