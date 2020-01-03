# AWS - Email Setup

1. Set up Domain Name
2. Set up Hosted Zone
3. Add MX Record
	1. 10 inbound-smtp. us-east-1.amazonaws.com
4. Create SNS Topic
5.  Create SNS Subscription (email forward)
	1. Receive Confirmation email and Click Confirm
6. Create SES record for the domain
	7. Set Notifications to forward to new SNS Topic
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTk1NDU4ODY3NSwtMTg2NDM1MzQ1OSwtOD
ExNTA2MTk3LDIwNjI4ODE1MjhdfQ==
-->