import express from "express"
import data from "./data.json"

const app = express();

app.use(express.json())

app.set("view engine", "ejs")

app.get("/", (req,res)=> res.render("index", {posts: data}))

app.get("/post/:id", (req,res)=>{
    const id = Number(req.params.id)
   const post = data.find(x=> x.id === id)

   if(!post){
    res.status(404).render("404", {msg: "id doesnt exist"})
   }else{
    res.render("post", {post: post })
   }
}) 

app.listen(8000, ()=> console.log("server is running on port 8000"))