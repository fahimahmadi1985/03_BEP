import express from 'express';
import fs from 'fs';


// Initialize our server
const app = express();

// Middleware to parse JSON bodies
// This line makes express able to parse the body of (certain) POST requests
// We will learn more about this later
app.use(express.urlencoded({ extended: true }));

// curl localhost:4000;
app.get('/', (req, res) => {
    res.send('Hello World from the server!')
})

// curl localhost:4000/products;
app.get( "/products" , (req,res)=>{
    res.send('Hello World from the products endpoint!')
})

// this endpoint is the same as the previous one so it will never be reached
app.get( "/products" , (req,res)=>{
    res.send('again')
})

// curl localhost:4000/number;
app.get("/number",(req,res)=>{
    // Sending numbers is a bit tricky - for now, just send as a string
    res.send('555')
})

//======================================

// curl localhost:4000/reviews;
app.get("/reviews", (req,res)=>{
    try{
        const reviews = fs.readFileSync('reviews.txt', "utf-8");
        res.send(reviews);
    }
    catch(err){
        console.log(err.message)
        res.send('No reviews yet');
    }
})

// curl http://localhost:3000/reviews -X POST --data "movie=Matrix&review=**"
app.post("/reviews", (req,res)=>{
    console.log("post request received");
    const movie = req.body.movie;
    const rating = req.body.rating;

    console.log("movie: ", movie, " rating: ", rating);
    let oldContent = "";

    try{
        oldContent = fs.readFileSync('reviews.txt', "utf-8");
    }
    catch(err){}
    const newContent = oldContent + `Movie: ${movie}, Rating: ${rating}\n`;
    fs.writeFileSync('reviews.txt', newContent, "utf-8")
    res.send('Review added');

})

// The callback function is a nice to have
app.listen(4000, ()=> console.log('Server is running on port 4000'));