import express from 'express';


// create the server app
const app = express();

// middleware
app.use(express.json()); // extract the json data from the body of request


// route
app.post('/login', (req, res, next)=>{
    const {username, password} = req.body;
    console.log(username, password);
    res.send("hello")
});


const port = 5001;
app.listen(port, ()=>console.log("Server is up on port:", port));