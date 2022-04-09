// Ingreso al carrito de compras
// Pasword

let inputPassword = prompt("Ingresar password" + ' carrito');

function ingresePassword() {

    if ((inputPassword != "") && ((inputPassword == "carrito") || (inputPassword == "carrito"))) {
        alert("Le damos la bienvenida !!");
    }
    while (inputPassword != 'carrito') {
        alert("Error: el password es 'carrito' vuelva a ingresar");


    }

}

ingresePassword()

//Selección de temática de libros
let tematicaLibro = prompt("Ingrese su opción: " + "1-Técnicos 2-Medicina 3-Arte 4-Salir");

switch (tematicaLibro) {

    case "1":
        alert("Usted ha ingresado Libros Técnicos");

        const librosTecnicos = [{
                id: 1,
                nombre: 'HTML para principiantes',
                precio1: 1000,
                autor: 'Carlos Pérez'
            },
            {
                id: 2,
                nombre: 'CSS para principiantes',
                precio2: 1200,
                autor: 'Jorge Pedroza'
            },
            {
                id: 3,
                nombre: 'Java Script para principiantes',
                precio3: 1500,
                autor: 'Silvia Perotti'
            },
            {
                id: 4,
                nombre: 'React para principiantes',
                precio4: 1300,
                autor: 'Alejandro Cáceres'
            }
        ];
        console.log(librosTecnicos)
        break;

    case "2":

        alert("Usted ha ingresado Libros de Medicina");
        const librosMedicina = [{
                id: 5,
                nombre: 'Microbiología aplicada',
                precio5: 1000,
                autor: 'Fernando Pérez'
            },
            {
                id: 6,
                nombre: 'Endometriosis bacteriana',
                precio6: 1200,
                autor: 'Carlos Ramírez'
            },
            {
                id: 7,
                nombre: 'Casos de estudio clínicos',
                precio7: 1500,
                autor: 'Rolando García'
            },
            {
                id: 8,
                nombre: 'El manual del residente',
                precio8: 1300,
                autor: 'Ramón Alegre'
            }

        ];
        console.log(librosMedicina)
        break;

    case "3":
        alert("Usted ha ingresado Libros de Arte");
        const librosArte = [{
                id: 9,
                nombre: 'Picaso la tenía clara',
                precio9: 1000,
                autor: 'El Ratón Pérez'
            },
            {
                id: 10,
                nombre: 'Las posibildades del Raid',
                precio10: 1200,
                autor: 'El Hombre Araña'
            },
            {
                id: 11,
                nombre: 'Arte y Paracaidismo',
                precio11: 1500,
                autor: 'El Inspector Gadget'
            },
            {
                id: 12,
                nombre: 'Alfarería Electrónica',
                precio12: 1300,
                autor: 'El Loco Chávez'
            }

        ];
        console.log(librosArte)
        break;

    case "4":
        let salir = prompt("Desea abandonar el carrito ?" + " Escriba: Y para salir N para volver")
        if (salir = y) {
            'ESC'
        } else {
            let tematicaLibro = prompt("Ingrese su opción: " + "1-Técnicos 2-Medicina 3-Arte 4-Salir");
            break
        }
}