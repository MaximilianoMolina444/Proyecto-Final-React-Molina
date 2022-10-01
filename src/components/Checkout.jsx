import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function Checkout() {
  const navegar = useNavigate();
  const { cart, cartTotal, clear } = useCart();
  const [comprador, setComprador] = useState({});
  const [orderId, setOrderId] = useState("");
  const [loader, setLoader]  = useState(false)
  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
  };
  const finalizarCompra = (e) => {
    e.preventDefault();
    if (Object.values(comprador).length !== 3) {
      toast.error("Complete los campos")
    } else {
        setLoader(true)
      const ventas = collection(db, "orders");
      addDoc(ventas, {
        comprador,
        items: cart,
        total: cartTotal(),
        date: serverTimestamp(),
      })
        .then((res) => {
          setOrderId(res.id);
          clear();
        })
        .catch((error) => console.log(error))
        .finally(() =>setLoader(false))
    }
    
  };
  if (loader) {
      return <p>Cargando...</p>
  }

  return (
    <div>
      {!orderId ? (
        <div>
          <h2>Datos de contacto:</h2>
          <h4>Complete los campos</h4>
          <form
            action=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            onSubmit={finalizarCompra}
          >
            <input
              type="text"
              placeholder="Nombre y apellido"
              name="name"
              onChange={datosComprador}
            />
            <input
              type="number"
              placeholder="Número de teléfono"
              name="telephone"
              onChange={datosComprador}
            />
            <input
              type="email"
              placeholder="Email de contacto"
              name="email"
              onChange={datosComprador}
            />
            <Button variant="primary" type="submit">
              Terminar compra{" "}
            </Button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Muchas gracias por su compra</h2>
          <h4>Su orden es: {orderId}</h4>
          <h4>En Breve nos podemos en contacto</h4>
          <Button variant="primary" onClick={() => navegar("/")}>
            Inicio
          </Button>
        </div>
      )}
      <Toaster/>
    </div>
  );
}
