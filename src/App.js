import React, { useReducer, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

/* irang */

const initialState = {
  products: [],
  cart: [],
  total: 0,
};

const cartReducer = (state, action) => { /*card reducer*/
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_TO_CART":
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };

    case "CLEAR_CART":
      return { ...state, cart: [], total: 0 };

    case "UPDATE_TOTAL":
      const newTotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { ...state, total: newTotal };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    dispatch({
      type: "SET_PRODUCTS",
      payload: [
        { id: 1, name: "Product 1", price: 5, image: "" },
        { id: 2, name: "Product 2", price: 20, image: "" },
        { id: 3, name: "Product 3", price: 30, image: "" },
      ],
    });
  }, []);

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTAL" });
  }, [state.cart]);

  return (
    <div>
      <h1>Simple E-commerce App</h1>
      <ProductList products={state.products} dispatch={dispatch} />
      <Cart cart={state.cart} total={state.total} dispatch={dispatch} />
    </div>
  );
}

export default App;
