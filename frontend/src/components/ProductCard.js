import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({
  name,
  price,
  quantity,
  counter,
  onIncrease,
  onDecrease,
  onAddToCart,
}) => {
  return (
    <Card className="product-card">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: {price} HUF</Card.Text>
        <div className="quantity-container">
          <span>Left in stock: {quantity}</span>
        </div>
        <div className="quantity-container2">
          <Button
            variant="primary"
            className="quantity-button"
            onClick={onDecrease}
          >
            -
          </Button>
          <span>{counter}</span>
          <Button
            variant="primary"
            className="quantity-button"
            onClick={onIncrease}
          >
            +
          </Button>
        </div>
        <Button variant="primary" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
