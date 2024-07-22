import { useEffect, useReducer, useState } from "react";
import Cart from "./Cart";
import Products from "./Products";
import "./styles.css";
import reducer from "./cartReducer";

export default function App() {
  const [cart, setCart] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
  });
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    dispatch({ type: "ADD_Products", payload: data.products });
  };

  return (
    <div className="App">
      <div className="header">
        <h4>Products</h4>
        <span onClick={() => setCart(!cart)}>{!cart ? "Cart" : "GoBack"}</span>
      </div>
      {!cart && <Products state={state} dispatch={dispatch} />}
      {cart && <Cart state={state} dispatch={dispatch} />}
    </div>
  );
}
