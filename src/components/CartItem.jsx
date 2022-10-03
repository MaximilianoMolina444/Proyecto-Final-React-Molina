import React from 'react'
import Button from 'react-bootstrap/Button';
import {useCart} from '../context/CartContext'

const CartItem = ({articulo}) => {
    const{removeItem} =useCart()
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'2rem'}}>
            <img src={articulo.imagen} alt={articulo.nombre} style={{width:'20rem', height:'20rem'}} /><br />
            <span style={{marginTop:"1rem", textAlign:"center", fontFamily: "Roboto Condensed, sans-serif"}}>{articulo.nombre}</span><br />
            <span style={{marginTop:"1rem", textAlign:"center", fontFamily: "Roboto Condensed, sans-serif"}}>Precio: ${articulo.precio}</span><br />
            <span style={{marginTop:"1rem", textAlign:"center", fontFamily: "Roboto Condensed, sans-serif"}}>Cantidad: {articulo.quantity}</span><br />
            <Button variant="dark" onClick={()=>removeItem(articulo.id)}>X Eliminar item </Button>
        </div>
    )
}

export default CartItem
