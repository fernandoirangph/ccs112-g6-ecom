// src/App.js
import React, { Component } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],  // (3) Stores product list
      cart: [],      // (3) Stores cart items
      searchQuery: "" // (5) Stores search input
    };
  }

  // (4) Lifecycle Method - Fetch products when component mounts
  componentDidMount() {
    const fakeProducts = [
      { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/100" },
      { id: 2, name: "Phone", price: 20000, image: "https://via.placeholder.com/100" },
      { id: 3, name: "Tablet", price: 15000, image: "https://via.placeholder.com/100" }
    ];
    this.setState({ products: fakeProducts });
  }

  // (3) Add to Cart
  addToCart = (product) => {
    this.setState((prevState) => {
      const cartItem = prevState.cart.find((item) => item.id === product.id);
      if (cartItem) {
        return {
          cart: prevState.cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return { cart: [...prevState.cart, { ...product, quantity: 1 }] };
      }
    });
  };

  // (3) Remove from Cart
  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id),
    }));
  };

  // (3) Clear Cart
  clearCart = () => {
    this.setState({ cart: [] });
  };

  // (5) Search Product
  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  // (4) Lifecycle Method - Update total price when cart changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      console.log("Cart updated:", this.state.cart);
    }
  }

  render() {
    // (5) Filter products based on search query
    const filteredProducts = this.state.products.filter((product) =>
      product.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <div style={{ padding: "20px" }}>
        <h1>Shopping App</h1>

        {/* (5) Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />

        {/* (1) Product Listing */}
        <ProductList products={filteredProducts} addToCart={this.addToCart} />

        {/* (2) Shopping Cart */}
        <Cart cart={this.state.cart} removeFromCart={this.removeFromCart} clearCart={this.clearCart} />
      </div>
    );
  }
}

export default App;
