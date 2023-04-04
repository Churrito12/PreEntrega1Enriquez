const stock = [
    { nombre: "leche", precio: 100 },
    { nombre: "huevos", precio: 50 },
    { nombre: "pan", precio: 70 },
    { nombre: "jamon", precio: 100 },
    { nombre: "masitas", precio: 200 },
    { nombre: "gaseosa", precio: 500 },
];

let carrito = []

let elegir = prompt("Hola, ¿deseas ver la lista de productos?")

while (elegir != "si" && elegir != "no") {
    alert("Por favor, ingresa si o no")
    elegir = prompt("Hola, ¿deseas ver la lista de productos, si o no?")
}

if (elegir == "si") {
    alert("Esta es nuestra lista de productos")
    let todoelStock = stock.map((stock) => stock.nombre + " " + stock.precio + " " + "$");
    alert(todoelStock.join(" - "))
} else if (elegir == "no") {
    alert("Gracias por la respuesta, ¡nos vemos!")
}
while (elegir != "no") {
    let producto = prompt("¿Que producto deseas ver?")
    let precio = 0

    if (producto == "leche" || producto == "huevos" || producto == "pan" || producto == "jamon" || producto == "masitas" || producto == "gaseosa") {
        switch (producto) {
            case "leche":
                precio = 100;
                break;
            case "huevos":
                precio: 50;
                break;
            case "pan":
                precio: 70;
                break;
            case "jamon":
                precio: 100;
                break;
            case "masitas":
                precio: 200;
                break;
            case "gaseosa":
                precio: 500;
                break;
            default:
                break;
        }
        let cantidad = parseInt(prompt("¿Cuantas unidades?"))

        carrito.push({ producto, cantidad, precio })
        console.log(carrito)
    } else {
        alert("No tenemos eso")
    }
    elegir = prompt("¿Deseas elegir otro?")

    while (elegir === "no") {
        alert("Gracias por la compra")
        let carritoFinal
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carrito.cantidad}`)
        break;
    }
}
