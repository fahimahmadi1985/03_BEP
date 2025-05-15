# BEP 01

**TODAY**
- Backend concepts
- Creating a simple API
- Express GET and POST endpoints
- Making requests with curl

## Backend concepts

- When the fronted makes a request
    - This could be writing an address in your browser
    - This could be making a `fetch()` request

    - what makes up a request?
     - Method, URL, Headers, Body

- The backend is the server that takes in a request and sends back a response
- The word "server" can refer to
    - A computer that runs server software
    - A specific software that handles requests/connections
    - We will focus on on the software, specifically on HTTP servers

- Servers commonly don't have any graphical user interface
    - It starts and then sits there and waits for requests
    - Some servers start automatically and run in the background
    - Your computer actually has a bunch of services running all the time

    - Some servers you run just like any other programs
        - `node server.js`

- The role of a server is to handle things the frontend can't
    - User authentication
    - Data storage and processing

- we don't do these on the client side for obvious reasons

## ExpressJS

- Let's actually make a server and test it
- We will use a tool called Express to help us make a server
- Express makes it very easy to
    - 1. Listen for requests
    - 2. Process requests
    - 3. Respond to the request

```js
    import express from "express"

    // Initialize our server
    const app = express()

    // This function that will process ALL incoming requests
    app.use(function(req, res) {
        debugger;
        console.log("Ooh, a request")
        res.send("Hello! This is a response!")
    })

    // Start listening to requests on port 3000
    // This prevents our script from stopping
    // We can also have MANY servers running in different ports!
    app.listen(3000)
```
    
## Creating a simple API

    - Application Programming Interface
    - An interface in general is the relation between two things
    - **Thing A** exposes an interface for **Thing B** to use it

- There are **many** kinds of APIs
    - The browser exposes an API so that JavaScript can access webcams
    - The operating system exposes an API so that programs can read files
    - The `jsonplaceholder.typicode.com` exposes an API for requesting data

- In general, APIs expose some kind of access to an otherwise closed program
    - The browser **could** allow JS to open infinite `alert("Boo!")` boxes
    - The operating system **could** allow any program to overwrite any memory
    - jsonplaceholder.typicode.com **could** allow anyone to write any data

    - But those are really bad ideas
    - APIs are carefully planned:
        - Who can do what?
        - What functionality is limited?
        - What can go wrong?
        - How can this be abused?

    - APIs often try to follow some kind of *system*
    - We don't want to learn a new system every time we use a new API

- Basically a collection of *endpoints* on a *server* that *clients* can *call*


## Wrap-up

- Server programs start up and wait for requests
- Express helps us make a simple server program
- Debugging helps us make sense of variables and what our programs do
- Our server will listen for requests on a specific port
- Once a request comes in, our code needs to send back a response
- We can make requests from the terminal with `curl`
- We learned handling POST requests with urlencoded content