import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/firebase";
export default function ItemListContainer() {
  const [listProducts, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoriaId } = useParams();
  //Firesbase
  useEffect(() => {
    setLoading(true);
    const productos = categoriaId
      ? query(collection(db, "Products"), where("categoria", "==", categoriaId))
      : collection(db, "Products");
    getDocs(productos)
      .then((result) => {
        const lista = result.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProductsList(lista);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoriaId]);
  return (
    <div style={{marginTop:"1rem", textAlign:"center",}}>
      <h1>Tienda:</h1>
      {loading ? <p>Cargando...</p>  : <ItemList listProducts={listProducts} />}
    </div>
  );
}
