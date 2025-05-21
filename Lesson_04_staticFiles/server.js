import express from "express"

const app = express();

// app.use(express.json())

app.use(express.static("public"))

app.get("/api/time", (req,res)=>{
    const currentTime = new Date().toLocaleTimeString();
    res.send(currentTime)
})

app.get("/api/greeting", (req,res)=>{
    res.json("Hello from the server")
})

app.use((req,res)=>{
    res.status(404).send("endpoint doesnt exist")
})

app.listen(8000, ()=>{
    console.log("server is running on port 8000")
})