import express from 'express';

// These would be nicer in a separate file
function randomArray() {
    return [
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
    ];
}
const names = ['John', 'Doe', 'Jane', 'Doe', 'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];

const app = express();

// curl localhost:3000/api/number
app.get('/api/number', (req, res) => {
    res.send("Number is " + Math.floor(Math.random() * 100));
});

// curl localhost:3000/api/array
app.get('/api/array', (req, res) => {
    res.send(randomArray());
});

// curl localhost:3000/api/text
app.get('/api/text', (req, res) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const txt = randomArray().map((num) => alphabet[num % 26]).join("");
    res.send(txt);
});

// curl localhost:3000/api/user
app.get('/api/user', (req, res) => {
    const id = Math.floor(Math.random() * 100);
    const username = names[Math.floor(Math.random() * names.length)] + "_" + Math.floor(Math.random() * 99)
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const email = username.toLowerCase() + '@' + domain;

    const date = new Date();
    date.setFullYear(2024 - Math.ceil(Math.random() * 40));
    date.setMonth(0 - Math.ceil(Math.random() * 12));
    date.setDate(1 - Math.ceil(Math.random() * 30));

    const user = {
        id,
        username,
        email,
        created_at: date.toISOString(),
    };

    res.send(user);
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});