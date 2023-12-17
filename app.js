const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3002);

// questo oggetto serve per la regolazione dei path
let root = {
  root: __dirname,
};

//res.send("<h1>Home page!</h1>"); per puro html

// Routes
app.get("/", (req, res) => res.sendFile("./views/index.html", root));
app.get("/about", (req, res) => res.sendFile("./views/about.html", root));

// redirects
app.get("/about-us", (req, res) => res.redirect("/about"));

// 404 page

// va messo alla fine di ogni route
// perchè deve essere eseguito quando tutte le rotte sono dichiarate
// questo è un middleware

// .status(404) necessario per settare lo status code a 404
// altrimenti di default è 200
app.use((req, res) => res.status(404).sendFile("./views/404.html", root));
