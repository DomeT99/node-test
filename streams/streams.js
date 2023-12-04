// "fs" è il modulo per la gestione del FileSystem
const fs = require("fs");

// Gestione lettura usando stream e buffer
const readStream = fs.createReadStream("streams/docs/blog3.txt", {
  encoding: "utf8",
});

// Gestione scrittura usando stream e buffer
const writeStream = fs.createWriteStream("streams/docs/blog4.txt");

readStream.on("data", (chunk) => {
  console.log("------- NEW CHUNK -------");
  console.log(chunk);

  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
});

// Oppure

readStream.pipe(writeStream);