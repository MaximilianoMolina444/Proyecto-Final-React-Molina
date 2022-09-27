import React from 'react'
import Button from "react-bootstrap/Button";

export default function Checkout() {
    return (
        <div>
            <h2>Checkout</h2>
            <h4>Complete los datos</h4>
            <form action="" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <input type="text" placeholder="Nombre y apellido" name="name"/>
                <input type="number" placeholder="Número de teléfono" name="telephone"/>
                <input type="email" placeholder="Email de contacto" name="email"/>
                <Button variant="primary" >Terminar compra </Button>
            </form>
        </div>
        
    )
}
