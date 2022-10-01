import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Carrousel from "./components/Carrousel";
import Carrito from "./components/Carrito";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from "./context/CartContext";
import Checkout from "./components/Checkout";
function App() {

  return (
    <div className="AppBody">
      <CartProvider>
      <BrowserRouter className="App">
      <NavBar />
      {/* <Titulos item={tituloPrincipal} /> */}
      <Carrousel />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
    </div>
    
  );
}

export default App;
