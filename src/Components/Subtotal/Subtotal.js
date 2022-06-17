import React, { useEffect, useState } from 'react'
import SubTotalHandler from "../../utils/subTotalHandler";
import './Subtotal.css'

const Subtotal = ({ cartItems, isUpdate, clearCartHandler }) => {
    const [subTotal, setSubTotal] = useState(0) //this will be the main sub total

    const { price, quantity } = cartItems;
    const productPrice = quantity * price;

    //get the sub total of cart and set it into local storage
    useEffect(() => {
        // console.log(`Hello I am rendered`)
        const subtotal = SubTotalHandler(cartItems)
        setSubTotal(subtotal)
        localStorage.setItem("cart", JSON.stringify(cartItems))
        // console.log({ cartItems })
        if (!cartItems.length) {
            localStorage.removeItem("cart")
        }
    }, [isUpdate])
    return (
        <div>
            <hr></hr>
            <button className="clear-cart" onClick={(e) => clearCartHandler(e)}>Clear cart</button>
            <h1 className="subTotal">Subtotal ={subTotal}$</h1>
            <button className="Purchase" onClick={(e) => alert(`Success fully purcahse please pay  ${subTotal}$`)}>Confirm your order</button>
        </div>
    )
}

export default Subtotal