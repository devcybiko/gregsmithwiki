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
7. Create SNS Rule for the domain

Steps for updating / adding new forwards
8. Add domain to SNS
9. Add domain to Forwarding Rule
10.Update Lambda with from/to email address
 
[https://aws.amazon.com/blogs/messaging-and-targeting/forward-incoming-email-to-an-external-destination/](https://aws.amazon.com/blogs/messaging-and-targeting/forward-incoming-email-to-an-external-destination/)
-   [http://www.daniloaz.com/en/use-gmail-with-your-own-domain-for-free-thanks-to-amazon-ses-lambda/](http://www.daniloaz.com/en/use-gmail-with-your-own-domain-for-free-thanks-to-amazon-ses-lambda/)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgwOTE2NDY2MiwtNjkzMDEyODY3LDEzMD
cxNTAzNjMsMTEzNDkyOTk0OCwxOTU0NTg4Njc1LC0xODY0MzUz
NDU5LC04MTE1MDYxOTcsMjA2Mjg4MTUyOF19
-->