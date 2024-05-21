import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import UserManager from "./pages/UserManager";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from "./pages/Summary";
import BillingAndDeliveryDetails from "./pages/BillingAndDeliveryDetails";

function App() {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({});
  const [counters, setCounters] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const userId = 1;

  useEffect(() => {
    // Fetch user
    const fetchUser = async () => {
      try {
        let response = await fetch(`http://localhost:8080/api/users/${userId}`);
        let user = await response.json();
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    // Fetch cart for current user or create new one
    const fetchCart = async () => {
      try {
        let response = await fetch(
          `http://localhost:8080/api/carts/user/${userId}`
        );
        if (response.ok) {
          let cart = await response.json();
          setCart(cart);
        } else if (response.status === 404) {
          let newCart = {
            user: user,
            total: 0,
            createdAt: new Date(),
            ordered: 0,
          };
          response = await fetch("http://localhost:8080/api/carts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCart),
          });
          if (!response.ok) throw new Error("Error creating cart");
          cart = await response.json();
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    // Fetch cart items
    const fetchCartItems = async () => {
      try {
        let response = await fetch("http://localhost:8080/api/cartItems");
        let cartItems = await response.json();
        setCartItems(cartItems);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchUser();
    fetchCart();
    fetchCartItems();
  }, [cartItems]);

  const handleIncreaseQuantity = async (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: (prevCounters[productId] || 0) + 1,
    }));

    // TODO send update to backend
  };

  const handleDecreaseQuantity = async (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.max((prevCounters[productId] || 0) - 1, 0),
    }));

    // TODO send update to backend
  };

  const handleRemoveItem = async (cartItemId) => {
    try {
      let itemResponse = await fetch(
        `http://localhost:8080/api/cartItems/${cartItemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!itemResponse.ok) throw new Error("Error deleting");
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                counters={counters}
                setCounters={setCounters}
                cart={cart}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
              />
            }
          />
          <Route path="usermanager" element={<UserManager user={user} />} />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                cartItems={cartItems}
                setCartItems={setCartItems}
                counters={counters}
                setCounters={setCounters}
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleRemoveItem={handleRemoveItem}
              />
            }
          />
          <Route
            path="/details"
            element={<BillingAndDeliveryDetails user={user} />}
          />
          <Route
            path="/summary"
            element={
              <Summary
                user={user}
                cart={cart}
                setCart={setCart}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
