import ejs from "ejs";
import express from "express";
import bodyParser from "body-parser"; 

const app = express();

app.set("view engine", "ejs");


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  console.log(req.body.username);
  res.send("Form submitted successfully!");
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
