# SQL Cheat Sheet

$(toc)

## Database Operations
- CREATE DATABASE [IF NOT EXISTS] classicmodels;
- SHOW DATABASES;
- USE database_name;
- DROP DATABASE [IF EXISTS] database_name;

- CREATE DATABASE IF NOT EXISTS tempdb;
- SHOW DATABASES;
- DROP DATABASE IF EXISTS temp_database;

## Table Operations

```
CREATE TABLE [IF NOT EXISTS] table_name(
   column_1_definition,
   column_2_definition,
   ...,
   table_constraints
) ENGINE=storage_engine;

DROP TABLE [IF EXISTS] table_name;

```
### Column Definition Examples
```
<name> <datatype(size)> <attributes>
```
|name| type | attributes |
|------|-------|---------|
|task_id | INT  |AUTO_INCREMENT  PRIMARY KEY|
|title | VARCHAR(255) | NOT NULL |
|start_date | DATE |
|due_date | DATE| 
|status | TINYINT | NOT NULL|
|priority | TINYINT | NOT NULL |
|description | TEXT |
|created_at | TIMESTAMP | DEFAULT  CURRENT_TIMESTAMP |

### Create Table Example
Notes:
1. use lowercase table and column names
2. (databases are inconsistent across platforms regarding upper/lower case sensitivity)
3. use the name 'id' for your primary key
4. use the name \<tablename>_id for foreign keys
5. use '_' to separate words in table and column names
6. make all tables plural - using the letter 's'
7. (for example 'persons' not 'people')
```
CREATE TABLE persons (
    id int,
    last_name varchar(255),
    first_name varchar(255),
    address varchar(255),
    city varchar(255),
    state varchar(2),
    zip varchar(10)
);
```

## SELECT

```
SELECT 
    select_list
FROM
    table_1
[INNER | LEFT |RIGHT] JOIN table_2 ON conditions
WHERE
    conditions
GROUP BY column_1
HAVING group_conditions
ORDER BY column_1
LIMIT offset, length;

SELECT 
    lastName, 
    firstName, 
    jobTitle, 
    officeCode
FROM
    employees
WHERE
    jobtitle = 'Sales Rep' OR 
    officeCode = 1
ORDER BY 
    officeCode , 
    jobTitle;
```

## WHERE Clause

<table><thead><tr><th>Operator</th><th>Description</th></tr></thead><thead><tr><td>=</td><td>Equal to. You can use it with almost any data types.</td></tr><tr><td>&lt;&gt; or !=</td><td>Not equal to</td></tr><tr><td>&lt;</td><td>Less than. You typically use it with numeric and date/time data types.</td></tr><tr><td>&gt;</td><td>Greater than.</td></tr><tr><td>&lt;=</td><td>Less than or equal to</td></tr><tr><td>&gt;=</td><td>Greater than or equal to</td></tr></thead></table>

## INSERT
```
INSERT INTO table(c1,c2,...)
VALUES (v1,v2,...);
```

```
INSERT INTO table(c1,c2,...)
VALUES 
   (v11,v12,...),
   (v21,v22,...),
    ...
   (vnn,vn2,...);
```

## UPDATE

```
UPDATE [LOW_PRIORITY] [IGNORE] table_name 
SET 
    column_name1 = expr1,
    column_name2 = expr2,
    ...
[WHERE
    condition];
```
## Datatypes

- BIT
- BOOLEAN
- CHAR
- DATE
- DATETIME
- DECIMAL
- ENUM
- INT
- JSON
- TIME
- TIMESTAMP
- VARCHAR

## DELETE

```
DELETE FROM table_name
WHERE condition;
```

## References
[MySQL Tutorial](http://www.mysqltutorial.org)
[Order of Operations](https://www.w3processing.com/index.php?subMenuLoad=SQL/Data/WherePrecedence.php)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTk0OTQ4MDg0MywtMTA3MjQ0Mzc0MCwxOT
YzODk2NTY5XX0=
-->