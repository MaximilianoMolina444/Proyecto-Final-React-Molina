import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function CartWidget() {

  const { cartQuantity, cart } = useCart();
  const navegar = useNavigate();
  return (
    <div>
      <h3 onClick={() => navegar("/carrito")}>
      Mi Carrito: {cartQuantity() || ''}
      
        <FaCartArrowDown />{" "}
      </h3>
      
      
    </div>
  );
}
