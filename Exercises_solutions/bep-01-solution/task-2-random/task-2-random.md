# Task 2

This exercise is about practicing how to make a simple Express server.

Create a backend that takes in GET requests and responds to them. Create all the files you need and remember not to commit the `node_modules` folder (use .gitignore).

The server should have the following routes:

- GET `/api/number` - Responds with a random number between 1 and 100

- GET `/api/array` - Responds with an array of random numbers between 1 and 100

- GET `/api/text` - Responds with a random text string - use your own creativity for what "random" means here 🙂

- GET `/api/user` - Responds with a random object with 4 properties:

    - `id`: a random number between 1 and 100
    - `username`:  a random username
    - `email`: random email address that includes the username
    - `created_at`: a date in the past in ISO-8601 format

Use realistic looking data for the user, but feel free to be creative!
