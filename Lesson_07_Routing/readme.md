# BEP - 07

**PREVIOUSLY**
- Express + EJS templates

**TODAY**
- Express Routing

## Express Routing

> Express is a routing and middleware web framework that has minimal
> functionality of its own: An Express application is essentially a
> series of middleware function calls.
>
> http://expressjs.com/en/guide/using-middleware.html#using-middleware

- We have covered middleware, now let's talk about routing

- So far, we've looked at how to handle requests with a resource path and method
    - `app.get('/posts', <func>)`
    - `app.put('/posts', <func>)`
    - `app.post('/posts', <func>)`
    - `app.delete('/posts', <func>)`

- Each of these functions could be 10+ lines of code
- A large application can have thousands of these
- We really don't want a file with tens of thousands of lines of code

- Routers in Express allow us to group endpoints into manageable sizes

> A router object is an isolated instance of middleware and routes.
> You can think of it as a “mini-application,” capable only of
> performing middleware and routing functions.
>
> http://expressjs.com/en/5x/api.html#router

- To simplify, we will create an API and test it with Postman only
