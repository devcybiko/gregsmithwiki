# WordPress plus SqlLite

## Commands
* mkdir demo
* cd demo
* wget https://wordpress.org/latest.zip
* unzip latest.zip
* cd wordpress/wp-content/plugins
* wget https://downloads.wordpress.org/plugin/sqlite-integration.1.7.zip
* unzip sqlite-integration.1.7.zip
* cd sqlite-integration
* cp db.php ../..  # or should it be mv?
* cd ../../..
* cp wp-config-sample.php wp-config.php
* vi wp-config.php
```
define('AUTH_KEY', '...');
etc...
https://api.wordpress.org/secret-key/1.1/salt
```

* cd .. # demo folder
* chown -R user:user wordpress/*
## in the browser
* http://localhost:80
* fill in the blanks
* login to the control panel
<!--stackedit_data:
eyJoaXN0b3J5IjpbOTM1MjY0OTgxLC00NTk1MDU5OTksODQ5Mj
MwODI1LDM0NDI5ODQwMV19
-->