//signup

// req.body = {username: "John Doe", password: "abc123"}

// bcrypt: hash the password before saving it into our DB

// save it in our fake DB is a users.json file


//login

// req.body = {username: "John Doe", password: "abc123"}

// we go through our DB (users) and look for a user with these credentials and compare the incoming password with the saved (hashed) one

import express, {Request, Response} from "express"
import fs from "fs"
import bcrypt from "bcrypt"

const app = express();

app.use(express.json())

type User = {
    username: string,
    password: string
}

app.post("/signup", (req: Request, res: Response)=>{
const {username, password} = req.body;

const user: User = {username, password}

if(!username || !password){
    res.status(400).json({error: "bad request"})
}

const users: User[] = JSON.parse(fs.readFileSync("users.json","utf8"))


    // The second parameter is the number of rounds
    // The higher the number, the more secure it is
    // Higher numbers also take longer to hash
    // Which is not necessarily a bad thing
    // Which is not necessarily a good thing
    // It's complicated - a balance is needed
user.password = bcrypt.hashSync(password, 10)

users.push(user)

fs.writeFileSync("users.json", JSON.stringify(users) , "utf8")

res.status(201).json({msg: "user added successfully"})

})

app.post("/login", (req: Request, res: Response)=>{
const {username, password} = req.body;

const users: User[] = JSON.parse(fs.readFileSync("users.json","utf8"))

const foundUser: User | undefined = users.find((x)=> x.username === username )

if(!foundUser){
    res.status(401).json({error: "user doesn't exist"})
}else{
    if(bcrypt.compareSync(password , foundUser.password)){
        res.status(200).json({msg: "login successful"})
    }else{
        res.status(401).json({error: "wrong password"})
    }
}
})


app.listen(4000, ()=> console.log("server is running on port 4000"))