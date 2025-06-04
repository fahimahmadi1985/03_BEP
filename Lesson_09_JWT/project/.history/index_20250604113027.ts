import express from 'express';


// create the server app
const app = express();

// middleware
app.use(express.json()); // extract the json data from the body of request


// route
