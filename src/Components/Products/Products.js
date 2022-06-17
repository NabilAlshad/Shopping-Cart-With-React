
import Card from './Card';
import './Products.css';

export default function Products({ onAddCart, products, isLoading }) {
    console.log(isLoading);
    return (
        <div className='allProducts'>


            {isLoading ?
                <p style={{ color: "red" }}>..loading</p>
                :

                products.map((product) =>

                    <Card key={product.id} onAddCart={onAddCart} product={product}></Card>
                )

            }



        </div>
    )
}
