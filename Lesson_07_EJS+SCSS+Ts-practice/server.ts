import express from "express"


const app = express();

app.use(express.json())

app.set("view engine","ejs");

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/post", (req,res)=>{
    res.render("post-create")
})

app.get("/post/:id", (req,res)=>{
    res.render("post")
})

app.listen(8000, ()=> console.log("server is running on port 8000"))