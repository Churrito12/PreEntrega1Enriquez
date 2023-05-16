const contenido = document.getElementById("contenido")

const carritoClick = document.getElementById("Carrito")

const contenedorCarrito = document.getElementById("carrito-contenido")

let carrito = JSON.parse(localStorage.getItem("carritoGuardado")) || [];

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
        guardarItems();
    })

})
// guardar items

const guardarItems = () =>{
    localStorage.setItem("carritoGuardado", JSON.stringify(carrito));
};



