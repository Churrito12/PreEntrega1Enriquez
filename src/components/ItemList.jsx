import Item from "./Item";
const ItemList = () => {
  let productos = [
    { id: 1, nombre: "Planta 1", descripcion: "Suculenta", precio: 650 },
    { id: 2, nombre: "Planta 2", descripcion: "Cactus", precio: 400 },
    { id: 3, nombre: "Planta 3", descripcion: "Flor", precio: 500 },
  ];
  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("no hay productos para mostrar");
    }
  });
  mostrarProductos
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      {productos.map((p) => {
        return (
          <div key={p.id}>
            <h1>Nombre:{p.nombre}</h1>
            <h3>Descripcion:{p.descripcion}</h3>
            <p>${p.precio}</p>
            <Item />
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
