const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/friday-prayer-navigator", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo"] });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
