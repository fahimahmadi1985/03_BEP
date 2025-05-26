# Task 1

This exercise is about practicing Express middleware server.

Create a backend that with a single endpoint and various middleware. Create all the files you need and remember not to commit the `node_modules` folder. Use Postman to test the application and include some test data into the POST request body.

The server should have the following middleware defined *before the endpoints*:

1. A middleware that adds a field called `requestTime` to the request object with the current time in ISO-8601 format.

2. A separate middleware that logs the request method and the request path to the console.

3. A separate middleware that logs the value of the `content-type` header to the console, if one is found.

4. A middleware that responds with status code 403 if the request header `authorization` is not set.

5. A middleware that responds with status code 403 if the request header `authorization` is not set to the value "abc123".

6. A middleware that logs the value of `requestTime` from the request object to the console.

The server should have the following two endpoints:

1. GET `/api/hello` - respond with "Hi GET!"
2. POST `/api/hello` - respond with "Hi POST!"

The server should have the following middleware defined *after the endpoints*:

1. A middleware that logs "Request path not found" to the console and responds with an error message

