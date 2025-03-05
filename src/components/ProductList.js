import React from "react";
import Product from "./Product";

const ProductList = ({ products, dispatch }) => {
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Product key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

