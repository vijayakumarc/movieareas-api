import express from "express";

const app = express();

const PORT = 6969;

app.get("/", (req, res) => {
  res.json({ msg: "Welcome Students!" });
});

//CRUD Functionality of move

//For Reading movies
app.get("/movies", () => {});

//For Creating movies
app.post("/movies", () => {});

//For Updating movie
app.put("/movies/:id", () => {});

//For Deleting movie

app.delete("/movies/:id", () => {});

app.listen(PORT, () => {
  console.log(`the server is running at http://localhost:${PORT}`);
});
