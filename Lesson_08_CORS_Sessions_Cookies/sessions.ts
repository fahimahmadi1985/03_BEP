import express, {Request, Response, NextFunction } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

type Session = {
    id: string,
    username: string
}

// Define custom Request type that contains session
interface RequestWithSession extends Request {
    session?: Session
}

// This is our "sessions" database
const sessions: Session[] = []

function customSessionParser(req: RequestWithSession,res: Response, next: NextFunction){

    const sessionID = req.cookies.session_id;

    if(sessionID){
    req.session = sessions.find((s)=> s.id === sessionID)
    }

    next()
}


app.use(express.json())
// This allows the server to accept requests from one specific origin
app.use(cors({origin: "http://localhost:3000", credentials: true}))
app.use(cookieParser())
app.use(customSessionParser)

app.post("/login", (req: RequestWithSession, res: Response) => {
if(req.session){
   res.status(400).json({error: "you are already logged in " + req.session.username});
   return;
}

if(!req.body.username){
    res.status(400).json({error: "username is missing"})
    return
}

const session = {
    id: String(Math.random()),
    username: req.body.username
}

sessions.push(session)

res.cookie("session_id", session.id, {maxAge: (5 * 60 * 1000), httpOnly: true} ).json({ok: true})

})

app.get("/sessions", (req: RequestWithSession, res: Response)=>{
    if(!req.session){
        res.status(400).json({error: "Log in first"})
        return;
    }

    res.json({activeSessions: sessions.map((s)=> s.username )})

})


//! TODO: Add a /logout endpoint that removes the session from the sessions array and clears the cookie
//! TODO: Add a frontend that uses these endpoints to log in, log out, and display active sessions

app.listen(4000, ()=> console.log("server is running on port 4000"))