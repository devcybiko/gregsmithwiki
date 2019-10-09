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

From: [https://tecadmin.net/mysql-commands-without-password-prompt/](https://tecadmin.net/mysql-commands-without-password-prompt/)

1. Create a .my.cnf file in users home directory from which command or script to run.
` vi ~/.my.cnf`

and add the following content to this file. Change username and password as per your system configuation.

```
    [mysql]
    user = myuser
    password = secret

	[mysqldump]
	user = myuser
	password = secret
```
2. Now secure the newly created configuration file.

       `chmod 600 ~/.my.cnf`
    
3. All done. Lets test the setup. I have used the following commands to verify the above configurations. First commands will allow you login to mysql server without prompting password and second command will backup all your databases without password.
```
		mysql -h localhost -u myuser
		mysqldump -h localhost -u myuser --all-databases > alldb.sql
```
4. You can use commands in any shell script or schedule crontab for backup. You don’t need to specify MySQL user password in script or command.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTA5MzY3MjMyOSwtMTI1MzI5OTc4XX0=
-->