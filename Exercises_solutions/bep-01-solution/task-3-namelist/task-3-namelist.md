# Task 3

This exercise is about practicing how to make a simple Express server.

Create a backend that takes in GET requests and responds data. Create all the files you need and remember not to commit the `node_modules` folder (use .gitignore).

Your backend needs to keep track of a list of names. The list should be an array of strings. You can keep the list of names in memory, no need to store them long term. You can also start with a bit of starting data to help you test your server.

The server should have the following routes:

- GET `/api/names` - Responds with the list of names

- POST `/api/names` - Adds a new name to the list provided by the client
