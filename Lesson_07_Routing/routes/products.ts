import { Router } from "express";
import { Product } from "../types.ts";
import { checkProd } from "../middlewares/checkingProducts.ts";

let products: Product[] = [{id: 0, name: "T-shirt", price: 40}]

const productsRouter = Router();

productsRouter.use(checkProd);

productsRouter.get("/", (req,res)=>{
    res.json(products)
})

productsRouter.post("/", (req,res)=>{
    const newProduct = req.body;

    newProduct.id = products.length;

    // const newProduct = { ...req.body , id: products.length}

    products.push(newProduct)

    res.json(products)
})

productsRouter.delete("/:id", (req,res)=>{
    const id = Number(req.params.id)
    products = products.filter(x=> x.id !== id)
    res.json({deleted: id })
})

export default productsRouter;