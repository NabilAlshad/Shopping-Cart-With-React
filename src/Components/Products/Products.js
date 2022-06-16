import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Products.css';

export default function Products() {
    //state of products
    const [Products, setProducts] = useState([]);
    const [successStatusCode, setSucessStatusCode] = useState("");
    const [isLoading, setLoading] = useState(true);


    //data fetching 
    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products`);
            // console.log(response);
            setSucessStatusCode(response.status);
            setLoading(false);
            setProducts(response.data);


        }
        getProducts();
    }, [])
    // console.log("products", Products);
    return (
        <div className='allProducts'>


            {isLoading ?
                <p className="loader">..loading</p>
                :

                Products.map((product) =>

                    <Card product={product}></Card>
                )

            }



        </div>
    )
}
