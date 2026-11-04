
const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generarContrasena() {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let contrasena = "";

    for (let i = 0; i < Number(longitud); i++) {
        let numero = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[numero];
    }

    console.log("Tu contraseña es: " + contrasena);
}

entrada.question("Cuantos caracteres quieres?: ", function(longitud) {
    generarContrasena();
    entrada.close();
});
