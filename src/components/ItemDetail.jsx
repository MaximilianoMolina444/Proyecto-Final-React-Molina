import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import {useCart} from "../context/CartContext"

export default function ItemDetail({ detailProducts }) {
  const [contador, setContador] = useState(1);
  const { imagen, precio, descripcion, stock, nombre, id } = detailProducts;
  const [compra, setCompra] = useState(false);
  const navigate = useNavigate();
  const{addItem}=useCart()
  const onAdd = () => {
    let purchase = {
      nombre,
      precio,
      stock,
      imagen,
      quantity: contador,
      id,
    };
    setCompra(true);
    addItem(purchase)
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Card.Text>Descripcion: {descripcion}</Card.Text>
          {compra ? (
            <div>
              <Button
                variant="danger"
                onClick={() => {
                  navigate("/");
                }}
              >
                Seguir comprando
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  navigate("/Carrito");
                }}
              >
                Ir al carrito
              </Button>
            </div>
          ) : (
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={onAdd}
              contador={contador}
              setContador={setContador}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
