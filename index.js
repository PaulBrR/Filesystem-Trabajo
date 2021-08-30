//Imports de los módulos
const fs = require("fs/promises");
const path = require("path");

const readFileUsers = () => {
    const usersPath = path.resolve("users.json");
    //Imprimir en consola el arreglo de usuarios
    fs.readFile(usersPath,"utf8", (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);
        console.log(users);
    });
};
const writeHelloWorld = () => {
    const helloPath = path.resolve("hello.txt");
    //Escribir hello world! en el archivo hello.txt
    fs2.writeFile(helloPath, "hello world!", (error) => {
        if(error){
            console.log("No se ha podido escribir en este archivo");
        }
    });

};

const addUser = (username) => {
    const usersPath = path.resolve("users.json");
    //Agregar un usuario en la lista users.json
    //let data = JSON.stringify('users.json');
    //let users = JSON.parse(data);
    //console.log(data); // username ES el USUARIO EXTRA
     fs.readFile(usersPath,"utf8", (err, data) => {
        if (err) throw err;
        console.log(data);
        let users = JSON.parse(data);
        console.log(users);
    });

    fs.writeFile(usersPath, `["Hector","Eduardo","Sandra","Ana","Saúl","${username}"]`, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });
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
