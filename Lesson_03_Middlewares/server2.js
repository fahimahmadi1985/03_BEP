import express from "express";

const app = express();

app.use(express.json());

function myFancyMiddleware(req, res, next) {
  console.log("VIP");
  next();
}

// Logger middleware, runs for all requests
// This one will always run first
app.use((req, res, next) => {
  console.log(`req method is: ${req.method} to the route ${req.url}`);
  next();
});

// Header checker, runs for all POST requests
app.use((req, res, next) => {
  // Check that an authorization header exists
  if (req.method === "POST" && !req.headers.authorization ) {
    return res.json({ error: "No authorization header" });
  }
  next();
});

// Regular endpoints will never use the `next()` so it's not added
app.get("/comments", (req, res) => {
  res.send("hi from GET /comments");
});

app.post("/comments", myFancyMiddleware, (req, res) => {
  res.send("hi from POST /comments");
});

app.post("/user/login", (req, res) => {
  res.send("hi from POST /user/login");
});

app.use((req,res,next)=>{
  console.log("middleware after all endpoints")
  res.status(404).send("page not found")
})

app.listen(5000, () => console.log("server is running on port 5000"));
