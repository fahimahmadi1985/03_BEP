import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log("first middleware");
  req.myNum = 555;
  res.myProp = "hi";
  next();
});

app.use((req, res, next) => {
  console.log("second middleware");
  next();
});

app.use((req, res, next) => {
  console.log("third middleware");
  next();
});

app.get("/", (req, res) => {
  // console.log("req obj:", req);
  // console.log("res obj:", res);
  res.json({ msg: "this is the response" });
});

app.listen(8000, () => console.log("server is running on port 8000"));
