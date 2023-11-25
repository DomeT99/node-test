// Global Object

// Quando si lavora con JavaScript lato frontend, l'oggetto globale è "window"
// In Node.js l'oggetto globale è "global"

console.log(global);

setTimeout(() => {
  console.log("in the timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in the interval");
}, 1000);

console.log(__dirname); // path assoluto della directory
console.log(__filename); // path assoluto del file

console.log(document.querySelector); //NON FUNZIONA
// l'oggetto document, in Node.js, non sarà definito, perchè NON siamo in ambiente browser (window)
