import express from 'express';

const app = express();

// curl localhost:3000/api/hello
app.get('/api/hello', (req, res) => {
    res.send("Hi there!");
});

// curl localhost:3000/api/bye
app.get('/api/bye', (req, res) => {
    res.send("Goodbye!");
});

// curl localhost:3000/api/counter
let counter = 0;
app.get('/api/counter', (req, res) => {
    counter++;
    res.send(`Counter is ${counter}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});