//Modulo "http" per la creazione di un server
const http = require("http");
// "fs" è il modulo per la gestione del FileSystem
const fs = require("fs");
//Lodash
const _ = require("lodash");

//Creazione del server locale
const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);
  console.log(num);
  const greet = _.once(() => console.log("Hello"));

  greet();
  greet();

  // set header
  res.setHeader("Content-Type", "text/html");

  //res.write("<h1>Hello World!</h1>");

  //Piccola routine per la gestione del routing
  let path = "views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    //redirect
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //recupero file html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //res.write(data); è equivalente a res.end(data);
      res.end(data);
    }
  });
});

//Server in ascolto sulla porta 3002 con nome dominio localhost
server.listen(3002, "localhost", () => {
  console.log("Server listening on port 3002");
});
