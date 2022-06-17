import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';



function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false)
  const [isCartShow, setIsCartShow] = useState(false)
  //get all products with data fetching
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setLoading(false);
      setProducts(response.data);
      console.log(response.data)
      console.log(`Hello i am from product compo`)
    }
    getProducts();
  }, [])

  //work with cart item 
  useEffect(() => {
    //check the local storage 
    const cardItems = JSON.parse(localStorage.getItem("cart"));
    cardItems
      &&
      setCartItems(cardItems)
  }, [])
  //get cart Items with adding and removing
  const onAddCart = (product) => {
    // console.log(product);
    const productExist = cartItems.find((p) => p.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map(p => p.id === product.id ? { ...productExist, quantity: productExist.quantity + 1 } : p)
      )
      setIsUpdate(!isUpdate)
    }
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
      setIsUpdate(!isUpdate)
    }

  }
  // console.log({ cartItems })
  //onRemoveCart
  const onRemoveCart = (product) => {
    const productExist = cartItems.find(p => p.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter(p => p.id !== product.id))
      setIsUpdate(!isUpdate)
      // console.log(`Hello I am from if`)
    }
    else {
      setCartItems(cartItems.map(p => p.id === product.id ? { ...productExist, quantity: productExist.quantity - 1 } : p))
      setIsUpdate(!isUpdate)
      // console.log(`Hello I am from else`)
    }

  }

  //clear chart 
  const clearCartHandler = (e) => {
    e.preventDefault();
    setCartItems([])
    setIsUpdate(!isUpdate)
  }

  return (
    <div className="App">
      <Navbar countLength={cartItems.length} isCartShow={isCartShow} setIsCartShow={setIsCartShow} ></Navbar>
      <div className="main-container">
        <Products onAddCart={onAddCart} isLoading={isLoading} products={products}></Products>
        {
          isCartShow
          &&
          <Cart cartItems={cartItems} onAddCart={onAddCart} onRemoveCart={onRemoveCart} isUpdate={isUpdate} clearCartHandler={clearCartHandler}></Cart>
        }
      </div>
    </div>
  );
}

export default App;
