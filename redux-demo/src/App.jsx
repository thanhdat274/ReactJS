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
  const [products, setProducts] = useState([]);
  const fetchProduct = async function () {
    const data = await (
      await fetch("https://62de615accdf9f7ec2d66ae3.mockapi.io/api/products")
    ).json();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <Product product={products}/>
      <Cart/>
    </div>
  )
}

export default App;
