# mySQL Cheat Sheet

## Export Entire DB
`mysqldump -u username -p dbname > dbexport.sql`

## Import Entire DB
`mysql -u username -p dbname < dbexport.sql`

## Exporting a Single Table
To export the table run the following command from the command line:  
`mysqldump -p  ––user=username  dbname_  _tableName_  >  _tableName.sql”_

This will export the tableName to the file tableName.sql.  
[NOTE: there should be no space between the two dashes, but I have to write it that way so that it display properly].

**Importing the Table  
**To import the table run the following command from the command line:  
mysql -u  _username_  -p -D  _dbname_  <  _tableName.sql_
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTM1ODMwOTk2M119
-->