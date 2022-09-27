import React from "react";

import { useCart } from "../context/CartContext";

import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";



export default function Carrito() {

  const navegar = useNavigate();

  const { cart, emptyCart, cartTotal } = useCart();

  console.log("carrito", cart);

  return (

    <div>

      {!cart.length ? (

        <>

          <h4>Tu Carrito esta vacio</h4>

          <Button variant="primary" onClick={() => navegar("/")}>

            Ir al shop

          </Button>

        </>

      ) : (

        <>

          <h3>Tu Carrito</h3>

          {cart.map((articulo) => (

            <CartItem key={articulo.id} articulo={articulo} />

          ))}

          <span>Total a pagar: ${cartTotal()}</span>

      <div>

        <Button variant="primary">Terminar compra</Button>

        <Button variant="danger" onClick={emptyCart}>

          Vaciar carrito

        </Button>

      </div>

        </>

      )}



    </div>

  );

}
