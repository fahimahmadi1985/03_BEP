import express from 'express';
import jwt from 'jsonwebtoken';


// create the server app
const app = express();

// middleware
app.use(express.json()); // extract the json data from the body of request


// route
app.post('/login', (req, res)=>{
    // extract data
    const {username, password} = req.body;
    
    // check data
    if(username === "john" && password === "john123!"){
        // valid user

        // generate a token
        const token = jwt.sign(
            {username: "john", id: "1"}, // payload
            "thisismysecretkey",    // secret key for signature
            { expiresIn: '1d'}      // options like expiration of token
        );
        res.json({token: token, message: 'success'})
    }else{
        throw Error("Credentials are not match")
    }

});


const port = 5001;
app.listen(port, ()=>console.log("Server is up on port:", port));