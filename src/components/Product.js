import React from "react";
/*lamis*/
const Product = ({ product, dispatch }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "200px" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%" }} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;