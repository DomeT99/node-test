const { people, ages } = require("./people");

console.log(people, ages);

const os = require("os"); //"os" operating system, modulo Node.js per le specifiche del sistema operativo su cui sta operando

console.log(os.platform(), os.homedir(), os.release(), os.machine());
