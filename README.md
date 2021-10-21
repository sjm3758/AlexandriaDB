 # AlexandriaDB
Library Management System

USING MYSQL LOCALLY:
1. Download MYSQL from their website (https://dev.mysql.com/downloads/windows/installer/8.0.html)
2. Unzip the folder and place it anywhere convenient
3. Open the unzipped folder and go into the bin folder
4. In the path bar, highlight and type "cmd", then enter to open cmd line inside the bin folder
5.Type "mysqld" to begin running MYSQL. Keep this window open, do not close
6. Repeat steps 3 and 4 to open a new cmd line window
7. Type "mysql" to establish connection
  - Reminder that you will only see local databases saved on your computer
8. Typing "SHOW SCHEMAS;" will list all databases to connect to
9. Typing "USE DATABASE_NAME;" will connect to the specified database
10. Inside the database, typing "SHOW TABLES;" will list all tables inside the database
11. Typing "USE TABLE_NAME;" will connect to the specified table
12. Most commands are similar to how one would normally interact with relational databases (ex. SELECT * FROM Test; INSERT INTO Test(Columns...) VALUES (...);)

USING MYSQL WITH GCP INSTANCE:
1. Follow the steps for connecting locally up to Step 5 where you get MYSQL running with the first window
2. Create the second cmd window from the bin folder, but this time type "mysql --host=INSTANCE_IP --user=USER --password=PASSWORD"
3. These values are subject to change, but currently: INSTANCE IP is 35.196.227.170. USER is root. There is currently no password to connect, in which case replace with "--password"
4. If connection succeeds, commands are the same as Steps 8 and on :)
