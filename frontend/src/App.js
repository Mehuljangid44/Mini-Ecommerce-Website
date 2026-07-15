import './App.css';

import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"

import Cart from "./components/Cart"

import Checkout from './components/Checkout';
import { use, useState } from 'react';

import Admin  from './components/Admin';


function App() {

  const [refresh , setRefresh] = useState(false);
  const [cart,setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  const removeFromCart = (index) => {
    const copy = [...cart];
    copy.splice(index, 1);
    setCart(copy)
  };



  const clearCart = () => {

    setCart([]);

  };

  const refreshProducts =() => {
setRefresh(!refresh);
window.location.reload();

  };

return (

          <div>

            <Navbar  cartCount={cart.length}/>
            <Admin refreshProducts={refreshProducts} />
            <ProductList addToCart={addToCart} refresh={refresh}/>

            <Cart  cart={cart} removeFromCart={removeFromCart} />

            <Checkout cart={cart} clearCart={clearCart} />


          </div>

);


}

export default App;