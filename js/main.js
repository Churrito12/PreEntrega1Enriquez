const contenido = document.getElementById("contenido")

const productos = [
    {
        id: 1,
        nombre: "Leche", 
        precio: 100,
        img: 
            "https://carrefourar.vtexassets.com/arquivos/ids/229098/7793913001822_01.jpg?v=637727700141700000",
    },
    {
        id: 2,
        nombre: "Huevos", 
        precio: 50,
        img:
            "https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2022/07/22/huevos.jpeg",
    },
    {
        id: 3,
        nombre: "Pan", 
        precio: 70,
        img:
            "https://images.hola.com/imagenes/cocina/recetas/20191009151184/pan-de-leche/0-730-595/pan-leche-t.jpg?tx=w_680",
    },
    {
        id: 4,
        nombre: "Jamon", 
        precio: 100,
        img:
            "https://doina.com.ar/wp-content/uploads/2020/02/1-Jamon-Crudo.png",
    },
    {
        id: 5,
        nombre: "Masitas", 
        precio: 200,
        img: 
            "https://img-global.cpcdn.com/recipes/2a76808ad58525a9/400x400cq70/photo.jpg",
    },
    {
        id: 6,
        nombre: "Gaseosa", 
        precio: 500,
        img:
            "https://d2r9epyceweg5n.cloudfront.net/stores/001/151/835/products/77908950004301-80602de5b61cff11bb15890782195412-640-0.jpg",
    },
];


let carrito = [];

productos.forEach((producto)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}"<h3/>
    <p class="precio">${producto.precio} $</p>
    `;

    contenido.append(content)

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);
})



