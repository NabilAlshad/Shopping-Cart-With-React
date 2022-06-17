import React from 'react';
import './Card.css';

export default function Card({ product, onAddCart }) {
    // console.log(product);
    const { description, title, price, image } = product;

    // console.log("from card", product)
    return (
        <div className='card'>
            <div className="cardHeight">
                <img src={image} className="productImage" alt={description}></img>
                <div className="cardInfo">
                    <h4 className='productTitle'>{title}</h4>
                    <p className='productPrice'> Price: {price}$</p>
                </div>
            </div>
            <div >
                <button className="addToCartButton" onClick={() => onAddCart(product)}>Add to Cart</button>
            </div>
        </div>
    )
}
