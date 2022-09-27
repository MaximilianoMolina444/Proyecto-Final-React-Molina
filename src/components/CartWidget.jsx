import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from "../context/CartContext";


export default function CartWidget() {

  const { cartQuantity } = useCart();
  return (
    <div>
      <h3 >
        {" "}
        Mi Carrito
        <FaCartArrowDown />{" "}
      </h3>
      
    </div>
  );
}

// const CartWidget = () =>{
//     const {cartQuantity} = useCart()
//     return (
//         <div>
//             <h3> Mi Carrito<FaCartArrowDown />  </h3>
//             <span>{cartQuantity()}</span>
//         </div>
//     )
// }
// export default CartWidget
