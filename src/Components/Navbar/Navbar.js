import React from 'react'
import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Navbar() {
    return (
        <div className='nav'>
            <ul className='navbar'>
                <li className='title'>Pro-Shop</li>
                <li className='cart'>cart</li>
            </ul>
        </div>
    )
}
