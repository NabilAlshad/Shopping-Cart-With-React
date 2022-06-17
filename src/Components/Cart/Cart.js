import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Cart.css';

export default function Cart({ cartItems, onAddCart, onRemoveCart, isUpdate, clearCartHandler }) {

    return (
        <div className="cartComponent">

            {/* <h1 style={{ textAlign: "center" }}>Your Cart</h1> */}
            {cartItems.length === 0 ? <p className="emptyMsg">cart is empty</p> :
                <h4 className="prductMsg">Your products</h4>}
            {
                cartItems.map((item) => (

                    <div className='cartItems'>

                        <h5 className='itemTitle'>{item.title}</h5>
                        <div className='priceSection'>
                            <button className='counterButton' onClick={() => onAddCart(item)}>+</button>

                            <button className='counterButton' onClick={() => onRemoveCart(item)}>-</button>
                            <p className='itemPrice'>
                                {item.quantity} X ${item.price}</p>
                        </div>

                    </div>
                ))
            }
            {
                !!cartItems.length
                &&
                <Subtotal cartItems={cartItems} isUpdate={isUpdate} clearCartHandler={clearCartHandler} />
            }

        </div>
    )
}
