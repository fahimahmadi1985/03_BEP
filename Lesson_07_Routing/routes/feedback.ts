import {Router} from "express";
import { Feedback } from "../types.ts";

const feedbackRouter = Router();

const feedback: Feedback[] = []

feedbackRouter.get("/", (req,res)=>{
    res.json(feedback)
})

feedbackRouter.post("/", (req,res)=>{
    const newFeedback = {...req.body, id: feedback.length};
    feedback.push(newFeedback)
    res.json(feedback)
})

//when using the same method more than once, we need to add extra parts to the url
feedbackRouter.get("/test", (req,res)=>{
    res.json("hello")
})


export default feedbackRouter;

