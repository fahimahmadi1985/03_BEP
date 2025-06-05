import express from 'express';
import type {Express, Request, Response, NextFunction} from 'express';
import usersRouter from './routers/users';

const app:Express = express();

// middleware
app.use(express.json()) // to extract json data from request body


// routers
app.use("/users", usersRouter );









// middleware for not defined Routes
app.use((req:Request, res:Response, next:NextFunction)=>{
    const err = new Error("Route not defined");
    err.status = 404;
    next(err);
});

// error handlers (middleware)
app.use((err:any, req:Request, res:Response, next:NextFunction)=>{
    if(err){
        res.status(err.status || 500).json({Error: err.message});
    }
    next();
});

// port
const port = process.env.PORT || 5001;      // environment port number  (production | development)

// assign port to my server application
app.listen(port, ()=> console.log(`🚀 Server is up on: http://localhost:${port}`));