import React from "react";

const CartItem = ({ item, dispatch }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
      <p>{item.name} (x{item.quantity})</p>
      <p>${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
