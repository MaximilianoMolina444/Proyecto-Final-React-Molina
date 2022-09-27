import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Carrousel from "./components/Carrousel";
import Titulos from "./components/Titulos";
import Carrito from "./components/Carrito";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CartProvider} from "./context/CartContext";
import Checkout from "./components/Checkout";
import {useEffect} from "react"
import { productos } from "./mocks/mockData";
import {db} from "./Firebase/firebase"
import {collection, addDoc} from "firebase/firestore"
function App() {
  let tituloPrincipal = { text: "Somos Ramona Customs" };
  let tituloProductos = { text: "Nuestros Productos" };
  // useEffect(()=>{
  //   const productosCollection = collection(db, "Products")
  //   productos.map ((item) => addDoc(productosCollection, item))
  // },[])
  return (
    <CartProvider>
      <BrowserRouter className="App">
      <NavBar />
      <Titulos item={tituloPrincipal} />
      <Carrousel />
      <Titulos item={tituloProductos} />
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
    
  );
}

export default App;
