import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { data } from "../mocks/mockData";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/firebase";
export default function ItemListContainer() {
  const styles = {
    color: "blue",
  };
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
  //mock
  // useEffect(() => {
  //   setLoading(true);
  //   data
  //     .then((res) => {
  //       if (categoriaId) {
  //         setProductsList(res.filter((item)=>item.categoria === categoriaId))
  //       }else{
  //         setProductsList(res)
  //       }
  //     })
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [categoriaId]);
  console.log(listProducts);
  return (
    <div style={styles}>
      {loading ? <p>Cargando...</p> : <ItemList listProducts={listProducts} />}
    </div>
  );
}
