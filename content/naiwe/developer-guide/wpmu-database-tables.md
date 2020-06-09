# WPMU Database Tables


[https://deliciousbrains.com/wordpress-multisite-database-tour/](https://deliciousbrains.com/wordpress-multisite-database-tour/)

## The main WPMU tables
-   wp_users - the user table
-   wp_blogs - the master blog list
	-   blog_id(1) = [naiwe.com](http://naiwe.com)
	-   blog_id(41) = [news.naiwe.com](http://news.naiwe.com)
	-   blog_id(973) = agilewriters
-   wp_blog_versions
-   wp_network_log
-   wp_network_postmeta
-   wp_network_posts
-   wp_network_rebuildqueue
-   wp_network_term_relationships
-   wp_network_term_taxonomy
-   wp_network_terms
-   wp_options
-   wp_pro_sites
-   wp_pro_sites_daily_stats
-   wp_pro_sites_signup_stats
-   wp_registration_log
-   wp_signups
-   wp_site
-   wp_site_posts
-   wp_site_term_relationships
-   wp_site_terms
-   wp_sitecategories
-   wp_sitemeta
-   wp_term_counts
-   wp_usermeta
-   wp_users

## The Individual Member/Blog tables
**The `*` indicates a blog_id number**
-   wp_*_ak_twitter
-   wp_*_am_product_category
-   wp_*_categories
-   wp_*_commentmeta
-   wp_*_comments
-   wp_*_easycontactforms_acl
-   wp_*_easycontactforms_applicationsettings
-   wp_*_easycontactforms_contacttypes
-   wp_*_easycontactforms_customformentryfiles
-   wp_*_easycontactforms_customformentrystatistics
-   wp_*_easycontactforms_customformfields
-   wp_*_easycontactforms_customformfieldtypes
-   wp_*_easycontactforms_customforms
-   wp_*_easycontactforms_customforms_mailinglists
-   wp_*_easycontactforms_customformsentries
-   wp_*_easycontactforms_files
-   wp_*_easycontactforms_options
-   wp_*_easycontactforms_roles
-   wp_*_easycontactforms_sessions
-   wp_*_easycontactforms_users
-   wp_*_link2cat
-   wp_*_links
-   wp_*_lmtttmpts_all_failed_attempts
-   wp_*_lmtttmpts_blacklist
-   wp_*_lmtttmpts_failed_attempts
-   wp_*_lmtttmpts_whitelist
-   wp_*_login_security_solution_fail
-   wp_*_m_communications
-   wp_*_m_levelmeta
-   wp_*_m_member_payments
-   wp_*_m_membership_levels
-   wp_*_m_membership_relationships
-   wp_*_m_membership_rules
-   wp_*_m_ping_history
-   wp_*_m_pings
-   wp_*_m_subscription_transaction
-   wp_*_m_subscriptionmeta
-   wp_*_m_subscriptions
-   wp_*_m_subscriptions_levels
-   wp_*_m_urlgroups
-   wp_*_options
-   wp_*_post2cat
-   wp_*_postmeta
-   wp_*_posts - **Posts/Pages**
-   wp_*_redirection_404
-   wp_*_redirection_groups
-   wp_*_redirection_items
-   wp_*_redirection_logs
-   wp_*_redirection_modules
-   wp_*_term_relationships -
-   wp_*_term_taxonomy - hierarchy of categories (category, link_category, nav_menu, post_tag)
	-   term_taxonomy_id=serial number of the **term_taxonomy** table
	-   term_id=id of the term in the **_terms** table
-   wp_*_termmeta
-   wp_*_terms - **Post/Page categories**
-   wp_*_toolset_post_guid_id
-   wp_*_uam_accessgroup_to_object
-   wp_*_uam_accessgroups

## The bbPress (forums) Tables
-   wp_bb_forums
-   wp_bb_meta
-   wp_bb_posts
-   wp_bb_term_relationships
-   wp_bb_term_taxonomy
-   wp_bb_terms
-   wp_bb_topics

## The BuddyPress (members & search) Tables
-   wp_bp_activity
-   wp_bp_activity_meta
-   wp_bp_friends
-   wp_bp_groups
-   wp_bp_groups_groupmeta
-   wp_bp_groups_members
-   wp_bp_messages_messages
-   wp_bp_messages_meta
-   wp_bp_messages_notices
-   wp_bp_messages_recipients
-   wp_bp_notifications
-   wp_bp_notifications_meta
-   wp_bp_user_blogs
-   wp_bp_user_blogs_blogmeta
-   wp_bp_xprofile_data
-   wp_bp_xprofile_fields
-   wp_bp_xprofile_groups
-   wp_bp_xprofile_meta

## The Duplicator Pro pages (unknown plugin)
-   wp_duplicator_pro_entities
-   wp_duplicator_pro_packages

## The WordFence tables (malicious attacks plugin)
-   wp_wfBadLeechers
-   wp_wfBlockedCommentLog
-   wp_wfBlockedIPLog
-   wp_wfBlocks
-   wp_wfBlocks7
-   wp_wfBlocksAdv
-   wp_wfConfig
-   wp_wfCrawlers
-   wp_wfFileChanges
-   wp_wfFileMods
-   wp_wfHits
-   wp_wfHoover
-   wp_wfIssues
-   wp_wfKnownFileList
-   wp_wfLeechers
-   wp_wfLockedOut
-   wp_wfLocs
-   wp_wfLogins
-   wp_wfNet404s
-   wp_wfNotifications
-   wp_wfPendingIssues
-   wp_wfReverseCache
-   wp_wfSNIPCache
-   wp_wfScanners
-   wp_wfStatus
-   wp_wfThrottleLog
-   wp_wfVulnScanners
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTc3NDExNjE5M119
-->