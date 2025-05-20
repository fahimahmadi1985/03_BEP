# BEP - 03

**PREVIOUSLY**
- Express DELETE, PUT and PATCH endpoints
- Postman

**TODAY**
- Express Middleware

## Express Middleware

- You have already used a lot of middleware!

> Express is a routing and middleware web framework that has minimal
> functionality of its own: An Express application is essentially a
> series of middleware function calls.
>
> http://expressjs.com/en/guide/using-middleware.html#using-middleware

- _Technically_ all of our endpoints have been middleware
    - `app.get("/posts", (req,res) => res.send(guestbook))`
    - Here the anonymous function is technically a middleware

- However in practice when you see "middleware" it usually means these
    - `app.use(express.json())`
    - `app.use(something)`
    - Here the "something" is a middleware

- In Express each request goes through middlewares until one stops it

> Middleware functions can perform the following tasks:
> - Execute any code.
> - Make changes to the request and the response objects.
> - End the request-response cycle.
> - Call the next middleware function in the stack.
>
> http://expressjs.com/en/guide/using-middleware.html#using-middleware

- Middleware functions get three arguments: request, response and `next`
    - The `request` represents the HTTP Request being processed
    - The `response` represents the HTTP Response that will be sent
    - The `next` function will call the next middleware in the chain

