const verCarrito = () => { 
    contenedorCarrito.innerHTML= "";
    contenedorCarrito.style.display = "flex";
    const verCarrito = document.createElement("div");
    verCarrito.className = "ver-Carrito"
    verCarrito.innerHTML = `
    <h1 class=""ver-carrito-header">Carro</h1>
    `;
    contenedorCarrito.append(verCarrito);

    const carritoBoton = document.createElement("h3");
    carritoBoton.innerText = "x";
    carritoBoton.className= "carrito-boton";

    carritoBoton.addEventListener("click", () =>{
        contenedorCarrito.style.display = "none"
    });

    verCarrito.append(carritoBoton)

    carrito.forEach((productos) =>{
        let carritoContenido = document.createElement ("div")
        carritoContenido.className = "carrito-medio"
        carritoContenido.innerHTML = `
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <p>${productos.precio}$</h3>
    ` ;
    contenedorCarrito.append(carritoContenido);

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className= "eliminar-producto";
    carritoContenido.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
    });



    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalComprado = document.createElement("div");
    totalComprado.className= "totalComprado";
    totalComprado.innerHTML= `total a pagar: ${total} $`;
    contenedorCarrito.append(totalComprado)
};
Carrito.addEventListener("click", verCarrito);

const eliminarProducto = () =>{
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    });

    verCarrito();
}
