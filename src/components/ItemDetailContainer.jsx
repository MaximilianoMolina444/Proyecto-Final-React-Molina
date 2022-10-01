import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {collection, doc, getDoc} from "firebase/firestore";
import {db} from "../Firebase/firebase";

export default function ItemDetailContainer() {
  const [detailProducts, setDetailProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  //Firesbase
  useEffect(() => {
    const coleccionProductos = collection(db, "Products")
    const referenciaDoc = doc(coleccionProductos, id)
    getDoc(referenciaDoc)
    .then((result)=>{
      setDetailProducts({
        id: result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  },[])

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail detailProducts={detailProducts} />
      )}
    </div>
  );
}
