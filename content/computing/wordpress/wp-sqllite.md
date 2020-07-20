# WordPress plus SqlLite

## Commands
* mkdir demo
* cd demo
* wget https://wordpress.org/latest.zip
* unzip latest.zip
* cd wordpress/wp-content/plugins
* wget https://downloads.wordpress.org/plugin/sqlite-integration.1.7.zip
* unzip sqlite-integtration.1.7.zip
* cd sqlite-integration
* cp db.php ../..  # or should it be mv?
* cd ../../..
* cp wp-config-sample.php wp-config.php
* vi wp-config.php
```
define('AUTH_KEY', '...');

<!--stackedit_data:
eyJoaXN0b3J5IjpbMzkwNzQxODQ4LDM0NDI5ODQwMV19
-->