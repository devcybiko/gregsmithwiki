# WPMU Table Details
(from [https://deliciousbrains.com/tour-wordpress-database/](https://deliciousbrains.com/tour-wordpress-database/))

$(toc)
## wp_posts

The posts table is arguably the most important table in the WordPress database. Its name sometimes throws people who believe it purely contains their blog posts. However, albeit badly named, it is an extremely powerful table that stores various types of content including posts, pages, menu items, media attachments and any custom post types that a site uses.

The table’s flexible content nature is provided by the ‘post_type’ column which denotes if the row is a post, page, attachment, nav_menu_item or another type. But this flexibility also makes it hard to discuss and describe. Essentially the table contains rows of content objects with different types, but for ease of reading, I will refer to the rows as “posts” throughout this article.

-   **ID**  – unique number assigned to each post.
-   **post_author**  – the user ID who created it. (Reference to the  [wp_users](https://deliciousbrains.com/tour-wordpress-database/#wp_users)  table.)
-   **post_date**  – time and date of creation.
-   **post_date_gmt**  – GMT time and date of creation. The GMT time and date is stored so there is no dependency on a site’s timezone in the future.
-   **post_content**  – holds all the content for the post, including HTML, shortcodes and other content.
-   **post_title**  – title of the post.
-   **post_excerpt**  – custom intro or short version of the content.
-   **post_status**  – status of the post, e.g. ‘draft’, ‘pending’, ‘private’, ‘publish’. Also a great WordPress  [news site](https://poststatus.com/).
-   **comment_status**  – if comments are allowed.
-   **ping_status**  – if the post allows  [ping and trackbacks](https://wordpress.org/support/article/introduction-to-blogging/#pingbacks).
-   **post_password**  – optional password used to view the post.
-   **post_name**  – URL friendly slug of the post title.
-   **to_ping**  – a list of URLs WordPress should send pingbacks to when updated.
-   **pinged**  – a list of URLs WordPress has sent pingbacks to when updated.
-   **post_modified**  – time and date of last modification.
-   **post_modified_gmt**  – GMT time and date of last modification.
-   **post_content_filtered**  – used by plugins to cache a version of post_content typically passed through the ‘the_content’ filter. Not used by WordPress core itself.
-   **post_parent**  – used to create a relationship between this post and another when this post is a revision, attachment or another type.
-   **guid**  – Global Unique Identifier, the permanent URL to the post, not the permalink version.
-   **menu_order**  – holds the display number for pages and other non-post types.
-   **post_type**  – the content type identifier.
-   **post_mime_type**  – only used for attachments, the MIME type of the uploaded file.
-   **comment_count**  – total number of comments, pingbacks and trackbacks.

## wp_postmeta

This table holds any extra information about individual posts. It is a vertical table using key/value pairs to store its data, a technique WordPress employs on a number of tables throughout the database allowing WordPress core, plugins and themes to store unlimited data.

-   **meta_id**  – unique number assigned to each row of the table.
-   **post_id**  – the ID of the post the data relates to. (Reference to the  [wp_posts](https://deliciousbrains.com/tour-wordpress-database/#wp_posts)  table.)
-   **meta_key**  – an identifying key for the piece of data.
-   **meta_value**  – the actual piece of data.

##  wp_comments

Any post that allows discussion can have comments posted to it. This table stores those comments and some specific data about them. Further information can be stored in  [wp_commentmeta](https://deliciousbrains.com/tour-wordpress-database/#wp_commentmeta).

-   **comment_ID**  – unique number assigned to each comment.
-   **comment_post_ID**  – ID of the post this comment relates to. (Reference to the  [wp_posts](https://deliciousbrains.com/tour-wordpress-database/#wp_posts)  table.)
-   **comment_author**  – name of the comment author.
-   **comment_author_email**  – Email of the comment author.
-   **comment_author_url**  – URL for the comment author.
-   **comment_author_IP**  – IP Address of the comment author.
-   **comment_date**  – time and date the comment was posted.
-   **comment_date_gmt**  – GMT time and date the comment was posted.
-   **comment_content**  – the actual comment text.
-   **comment_karma**  – unused by WordPress core, can be used by plugins to help manage comments.
-   **comment_approved**  – if the comment has been approved.
-   **comment_agent**  – where the comment was posted from, eg. browser, operating system etc.
-   **comment_type**  – type of comment: comment, pingback or trackback.
-   **comment_parent**  – refers to another comment when this comment is a reply.
-   **user_id**  – ID of the comment author if they are a registered user on the site. (Reference to the  [wp_users](https://deliciousbrains.com/tour-wordpress-database/#wp_users)  table.)

## wp_commentmeta

This table stores any further information related to a comment.

-   **meta_id**  – unique number assigned to each row of the table.
-   **comment_id**  – the ID of the post the data relates to. (Reference to the  [wp_comments](https://deliciousbrains.com/tour-wordpress-database/#wp_comments)  table.)
-   **meta_key**  – an identifying key for the piece of data.
-   **meta_value**  – the actual piece of data.

## wp_terms

Terms are items of a taxonomy used to classify objects. Taxonomy what? WordPress allows items like posts and custom post types to be classified in various ways. For example, when creating a post in WordPress, by default you can add a category and some tags to it. Both ‘Category’ and ‘Tag’ are examples of a  [taxonomy](https://wordpress.org/support/article/taxonomies/), basically a way to group things together.

To classify this post (how meta of me) I would give it a category of ‘Guide’ and tags of ‘database’ and ‘mysql’. The category and tags are terms that would be contained in this table.

-   **term_id**  – unique number assigned to each term.
-   **name**  – the name of the term.
-   **slug**  – the URL friendly slug of the name.
-   **term_group**  – ability for themes or plugins to group terms together to use aliases. Not populated by WordPress core itself.

## wp_termmeta

[WordPress 4.4](https://wordpress.org/support/wordpress-version/version-4-4/)  introduced a new table to store metadata about terms – wp_termmeta. Term meta can be accessed similar to post meta with helper functions  `add_term_meta`,  `get_term_meta`,  `update_term_meta`  and  `delete_term_meta`.

Term meta allows developers to store custom data about terms in a standard way. For example, you might want to attach an image against a post category to be displayed on the category archive page.

-   **meta_id**  – unique number assigned to each row of the table.
-   **term_id**  – the ID of the related term. (Reference to the  [wp_terms](https://deliciousbrains.com/tour-wordpress-database/#wp_terms)  table.)
-   **meta_key**  – an identifying key for the piece of data.
-   **meta_value**  – the actual piece of data.

#### wp_term_taxonomy

Following the wp_terms example above, the terms ‘Guide’, ‘database’ and ‘mysql’ that are stored in wp_terms don’t exist yet as a ‘Category’ and as ‘Tags’ unless they are given context. Each term is assigned a taxonomy using this table.

The structure of this table allows you to use the same term across different taxonomies. For example ‘Database’ could be used as a category for posts and as a term of a custom taxonomy for a custom post type (think portfolio_category for portfolio items). The term of Database would exist once in wp_terms, but there would be two rows in wp_term_taxonomy for each taxonomy.

-   **term_taxonomy_id**  – unique number assigned to each row of the table.
-   **term_id**  – the ID of the related term. (Reference to the  [wp_terms](https://deliciousbrains.com/tour-wordpress-database/#wp_terms)  table.)
-   **taxonomy**  – the slug of the taxonomy. This can be the  [built in taxonomies](http://codex.wordpress.org/Taxonomies#Default_Taxonomies)  or any taxonomy registered using  [register_taxonomy()](http://codex.wordpress.org/Function_Reference/register_taxonomy).
-   **description**  – description of the term in this taxonomy.
-   **parent**  – ID of a parent term. Used for hierarchical taxonomies like Categories.
-   **count**  – number of post objects assigned the term for this taxonomy.

## wp_term_relationships

So far we have seen how terms and their taxonomies are stored in the database, but have yet to see how WordPress stores the critical data when it comes to using taxonomies. The post exists in wp_posts and when we actually assign the category and tags through the WordPress dashboard it is the  [junction table](http://en.wikipedia.org/wiki/Junction_table)  that records that information. Each row defines a relationship between a post (object) in wp_posts and a term of a certain taxonomy in wp_term_taxonomy.

-   **object_id**  – the ID of the post object. (Reference to the  [wp_posts](https://deliciousbrains.com/tour-wordpress-database/#wp_posts)  table.)
-   **term_taxonomy_id**  – the ID of the term / taxonomy pair. (Reference to the  [wp_term_taxonomy](https://deliciousbrains.com/tour-wordpress-database/#wp_term_taxonomy)  table.)
-   **term_order**  – allow ordering of terms for an object, not fully used.

#### wp_users

WordPress’ user management is one of its strongest features and one that makes it great as an application framework. This table is the driving force behind it.

-   **ID**  – unique number assigned to each user.
-   **user_login**  – unique username for the user.
-   **user_pass**  – hash of the user’s password.
-   **user_nicename**  – display name for the user.
-   **user_email**  – email address of the user.
-   **user_url**  – URL of the user, e.g. website address.
-   **user_registered**  – time and date the user registered.
-   **user_activation_key**  – used for resetting passwords.
-   **user_status**  – was used in Multisite pre WordPress 3.0 to indicate a spam user.
-   **display_name**  – desired name to be used publicly in the site, can be user_login, user_nicename, first name or last name defined in wp_usermeta.

## wp_usermeta

This table stores any further information related to the users. You will see other user profile fields for a user in the dashboard that are stored here.

-   **umeta_id**  – unique number assigned to each row of the table.
-   **user_id**  – ID of the related user. (Reference to the  [wp_users](https://deliciousbrains.com/tour-wordpress-database/#wp_users)  table.)
-   **meta_key**  – an identifying key for the piece of data.
-   **meta_value**  – the actual piece of data.

## wp_options

The options table is the place where all of the site’s configuration is stored, including data about the theme, active plugins, widgets, and temporary cached data. It is typically where other plugins and themes store their settings.

The table is another example of a vertical key/value pair table to allow it to store all sorts of data for a variety of purposes.

-   **option_id**  – unique number assigned to each row of the table.
-   **option_name**  – an identifying key for the piece of data.
-   **option_value**  – the actual piece of data. The data is often  [serialized](https://deliciousbrains.com/wp-migrate-db-pro/doc/serialized-data/)  so must be handled carefully.
-   **autoload**  – controls if the option is automatically loaded by the function  [wp_load_alloptions()](http://codex.wordpress.org/Function_Reference/wp_load_alloptions)  (puts options into object cache on each page load).

Did you know that when performing migrations of databases using  [WP Migrate DB Pro](https://deliciousbrains.com/wp-migrate-db-pro/)  you can tell the plugin to preserve specific options in the target database using the  [‘wpmdb_preserved_options’](https://github.com/deliciousbrains/wp-migrate-db-pro-tweaks/blob/master/wp-migrate-db-pro-tweaks.php#L34)  filter?

## wp_links

During the rise of popularity of blogging, having a blogroll (links to other sites) on your site was very much in fashion. This table holds all those links for you.

Nowadays blogrolls are used less and less and as of WordPress 3.5 the administration of links was removed from the admin UI. The table remains in the database for backwards compatibility and you can use the old link manager UI using this  [plugin](https://wordpress.org/plugins/link-manager/).

-   **link_id**  – unique number assigned to each row of the table.
-   **link_url**  – URL of the link.
-   **link_name**  – name of the link.
-   **link_image**  – URL of an image related to the link.
-   **link_target**  – the target frame for the link. e.g. _blank, _top, _none.
-   **link_description**  – description of the link.
-   **link_visible**  – control if the link is public or private.
-   **link_owner**  – ID of user who created the link. (Reference to the  [wp_users](https://deliciousbrains.com/tour-wordpress-database/#wp_users)  table.)
-   **link_rating**  – add a rating between 0-10 for the link.
-   **link_updated**  – time and date of link update.
-   **link_rel**  – relationship of link.
-   **link_notes**  – notes about the link.
-   **link_rss**  – RSS address for the link.

Someone has produced a helpful entity relationship diagram to explain the relationships between all the tables and posted it on the  [WordPress codex](http://codex.wordpress.org/Database_Description#Database_Diagram). This was created at version 3.8 but the structure is still current:

![Diagram of the WordPress Database](https://cdn.deliciousbrains.com/content/uploads/2017/12/12112837/wordpress-database-tables-diagram.png)  

## WordPress Multisite Database Tour

When a WordPress site is  [converted to a Multisite install](http://codex.wordpress.org/Create_A_Network), a “network” of subsites is created. The existing site is converted to the first subsite in the network. The database classes the network itself as a site (wp_site), and each subsite as a blog (wp_blogs).

Certain tables are used only by a subsite, and a new set of tables are created every time a site is added to the network. Each set of tables is differentiated by the blog_id for the subsite used in the table prefix. e.g.  `wp_2_posts`. The following tables are subsite specific:

-   [wp_commentmeta](https://deliciousbrains.com/tour-wordpress-database/#wp_posts)
-   [wp_comments](https://deliciousbrains.com/tour-wordpress-database/#wp_comments)
-   [wp_links](https://deliciousbrains.com/tour-wordpress-database/#wp_links)
-   [wp_options](https://deliciousbrains.com/tour-wordpress-database/#wp_options)
-   [wp_postmeta](https://deliciousbrains.com/tour-wordpress-database/#wp_postmeta)
-   [wp_posts](https://deliciousbrains.com/tour-wordpress-database/#wp_posts)
-   [wp_term_relationships](https://deliciousbrains.com/tour-wordpress-database/#wp_term_relationships)
-   [wp_term_taxonomy](https://deliciousbrains.com/tour-wordpress-database/#wp_term_taxonomy)
-   [wp_terms](https://deliciousbrains.com/tour-wordpress-database/#wp_terms)

The  [wp_users](https://deliciousbrains.com/tour-wordpress-database/#wp_users)  and  [wp_usermeta](https://deliciousbrains.com/tour-wordpress-database/#wp_usermeta)  tables become global across the subsites in the network, and during the network installation a couple of extra columns are added to the wp_users table:

-   **spam**  – mark as a spam user.
-   **deleted**  – mark as a deleted user.

The following tables are created during the network installation to help manage the network:

-   [wp_site](https://deliciousbrains.com/tour-wordpress-database/#wp_site)
-   [wp_sitemeta](https://deliciousbrains.com/tour-wordpress-database/#wp_sitemeta)
-   [wp_blogs](https://deliciousbrains.com/tour-wordpress-database/#wp_blogs)
-   [wp_blogmeta](https://deliciousbrains.com/tour-wordpress-database/#wp_blogmeta)
-   [wp_blog_versions](https://deliciousbrains.com/tour-wordpress-database/#wp_blog_versions)
-   [wp_signups](https://deliciousbrains.com/tour-wordpress-database/#wp_signups)
-   [wp_registration_log](https://deliciousbrains.com/tour-wordpress-database/#wp_registration_log)

## wp_site

This table will contain the one network for the installation although the table is structured to allow multiple networks in one database. This has never been implemented in WordPress itself, but can be managed using a plugin like  [WP Multi Network](https://wordpress.org/plugins/wp-multi-network/)  or  [Networks for WordPress](https://wordpress.org/plugins/networks-for-wordpress/).

-   **id**  – unique number assigned to each site.
-   **domain**  – base domain of the site.
-   **path**  – path of the site.

## wp_sitemeta

This table is like the wp_options for the network. It stores all the network related configuration and information, as well as other data such as settings for network enabled plugins.

-   **meta_id**  – unique number assigned to each row of the table.
-   **site_id**  – ID of the related site. (Reference to the  [wp_site](https://deliciousbrains.com/tour-wordpress-database/#wp_site)  table.)
-   **meta_key**  – an identifying key for the piece of data.
-   **meta_value**  – the actual piece of data.

#### wp_blogs

All the subsites in the network are stored in this table.

-   **blog_id**  – unique number assigned to each blog (subsite).
-   **site_id**  – the site ID that the blog belongs to. (Reference to the  [wp_site](https://deliciousbrains.com/tour-wordpress-database/#wp_site)  table.)
-   **domain**  – base domain of the blog.
-   **path**  – path of the blog.
-   **registered**  – time and date when the blog was registered.
-   **last_updated**  – time and date when the blog was last updated.
-   **public**  – if the blog is publicly visible.
-   **archived**  – if the blog is archived.
-   **mature**  – if the blog is for a mature audience, ie. NSFW.
-   **spam**  – if the blog has been marked as spam.
-   **deleted**  – if the blog has been deleted.
-   **lang_id**  – language ID of the blog.

## wp_blogmeta

Introduced in  [WordPress 5.1](https://make.wordpress.org/core/2019/01/28/multisite-support-for-site-metadata-in-5-1/), wp_blogmeta is new database table to store metadata associated with sites. This means you don’t need to use the options table to store data about the site and have to use  `switch_to_blog()`  before accessing it.

-   **meta_id**  – unique number assigned to each row of the table
-   **blog_id**  – the blog ID that the meta belongs to. (Reference to the  [wp_blogs](https://deliciousbrains.com/tour-wordpress-database/#wp_blogs)  table.)
-   **meta_key**  – an identifying key for the piece of data.
-   **meta_value**  – the actual piece of data.

## wp_blog_versions

When you upgrade the version of WordPress your site is running there are sometimes database changes. Upgrading a Multisite install to a new WordPress version will make those changes to the global tables. However, the set of tables for the subsites in the network will also need to have the upgrade applied. This table records the database version of each blog in the network, so WordPress knows which blogs need the upgrade and updates it after it has been run.

-   **blog_id**  – the blog ID. (Reference to the  [wp_blogs](https://deliciousbrains.com/tour-wordpress-database/#wp_blogs)  table.)
-   **db_version**  – the current WordPress DB revision for the blogs tables.
-   **last_updated**  – the time and date of the last upgrade.

## wp_signups

This table stores data on blogs which have been signed up for but not activated when the network allows new sites to be registered. Once a site is activated the record is deleted and a record is created in wp_blogs.

-   **signup_id**  – unique number assigned to each row of the table.
-   **domain**  – base domain of the blog.
-   **path**  – path of the blog.
-   **title**  – name of the blog.
-   **user_login**  – username of the user registering the blog.
-   **user_email**  – email of the user.
-   **registered**  – time and date of registration.
-   **activated**  – if the blog has been activated.
-   **active**  – if the blog is active.
-   **activation_key**  – activation key used in emails to active the blog.
-   **meta**  – data about the signup.

## wp_registration_log

This table records the user who registers a new site once it has been activated.

-   **ID**  – unique number assigned to each row of the table.
-   **email**  – email address of the user.
-   **IP**  – IP Address of the user.
-   **blog_id**  – the blog ID. (Reference to the  [wp_blogs](https://deliciousbrains.com/tour-wordpress-database/#wp_blogs)  table.)
-   **date_registered**  – time and data the blog was registered.



<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEzNzExNTgwMywtMTU3Njc2NzgzNV19
-->