import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  document.body.style.backgroundColor = "#eef4d4";
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exath path="/" element={<ItemListContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
