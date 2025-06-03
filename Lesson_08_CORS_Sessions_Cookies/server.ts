import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()


app.use(express.json())

// This allows the server to accept requests from *any* origin
app.use(cors())

// This allows the server to parse cookies from the request
app.use(cookieParser())

app.get("/",(req,res)=>{
 console.log( "request header is: ", req.headers);
 console.log("cookies from the request: ", req.cookies);
    res.send("Hello World!")
})

app.get("/cookie",(req,res)=>{
    // This does not use cookie-parser, but it's a bit complicated
    res.header("Set-Cookie", "testingCookie=hello555; Expires=Wed, 31 Oct 2028 13:37:00 GMT; Secure; HttpOnly" )
    res.send("cookie set")
})

app.get("/easycookie",(req,res)=>{

    res.cookie("otherSessionId", "hello123456", {expires: new Date(Date.now() + 900000), secure: true, httpOnly: true})
    res.send("cookie set using the other method")
})

app.get("/lameCookie", (req,res)=>{
    res.cookie("otherSessionId2", "bad2");
    res.send("cookie set using the other method");
})

app.listen(8000, ()=> console.log("server is running on port 8000"))