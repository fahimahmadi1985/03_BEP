import express from 'express';


// create the server app
const app = express();

// middleware
app.use(express.json()); // extract the json data from the body of request


// route
app.post('/login', ()=>{

});


const port = 5000;
app.listen(port, console.log("Server is running on port:", port))