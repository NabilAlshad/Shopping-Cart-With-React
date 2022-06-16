import React from 'react';
import './Card.css';

export default function Card({ product }) {
    console.log(product);
    const { description, title, price, image } = product;

    // console.log("from card", product)
    return (
        <div className='card'>
            <div className="cardHeight">
                <img src={image} className="productImage" alt={description}></img>
                <div className="cardInfo">
                    <h4>{title}</h4>
                    <p> Price: {price}$</p>
                </div>
            </div>
            <div >
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
