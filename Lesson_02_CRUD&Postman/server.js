import express from "express"

const app = express();


app.use(express.json());

let guestbook = [
    { id: 0, author: 'Faenor', message: 'Hello, World!' },
    { id: 1, author: 'john', message: 'Hello, World!!!!!!!!!!!' }
]

app.get("/posts", (req,res)=>{
    res.json(guestbook)
})

