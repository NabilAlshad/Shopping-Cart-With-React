import React from 'react'
import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar({ countLength, isCartShow, setIsCartShow }) {
    return (
        <div className='nav'>
            <ul className='navbar'>
                <li className='title'>Pro-Shop</li>
                <li className='cart'>
                    <span onClick={(e) => setIsCartShow(!isCartShow)} style={{ cursor: "pointer" }}>
                        <i class="fa-solid fa-cart-arrow-down"></i>
                        <span className='cartLength'>{countLength}</span>
                    </span>
                </li>
            </ul>
        </div>
    )
}
