//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");

const readFileUsers = async() => {
    const usersPath = path.resolve("users.json");
    //Imprimir en consola el arreglo de usuarios
    try { // trycatch añadido y asyncAwait
        const data = await fs.readFile(usersPath, "utf8");
        console.log(data)   
    } catch (error) {
        console.log(error)
    }
};
const writeHelloWorld = async() => {
    const helloPath = path.resolve("hello.txt");
    //Escribir hello world! en el archivo hello.txt
    try {
        await fs.writeFile(helloPath, "hello world!");
    } catch (error) {
        console.log(error);
        console.log("No se ha podido escribir en este archivo");
    }
};
const addUser = async(username) => {
    const usersPath = path.resolve("users.json");
    //Agregar un usuario en la lista users.json
     // username ES el USUARIO EXTRA
    try {
        //Arreglo de usuarios (JSON)
        const data = await fs.readFile(usersPath, "utf8");
        const users = JSON.parse(data); //Convertir de JSON a objeto
        users.push(username);
        await fs.writeFile(usersPath, JSON.stringify(users));
    } catch (error) {
        console.log(error);
    }
};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};

//Módulo de filesystem o fs
const fs2 = require("fs/promises"); //import fs from "fs"
const path2 = require("path");

const requirementsPath = path2.resolve("requerimientos.txt");

// ||| CALLBACKS ||| Non blocking I/O
//Método para leer un archivo
fs2.readFile(requirementsPath, "utf8", (error, data) => {
    if(!error){ //Si no hay errores al momento de querer leer el archivo
        return console.log(data);
    }
    //Regresaremos un error
    return console.log(error);
});
console.log(addUser());
console.log("Continuando con la ejecución...");

fs2.writeFile(requirementsPath, "hello world!", (error) => {
    if(error){
        console.log("No se ha podido escribir en este archivo");
    }
});

// ||| PROMESAS Y ASYNC/AWAIT ||| 
fs2.readFile(requirementsPath, "utf8")
    .then(data => console.log(data))
    .catch(error => console.log(error));

(async () => {
    try{
        const data = await fs2.readFile(requirementsPath, "utf8");
        console.log(data);
    }catch(error){
        console.log(error)
    }
})();

