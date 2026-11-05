const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generarContrasena(longitud) {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let contrasena = "";
    const tamano = Number(longitud);
    
    if (isNaN(tamano) || tamano <= 0) {
        console.log("Por favor escribe un número mayor a 0");
        entrada.close();
        return;
    }
    
    for (let i = 0; i < tamano; i++) {
        let numero = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[numero];
    }
    
    console.log("Tu contraseña es: " + contrasena);
    entrada.close();
}

entrada.question("¿Cuántos caracteres quieres?: ", generarContrasena);
