import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let guestbook = [
  { id: 0, author: "Faenor", message: "Hello, World!" },
  { id: 1, author: "john", message: "Hello, World!!!!!!!!!!!" },
  { id: 2, author: "jane2", message: "Hey2" },
  { id: 3, author: "bob", message: "Hello" },
  
];

app.get("/posts", (req, res) => {
  res.json(guestbook);
});

app.post("/posts", (req, res) => {
  // const name = req.body.name;
  // const message = req.body.message;

  // {name: "Jane", message: "hi"}
  const { name, message } = req.body;

  const newPost = { id: guestbook.length, author: name, message: message };

  guestbook.push(newPost);

  res.json({ msg: "post added successfully", guestbook });
});

app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);

  const { name, message } = req.body;

  const editedPost = { id: id, author: name, message: message };

  guestbook = guestbook.map((x) => x.id === id ? editedPost : x );
 
  res.json(guestbook);
});

app.delete("/posts/:id", (req, res) => {
  console.log(req.params);
  
  const id = Number(req.params.id);

  if (guestbook.some((x) => x.id === id)) {
    guestbook = guestbook.filter((x) => x.id !== id);
    return res.json(guestbook);
  }

  res.status(404).json("post with that id doesnt exist");
});

app.listen(8000, () => console.log("server is running on port 8000"));
