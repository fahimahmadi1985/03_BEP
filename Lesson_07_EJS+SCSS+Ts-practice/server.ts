import express from "express"
import {read, write} from "./db.ts"

const app = express();

app.use(express.json())
app.use(express.urlencoded());

let posts = read();

app.set("view engine","ejs");

app.get("/", (req,res)=>{
    res.render("index", {posts: posts})
})

app.get("/post", (req,res)=>{
    res.render("post-create")
})

app.get("/404",(req,res)=>{
    res.render("404")
})

app.get("/post/:id", (req,res)=>{
    const id = Number(req.params.id);

    const post = posts.find(x=> x.id === id);
    if(!post){
      return  res.status(404).redirect("/404")
    }
    res.render("post", {post: post})
})


 app.post("/api/post", (req,res)=>{
    console.log(req.body)
    const {title, author, content} = req.body;
    const newID = posts.length+1;

    if(!title || !author || !content){
       return res.redirect("/404")
    }

    const newPost = {id: newID ,title, author, content}

    posts.push(newPost)

    write(posts)

    res.redirect(`/post/${newID}`)

 })
// app.delete()

app.listen(8000, ()=> console.log("server is running on port 8000"))