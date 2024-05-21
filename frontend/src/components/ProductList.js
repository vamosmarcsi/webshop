import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  counters,
  onIncrease,
  onDecrease,
  onAddToCart,
}) => {
  return (
    <div className="ProductList">
      <h2>Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={6} md={4}>
            <ProductCard
              name={product.productName}
              price={product.price}
              quantity={product.quantity}
              counter={counters[product.id] || 0}
              onIncrease={() => onIncrease(product.id)}
              onDecrease={() => onDecrease(product.id)}
              onAddToCart={() => onAddToCart(product.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
