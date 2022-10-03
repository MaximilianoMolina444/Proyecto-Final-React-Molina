import React from "react";

import { useCart } from "../context/CartContext";

import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem";

export default function Carrito() {
  const navegar = useNavigate();

  const { cart, emptyCart, cartTotal } = useCart();


  return (
    <div>
      {!cart.length ? (
        <>
          <h4 style={{ fontSize:"2rem",marginTop:"1rem", textAlign:"center", fontFamily: "Roboto Condensed, sans-serif"}}>Tu Carrito esta vacio</h4>
          <div style={{textAlign:"center", margin:"10px"}}>
          <Button variant="primary" onClick={() => navegar("/")} >
            Ir al shop
          </Button>
          </div>
          
        </>
      ) : (
        <>
          <h3 style={{textAlign: "center"}}>Carrito:</h3>

          {cart.map((articulo) => (
            <CartItem key={articulo.id} articulo={articulo}/>
          ))}

          <span style={{ fontSize:"2rem", marginTop:"1rem", textAlign:"center", fontFamily: "Roboto Condensed, sans-serif"}}>Total a pagar: ${cartTotal()}</span>

          <div style={{textAlign:"center"}}>
            <Button variant="primary" onClick={() => navegar("/checkout")}style={{margin:"10px"}}>Terminar compra </Button>
            <Button variant="danger" onClick={emptyCart}>
              Vaciar carrito
            </Button>
          
          </div>
        </>
      )}
    </div>
  );
}
