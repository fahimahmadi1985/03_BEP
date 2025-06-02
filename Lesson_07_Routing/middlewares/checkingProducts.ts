export function checkProd(req,res,next){
    console.log(`hello from products middleware, the incoming request is a ${req.method} request`)
    next()
}