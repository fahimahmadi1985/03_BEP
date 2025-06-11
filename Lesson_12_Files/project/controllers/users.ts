import {type Request, type Response, type NextFunction} from 'express';
import bcrypt from 'bcrypt';



const users = [];


export const registerUsers = async (req:Request, res:Response, next:NextFunction) => {
    const {fullname, email, password } = req.body;

    // validate (ignore)

    // hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    // store data into database
    users.push({fullname, email, hashedPass, profile:req.profile});

    res.json({users:users})
}

export const loginUsers = (req:Request, res:Response, next:NextFunction) => {
    res.send("login")
}