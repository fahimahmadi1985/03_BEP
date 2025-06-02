import express from "express"
import { requestLogger } from "./middlewares/requestLogger.ts";
import { Product } from "./types.ts";

const app = express();

let products: Product[] = [{id: 0, name: "T-shirt", price: 40}]

app.use(requestLogger);
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.get("/products", (req,res)=>{
    res.json(products)
})

app.post("/products", (req,res)=>{
    const newProduct = req.body;

    newProduct.id = products.length;

    // const newProduct = { ...req.body , id: products.length}

    products.push(newProduct)

    res.json(products)
})

app.delete("/products/:id", (req,res)=>{
    const id = Number(req.params.id)
    products = products.filter(x=> x.id !== id)
    res.json({deleted: id })
})

app.listen("8000", ()=> console.log("server is running on port 8000"))

