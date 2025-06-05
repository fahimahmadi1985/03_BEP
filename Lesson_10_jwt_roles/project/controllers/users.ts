import jwt from 'jsonwebtoken';

const users = [
    {
        id: 1,
        username: "johndoe",
        password: "john123!",
        role: 'admin',
        fullname: "john doe",
        email: "john@mail.de"
    },
    {
        id: 2,
        username: "jane",
        password: "jane123!",
        role: 'user',
        fullname: "jane doe",
        email: "jane@mail.de"
    }
];
// it's better to define it as environment variable
export const secretKey = "SomethingveryveryverySecret";

export const login = (req, res, next) => {

    // extract data from request
    const {username, password} = req.body;

    // data validation (check the type and length)
    let isDataValid = false;
    if( 
        (typeof username) === 'string' 
     && username.length >3
     && password.length >= 8
     && (typeof password) === 'string'
    ){
        isDataValid = true;
    }else{
        // req.body.username or req.body.password not valid
        const validError = new Error("invalid data");
        validError.status = 400;
        return next(validError);
    }

    // check if user exist
    const matchedUser = users
        .find(u => u.username === username && u.password === password)
    
    if(isDataValid && matchedUser){
        // generate jwt token
        const token = jwt.sign(
            {
                id: matchedUser.id,
                fullname: matchedUser.fullname,
                username: matchedUser.username
            },
            secretKey,  
            {
                expiresIn: 20
            }
        );
        
        res
            .cookie('jwt', token, {maxAge: 24*60*60*1000, httpOnly: true })
            .json({message: 'loggedin successfuly'});
    }else{
        // given user's credentials are not valid
        const err = new Error("Invalid Credentials");
        err.status = 401;

        // send error to errorhandler
        next(err);
    }
};
