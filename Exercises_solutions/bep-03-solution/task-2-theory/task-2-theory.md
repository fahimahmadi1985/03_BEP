# Task 2

This exercise is about practicing theoretical knowledge.

Add your answers below the questions in this file. For example:

```
- Question 0: What command is used to create an empty file in the terminal?
- Answer: `touch filename.txt`
```

- Question 1: Can the order of middleware affect the processing of requests? If so, how?
- Answer: Yes. Middleware functions are executed in the order they are defined in the code. This can be used for controlling the flow of requests and responses, for example, a middleware can stop the processing of a request based on headers.

- Question 2: What is the purpose of the `next` function in Express middleware?
- Answer: The `next` function is used to pass control to the next middleware function in the stack. If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function.

- Question 3: What is the difference between `app.use()` and `app.get()`?
- Answer: `app.use()` is used to mount middleware functions at a specified path, while `app.get()` is used to handle GET requests at a specified path. `app.use()` is used for all HTTP methods, while `app.get()` is only for GET requests.

- Question 4: How can you access the method of an http request in an `app.use()` middleware?
- Answer: The method can be accessed using `req.method`. For example; `console.log(req.method)`.

- Question 5: Explain what the following code does in detail, including an example of code using it and the output it would produce:

    ```js
    function logopts(options) {
        if (!options) {
            options = { url: true, method: true, time: true, before: false, after: true, status: true }
        }
        if (!options.before && !options.after) {
            console.log("Warning: logopts set to not log anything due to configuration options")
        }
        return function (req, res, next) {
            let logstr = ""
            if (options.method) {
                logstr += req.method + " "
            }
            if (options.url) {
                logstr += req.url
            }
            if (options.time) {
                logstr += " " + new Date().toISOString()
            }

            if (options.before && logstr) {
                console.log(logstr)
            }

            next()

            if (options.status) {
                console.log(res.statusCode)
            }

            if (options.after && logstr) {
                console.log(logstr)
            }
        }
    }
    ```

- Answer: The code defines a middleware function that logs information about the request and response based on the provided options. The `logopts` function takes an options object as an argument, which can specify what information to log. The middleware function then logs the method, URL, and timestamp of the request, as well as the status code of the response. It also logs before and after the request processing based on the options.

    Example usage:

    ```js
    app.use(logopts({ url: true, method: true, after: true, status: true }))
    ```
