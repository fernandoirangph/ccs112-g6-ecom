import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, total, dispatch }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} dispatch={dispatch} />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
