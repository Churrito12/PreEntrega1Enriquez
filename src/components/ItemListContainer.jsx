import ItemList from "./ItemList";

const ItemListContainer = (productos) => {
  const retrasoRed = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject("no hay productos para mostrar");
    }
  });
  return <ItemList />;
};

export default ItemListContainer;
