import express from 'express';


// create the server app
const app = express();

// middleware
app.use(express.json()); // extract the json data from the body of request


// route
app.post('/login', (req, res, next)=>{
    // extract data
    const {username, password} = req.body;
    
    // check data
    if(username === "john" && password === "john123!"){
        // valid user

        // generate a token
        res.send("welcome")
    }else{
        // invalid user
        res.send("Please try again!")
    }

});


const port = 5001;
app.listen(port, ()=>console.log("Server is up on port:", port));