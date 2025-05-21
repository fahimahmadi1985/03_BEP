import express, {Express, Response, Request, NextFunction} from "express"

const app: Express = express();

// app.use(express.json())

app.use(express.static("public"))

app.get("/api/time", (req: Request, res: Response)=>{
    const currentTime = new Date().toLocaleTimeString();
    res.send(currentTime)
})

app.get("/api/greeting", (req: Request, res: Response)=>{
    res.json("Hello from the server")
})

//error handler middleware for a not-found endpoint
app.use((req: Request, res: Response, next: NextFunction)=>{
    res.status(404).send("endpoint doesnt exist")
})

app.listen(8000, ()=>{
    console.log("server is running on port 8000")
})