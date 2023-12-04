// "fs" è il modulo per la gestione del FileSystem
const fs = require("fs");

// reading files
fs.readFile("filesystem/docs/blog1.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});



// writing files

// 1- Directory con nome file
// 2- Contenuto
// 3- Callback di gestione operazione

//se il file esiste, lo sovrascrive
fs.writeFile("filesystem/docs/blog1.txt", "Hello World!", () =>
  console.log("file written")
);

//Se il file non esiste come in questo caso, ne crea uno nuovo
fs.writeFile("filesystem/docs/blog2.txt", "Hello again", () =>
  console.log("file written")
);



// directories

const handleOperation = (err, message) => {
  if (err) {
    console.log(err);
  }
  console.log(message);
};

if (!fs.existsSync("filesystem/assets")) {
  // creazione directory
  fs.mkdir("filesystem/assets", (err) =>
    handleOperation(err, "Directory created")
  );
} else {
  // rimozione directory
  fs.rmdir("filesystem/assets", (err) =>
    handleOperation(err, "Directory deleting")
  );
}



// deleting files

if (fs.existsSync("filesystem/docs/deleteme.txt")) {
  fs.unlink("filesystem/docs/deleteme.txt", (err) =>
    handleOperation(err, "File deleted")
  );
} else {
  fs.writeFile("filesystem/docs/deleteme.txt", "No delete", () =>
    console.log("file created")
  );
}
