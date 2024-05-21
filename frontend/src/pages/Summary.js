import { Card, Button } from "react-bootstrap";

const Summary = ({ user, cart, setCart, cartItems, setCartItems }) => {
  const handleSubmit = async () => {
    try {
      let updatedCart = {
        ...cart,
        createdAt: new Date(),
      };

      let cartResponse = await fetch(
        `http://localhost:8080/api/carts/${cart.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCart),
        }
      );

      if (!cartResponse.ok) {
        console.error("Failed to update cart");
        return;
      }

      for (let item of cartItems) {
        let itemResponse = await fetch(
          `http://localhost:8080/api/cartItems/${item.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!itemResponse.ok) {
          console.error(`Failed to delete cart item with id: ${item.id}`);
        }
      }

      setCart(updatedCart);
      setCartItems([]);
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  return (
    <>
      <h2>User Information</h2>
      <div className="form-group row">
        <label className="col-sm-1 col-form-label">First Name: </label>
        <div className="col">
          <p className="form-control-plaintext">{user.firstName}</p>
        </div>
        <label className="col-sm-1 col-form-label">Last Name: </label>
        <div className="col">
          <p className="form-control-plaintext">{user.lastName}</p>
        </div>
        <label className="col-sm-1 col-form-label">Username: </label>
        <div className="col">
          <p className="form-control-plaintext">@{user.userName}</p>
        </div>
      </div>
      <div className="form-group row">
        <h4>Billing Address</h4>
        <label htmlFor="zipCode" className="col-sm-1 col-form-label">
          Zip Code:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="zipCode"
            placeholder={user.billingAddress.zipCode}
          />
        </div>
        <label htmlFor="city" className="col-sm-1 col-form-label">
          City:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder={user.billingAddress.city}
          />
        </div>
        <label htmlFor="houseNumber" className="col-sm-1 col-form-label">
          House Number:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="houseNumber"
            placeholder={user.billingAddress.houseNumber}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="flat" className="col-sm-1 col-form-label">
          Flat:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="flat"
            placeholder={user.billingAddress.flat}
          />
        </div>
        <label htmlFor="stairs" className="col-sm-1 col-form-label">
          Stairs:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="stairs"
            placeholder={user.billingAddress.stairs}
          />
        </div>
        <label htmlFor="door" className="col-sm-1 col-form-label">
          Door:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="door"
            placeholder={user.billingAddress.door}
          />
        </div>
      </div>
      <div className="form-group row">
        <h4>Mailing Address</h4>
        <label htmlFor="zipCode" className="col-sm-1 col-form-label">
          Zip Code:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="zipCode"
            placeholder={user.deliveryAddress.zipCode}
          />
        </div>
        <label htmlFor="city" className="col-sm-1 col-form-label">
          City:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder={user.deliveryAddress.city}
          />
        </div>
        <label htmlFor="houseNumber" className="col-sm-1 col-form-label">
          House Number:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="houseNumber"
            placeholder={user.deliveryAddress.houseNumber}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="flat" className="col-sm-1 col-form-label">
          Flat:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="flat"
            placeholder={user.deliveryAddress.flat}
          />
        </div>
        <label htmlFor="stairs" className="col-sm-1 col-form-label">
          Stairs:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="stairs"
            placeholder={user.deliveryAddress.stairs}
          />
        </div>
        <label htmlFor="door" className="col-sm-1 col-form-label">
          Door:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="door"
            placeholder={user.deliveryAddress.door}
          />
        </div>
      </div>
      <div className="card-container">
        <h1>Cart</h1>
        {cartItems.map((item) => (
          <Card className="product-card" key={item.id}>
            <Card.Body>
              <Card.Title>{item.productName}</Card.Title>
              <Card.Text>Price: {item.price} HUF</Card.Text>
              <Card.Text>Quantity: {item.quantity}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
        <Button
          variant="primary"
          className="submit-button"
          onClick={() => handleSubmit()}
        >
          Submit order
        </Button>
      </div>
    </>
  );
};

export default Summary;
