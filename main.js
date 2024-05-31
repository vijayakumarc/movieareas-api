import express from "express";
import router from "./routes/movies.route.js";
import connectDB from "./lib/db.js";

const app = express()

const PORT = 6969;

connectDB()

app.get("/", (req, res) => {
  res.json({ msg: "Welcome Students!" });
});

//CRUD Functionality of move

app.use('/movies',router)

app.listen(PORT, () => {
  console.log(`the server is running at http://localhost:${PORT}`);
});
