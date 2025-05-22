import express from 'express';

const names = ["Mary", "Ann"]

const app = express();
app.use(express.urlencoded({ extended: true }))

// curl localhost:3000/api/names
app.get('/api/names', (req, res) => {
    res.send(names);
});

// curl localhost:3000/api/names -X POST --data "name=Lisa"
app.post('/api/names', (req, res) => {
    const name = req.body.name
    names.push(name)

    res.send(names);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});