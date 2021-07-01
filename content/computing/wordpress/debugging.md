# WordPress Debugging

Wordpress WP Debugging

[https://www.hostinger.com/tutorials/debug-wordpress#7-Take-Advantage-of-Some-Debugging-Tools](https://www.hostinger.com/tutorials/debug-wordpress#7-Take-Advantage-of-Some-Debugging-Tools)

[https://stackify.com/php-debugging-guide/](https://stackify.com/php-debugging-guide/)

[https://roots.io/debugging-wordpress-filters-with-xdebug/](https://roots.io/debugging-wordpress-filters-with-xdebug/)

[https://wordpress.org/plugins/ultimate-debugbar/#installation](https://wordpress.org/plugins/ultimate-debugbar/#installation)

[https://premium.wpmudev.org/blog/debugging-wordpress-how-to-use-wp_debug/](https://premium.wpmudev.org/blog/debugging-wordpress-how-to-use-wp_debug/)

I'm looking at using XDebug, Debug Bar, and Query Monitor.

```
// Turn debugging on
define('WP_DEBUG', true);
// Tell WordPress to log everything to /wp-content/debug.log
define('WP_DEBUG_LOG', true);
// Turn off the display of error messages on your site
define('WP_DEBUG_DISPLAY', false);
// For good measure, you can also add the follow code, which will hide errors from being displayed on-screen
@ini_set('display_errors', 0);
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIzMTA3MjM0NF19
-->