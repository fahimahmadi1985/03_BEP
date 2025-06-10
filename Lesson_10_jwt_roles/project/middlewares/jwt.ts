import jwt from 'jsonwebtoken';
import { secretKey } from '../controllers/users';


// verify users after login
export const authenticate = (req, res, next) => {
    // open the cookie and verify the token
    const token = req.cookies.jwt;
    const decode = jwt.verify(token, secretKey)
    console.log(decode);
    next()
}