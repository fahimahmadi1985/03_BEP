import express from 'express';

// Initialize our server
const app = express();

app.use(function(req,res){
    debugger;
    console.log('Request received');
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    res.send('Hello World from the server!');
})

app.listen(4000)