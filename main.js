const stock = [
    {nombre: "leche", precio: 100},
    {nombre: "huevos", precio: 50},
    {nombre: "pan", precio: 70},
    {nombre: "jamon", precio: 100},
    {nombre: "masitas", precio: 200},
    {nombre: "gaseosa", precio: 500},
];

let carrito = []

let elegir = prompt("Hola, ¿deseas ver la lista de productos?")

while(elegir != "si" && elegir != "no"){
    alert("Por favor, ingresa si o no")
    elegir = prompt("Hola, ¿deseas ver la lista de productos, si o no?")
}

if (elegir == "si"){
    alert("Esta es nuestra lista de productos")
    console.log(stock)
}