import express from 'express';

const app = express();

// 1. A middleware that adds a field called `requestTime` to the request object with the current time in ISO-8601 format.
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 2. A separate middleware that logs the request method and the request path to the console.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// 3. A separate middleware that logs the value of the `content-type` header to the console, if one is found.
app.use((req, res, next) => {
    if (req.headers['content-type']) {
        console.log(req.headers['content-type']);
    }
    next();
})

// 4. A middleware that responds with status code 403 if the request header `authorization` is not set.
app.use((req, res, next) => {
    if (!req.headers.authorization) {
        res.status(403).send('Forbidden');
    } else {
        next();
    }
})

// 5. A middleware that responds with status code 403 if the request header `authorization` is not set to the value "abc123".
app.use((req, res, next) => {
    if (req.headers.authorization !== 'abc123') {
        res.status(403).send('Forbidden');
    } else {
        next();
    }
});

// 6. A middleware that logs the value of `requestTime` from the request object to the console.
app.use((req, res, next) => {
    console.log(req.requestTime);
    next();
});

// The two endpoints:
app.get('/api/hello', (req, res) => {
    res.send('Hi GET!');
});

app.post('/api/hello', (req, res) => {
    res.send('Hi POST!');
});

// 1. A middleware that logs "Request path not found" to the console and responds with an error message
app.use((req, res, next) => {
    console.log('Request path not found');
    res.status(404).send('Not Found');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
