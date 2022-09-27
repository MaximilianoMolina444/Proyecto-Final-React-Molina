import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate} from "react-router-dom"
export default function Item({ product }) {
  const { imagen, descripcion, precio, id } = product;
  const navegar = useNavigate()
  return (
    <div style={{ width: "18rem", paddingBottom: "5rem" }}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} style={{ height: "18rem" }} />
        <Card.Body>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Card.Text>Descripcion:{descripcion}</Card.Text>
          <Button variant="primary" onClick={()=>navegar(`/detalle/${id}`)}>¡Pedí la tuya!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
