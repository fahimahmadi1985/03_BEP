import express, {Request, Response, NextFunction} from "express"
import {requestLogger}  from "./middlewares/requestLogger.ts";
import productsRouter from "./routes/products.ts";
import feedbackRouter from "./routes/feedback.ts";

const app = express();

app.use(requestLogger);
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.use("/feedback", feedbackRouter);

app.use("/products", productsRouter);

app.listen("8000", ()=> console.log("server is running on port 8000"))

