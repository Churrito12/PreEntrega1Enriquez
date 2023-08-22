import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer
        greeting={"Bienvenidos a Planterra, un sitio de compra de plantas"}
      />
    </>
  );
};
export default App;
