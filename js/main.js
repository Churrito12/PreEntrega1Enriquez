const contenido = document.getElementById("contenido")

const carritoClick = document.getElementById("Carrito")

const contenedorCarrito = document.getElementById("carrito-contenido")

let carrito = [];

productos.forEach((producto)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}<h3/>
    <p class="precio">${producto.precio} $</p>
    `;

    contenido.append(content)

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
        });
        console.log(carrito)
    })

})

carritoClick.addEventListener("click", () => {
    const verCarrito = document.createElement("div");
    verCarrito.className = "ver-Carrito"
    verCarrito.innerHTML = `
    <h1 class=""ver-carrito-header">Carro</h1>
    `;
    contenedorCarrito.append(verCarrito);

    const carritoBoton = document.createElement("h3");
    carritoBoton.innerText = "x";
    carritoBoton.className= "carrito-boton";

    verCarrito.append(carritoBoton)

    carrito.forEach((productos) =>{
        let carritoContenido = document.createElement ("div")
        carritoContenido.className = "carrito-medio"
        carritoContenido.innerHTML = `
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <p>${productos.precio}$</h3>
    ` ;
    contenedorCarrito.append(carritoContenido)
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalComprado = document.createElement("div");
    totalComprado.className= "totalComprado";
    totalComprado.innerHTML= `total a pagar: ${total} $`;
    contenedorCarrito.append(totalComprado)
});



