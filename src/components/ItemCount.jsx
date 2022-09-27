import React from "react";
import Button from "react-bootstrap/Button";

export default function Contador({stock, onAdd, contador, setContador}) {
  

  const suma = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const resta = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h1>En stock: {stock}</h1>
      <h3>Comprar: {contador}</h3>
      <Button
        variant="danger"
        onClick={() => {
          suma();
        }}
      >
        +
      </Button>{" "}
      <Button
        variant="warning"
        onClick={() => {
          resta();
        }}
      >
        -
      </Button>{" "}
      {contador >= 1?(
        <>
        <Button
        variant="primary"
        onClick={() => {
          onAdd();
        }}
      >
        Agregar al carrito
      </Button>
        </>
      ):(
        <>
        </>
      )}
    </div>
  );
}
