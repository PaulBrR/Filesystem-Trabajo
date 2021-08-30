const fs = require("fs");
const path = require('path');

//Blocking I/O
const requirementsPath = path.resolve("requerimientos.txt");
const data = fs.readFileSync(requirementsPath, "utf8");
console.log(data);

console.log("Continuando con la ejecución...");

