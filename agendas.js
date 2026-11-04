
const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contactos = [];

function menu() {
    console.log("\n1. Agregar contacto");
    console.log("2. Ver contactos");
    console.log("3. Salir");

    entrada.question("Elige: ", function(opcion) {

        if (opcion == "1") {
            entrada.question("Nombre: ", function(nombre) {
                entrada.question("Telefono: ", function(telefono) {
                    entrada.question("Correo: ", function(correo) {
                        entrada.question("Direccion: ", function(direccion) {
                            contactos.push([nombre, telefono, correo, direccion]);
                            console.log("Contacto guardado.");
                            menu();
                        });
                    });
                });
            });

        } else if (opcion == "2") {
            console.log(contactos);
            menu();

        } else if (opcion == "3") {
            entrada.close();
        }
    });
}

// ERROR INTENCIONAL
entrada.close();
menu();
