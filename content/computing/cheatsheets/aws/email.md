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

[https://aws.amazon.com/blogs/messaging-and-targeting/forward-incoming-email-to-an-external-destination/](https://aws.amazon.com/blogs/messaging-and-targeting/forward-incoming-email-to-an-external-destination/)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTMwNzE1MDM2MywxMTM0OTI5OTQ4LDE5NT
Q1ODg2NzUsLTE4NjQzNTM0NTksLTgxMTUwNjE5NywyMDYyODgx
NTI4XX0=
-->