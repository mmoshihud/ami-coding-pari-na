# Ami Coding Pari Na

### Welcome to ami coding pari na.

# How to run

### Copy .env.example file contents to your .env file. To run project you need the required dependency to install dependency type pip install -r requirements.txt. This project usage MySQL for database connection. I give remote Mysql. You can also try local database. Check env file example database connection requirement.

# Admin Details

### username: moshihud , passsword: 123456

# How to test REST API

First you need postman. Now, to register first to get register send post request to localhost:8000/api/user like example "username:yourusername email:youremail@gmail.com password:yourpassword". To login and get token post request to localhost:8000/api/login send "username:yourusername password:yourpassword". Now for input value post request to localhost:8000/api/khoj-search then send data like "input_values:4,140,55,334,10009,400 search_value:400". Finally to log out use localhost:8000/api/logout and you must need "Authorization" header with toke like "Token 3b0642114e07ea478cc3af1863e96f1dcedd13cf". Go to Django admin you will get token. Must send toke to logout.
