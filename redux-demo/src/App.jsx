import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Product from "./components/product/product";
import Cart from "./components/cart/cart";
import { GETPRODUCT } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const store = useSelector(store => store)
  console.log(store);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GETPRODUCT)
  }, [])
  return (
    <div>
      <Product product={store.products}/>
      <Cart/>
    </div>
  )
}

export default App;
