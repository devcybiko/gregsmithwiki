# mySQL Cheat Sheet

$(toc)

## Export Entire DB
`mysqldump -u username -p dbname > dbexport.sql`

## Import Entire DB
`mysql -u username -p dbname < dbexport.sql`

## Exporting a Single Table
  
`mysqldump -p  ––user=username  dbname  tableName  >  tableName.sql`

## Importing a Single Table  

`mysql -u  username  -p -D  dbname  <  tableName.sql`

## Running a Script

## Running a Script without Passwords


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExOTg0NDM1NTAsLTEyNTMyOTk3OF19
-->