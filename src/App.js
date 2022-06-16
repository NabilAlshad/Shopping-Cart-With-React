
import './App.css';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="main-container">
        <Products className="productName"></Products>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
