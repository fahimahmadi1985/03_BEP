import express from "express"

const app = express();

app.use(express.json())

app.set("view engine","ejs")

app.get("/", (req,res)=> res.render("index", {message: "Template Engine!"}))
app.get("/example", (req,res)=> res.render("about"))

app.get("/api/data", (req,res)=>{
    res.json({msg: "hello from the API"})
})

app.listen(8000, ()=> console.log("server is running on port 8000"))