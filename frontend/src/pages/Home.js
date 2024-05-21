import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ProductList from "../components/ProductList";

const Home = ({
  user,
  counters,
  cart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [products]);

  const handleAddToCart = async (productId) => {
    const product = products.find((product) => product.id === productId);
    if (product) {
      try {
        let cartItem = {
          productName: product.productName,
          category: product.category,
          quantity: counters[productId],
          price: product.price,
        };

        let response = await fetch(
          `http://localhost:8080/api/carts/${cart.id}/items`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(cartItem),
          }
        );

        if (response.ok) {
          let createdCartItem = await response.json();
          console.log(`Added ${createdCartItem.productName} to cart`);
        }
      } catch (error) {
        console.error("Error adding product to cart:", error);
      }
    }
  };

  return (
    <Container>
      <ProductList
        products={products}
        counters={counters}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
        onAddToCart={handleAddToCart}
      />
    </Container>
  );
};

export default Home;
