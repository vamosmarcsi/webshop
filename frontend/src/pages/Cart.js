import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Cart = ({
  cartItems,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  handleRemoveItem,
}) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,0);
  };

  return (
    <div>
      <h1>Cart</h1>
      <div className="card-container">
        {cartItems.map((item) => (
          <Card className="product-card" key={item.id}>
            <Card.Body>
              <Card.Title>{item.productName}</Card.Title>
              <Card.Text>Price: {item.price} HUF</Card.Text>
              <Card.Text>Total price: {item.quantity * item.price} HUF</Card.Text>
              <div>
                <Button
                  variant="primary"
                  className="quantity-button"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="primary"
                  className="quantity-button"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </Button>
              </div>
              <div>
                <Button
                  variant="primary"
                  className="quantity-button"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>Total: {calculateTotalPrice()} HUF</div>
      <Link to={"/details"}>
        <Button variant="primary" className="go-to-delivery-button">
          Go to delivery information
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
