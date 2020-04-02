# WordPress Getting Started

Wordpress is a sprawling and complex system. It is a context-management-system (CMS) and as such is not like a normal HTML/CSS/JS site. The .php code creates a framework for delivering content that is stored as Pages and Posts in the MySql database.
## File Structure
* homefolder (naiwe-staging in our case)
	* aMember/ - the aMember admin software
	* aMember_Zend/ - the aMember PHP Library
	* downloads/ - temp folder
	* evaluators/ - special admin tools for NAIWE 
	* global/ - global variables held here
	* wp-admin/ - the wordpress backend code
	* wp-content/ - user-modifyable files (including plugins, themes, and media files)
	* wp-include/ - the bulk of the wordpress software
	* bb-config.php - bulliten board config
	* evaluator.php - landing page for evaluator software
    * favicon.ico - the site's mini-icon for browser tabs
    * greglog.php - my personal logging file
	* index.php - landing page for wordpress (mainly it includes other files)
	* license.txt - the license for WP
	* phpinfo.php - simple WP page that lists all details of the server
	* robots.txt - a file that tells spiders (like Google) what they can scarf
	* wp-activate.php - code for emailing the activation key
	* wp-atom.php - code for the 'atom' rss feed
	* wp-blog-header.php - the main code for handling the blog header
	* wp-comments-post.php - code for handling wordpress comments
	* wp-commentsrss2.php - code for rss comments
	* wp-config.php - secondary config file (main config is in /global/lib/environments.php)
	* wp-cron.php - code that is run periodically by external crontab
	* wp-feed.php
	* wp-links-opml.php
	* `wp-load.php` - this is the main wordpress code to load the entire engine
	* wp-login.php - the user login prompt
	* wp-mail.php - mail
	* wp-pass.php - creates the password cookie
	* wp-rdf.php
	* wp-register.php
	* wp-rss.php - rss feed
	* wp-rss2.php - rss2 feed
	* wp-settings.php - reads the config and sets a bunch of constants
	* wp-signup.php
	* wp-trackback.php
	* xmlrpc.php
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTYzNzM0NDc2XX0=
-->