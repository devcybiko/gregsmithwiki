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

5. Multiple Databases
· **--****defaults****-group-suffix=**str

  

Read not only the usual option groups, but also groups with the

usual names and a suffix of str. For example, **mysql** normally reads

the [client] and [mysql] groups. If the

**--****defaults****-group-suffix=_other** option is given, **mysql** also reads

the [client_other] and [mysql_other] groups.
## Encrypted Per User Passwords

The  [**mysql_config_editor**](https://dev.mysql.com/doc/refman/5.6/en/mysql-config-editor.html "4.6.6 mysql_config_editor — MySQL Configuration Utility")  utility enables you to store authentication credentials in an obfuscated login path file named  `.mylogin.cnf`. The file location is the  `%APPDATA%\MySQL`  directory on Windows and the current user's home directory on non-Windows systems. The file can be read later by MySQL client programs to obtain authentication credentials for connecting to MySQL Server.

[https://dev.mysql.com/doc/refman/5.6/en/mysql-config-editor.html](https://dev.mysql.com/doc/refman/5.6/en/mysql-config-editor.html)

## Retrieving Username/Password

[https://blog.runcloud.io/2018/12/12/retrieve-your-root-password-and-other-invaluable-mysql-commands.html](https://blog.runcloud.io/2018/12/12/retrieve-your-root-password-and-other-invaluable-mysql-commands.html)

## **Other Basic MySQL Commands**

From [https://blog.runcloud.io/2018/12/12/retrieve-your-root-password-and-other-invaluable-mysql-commands.html](https://blog.runcloud.io/2018/12/12/retrieve-your-root-password-and-other-invaluable-mysql-commands.html)

Even though you can run some basic MySQL commands in the RunCloud control panel, it would not hurt to know how to do the same tasks in command line. Below are some of the basic commands that should get you going. When you run the commands below, replace the database name of your choice at the _DatabaseNameHere_.  

To show the available databases.  
**_SHOW DATABASES;_**  
Creating a database.  
**_CREATE DATABASE DatabaseNameHere;_**  
Delete a database. You need a ‘_drop_’ privilege (or root user) to drop a database and the database must not be used (open for reading or writing by any user) at the particular time. Be careful when running this command as it will not prompt for confirmation and it will drop all the tables inside the database.  
**_DROP DATABASE DatabaseNameHere;_**  
To use or operate on a particular database. The MySQL prompt will change to reflect the database name that you have specified.  
**_USE_ _DatabaseNameHere;_**  
To find out what database you are currently operating in, run the following command.  
**_SELECT database();_**  
To create a MySQL account. Change the _UsernameHere_ and _PasswordHere_ according to you preferences.  
**_CREATE USER ‘UsernameHere’@’localhost’ IDENTIFIED BY ‘PasswordHere’;_**  
To grant the user privileges. (This user will only be able to connect only from the local host)  
**_GRANT ALL PRIVILEGES ON *.* TO ‘UsernameHere’@’localhost’_**  
**_-> WITH GRANT OPTION;_**  
Well, these are some of the basic commands that you can run using the command line. The same commands above can also be done using the RunCloud control panel. If you are new to administering a MySQL server using command line, getting used to these commands is a good start!
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExOTE4NDcxNTAsMTg0MDg3ODY1MSwtMT
c5ODM1MjczNiwtMTI1MzI5OTc4XX0=
-->