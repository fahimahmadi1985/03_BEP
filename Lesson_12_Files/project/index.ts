import express, {type Request, type Response, type NextFunction } from 'express';
import morgan from 'morgan';
import usersRouter from './routers/users';

const app = express();
const port:number|string = process.env.PORT || 5001;


// middleware
app.use(express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));


// routers
app.use('/users', usersRouter);


// error handlers
interface CustomError extends Error{
    status?: number;
}

// handle not defined routes
app.use((req:Request, res:Response, next:NextFunction)=>{
    const error:CustomError = new Error("Route not defined!");
    error.status = 404;
    next(error);
});

// error handling (generally)
app.use((err:CustomError, req:Request, res:Response, next:NextFunction)=>{
    if(err) res.json({
        Error: err.message,
        status: err.status
    });
    next()
});

// run server
app.listen(port, ()=>{
    console.log(`🚀 Server is up on http://localhost:${port}`);
});