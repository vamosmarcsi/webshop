import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BillingAndDeliveryDetails = ({ user, buttonVisibility = true }) => {
  return (
    <>
      <h3>Billing Address</h3>
      <div className="form-group row">
        <label htmlFor="inputZipCode" className="col-sm-1 col-form-label">
          Zip Code:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputZipCode"
            placeholder={user.billingAddress.zipCode}
          />
        </div>
        <label htmlFor="inputCity" className="col-sm-1 col-form-label">
          City:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder={user.billingAddress.city}
          />
        </div>
        <label htmlFor="inputHouseNumber" className="col-sm-1 col-form-label">
          House Number:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputHouseNumber"
            placeholder={user.billingAddress.houseNumber}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputFlat" className="col-sm-1 col-form-label">
          Flat:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputFlat"
            placeholder={user.billingAddress.flat}
          />
        </div>
        <label htmlFor="inputStairs" className="col-sm-1 col-form-label">
          Stairs:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputStairs"
            placeholder={user.billingAddress.stairs}
          />
        </div>
        <label htmlFor="inputDoor" className="col-sm-1 col-form-label">
          Door:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputDoor"
            placeholder={user.billingAddress.door}
          />
        </div>
      </div>

      <h3>Mailing Address</h3>

      <div className="form-group row">
        <label htmlFor="inputZipCode" className="col-sm-1 col-form-label">
          Zip Code:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputZipCode"
            placeholder={user.deliveryAddress.zipCode}
          />
        </div>
        <label htmlFor="inputCity" className="col-sm-1 col-form-label">
          City:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder={user.deliveryAddress.city}
          />
        </div>
        <label htmlFor="inputHouseNumber" className="col-sm-1 col-form-label">
          House Number:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputHouseNumber"
            placeholder={user.deliveryAddress.houseNumber}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="inputFlat" className="col-sm-1 col-form-label">
          Flat:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputFlat"
            placeholder={user.deliveryAddress.flat}
          />
        </div>
        <label htmlFor="inputStairs" className="col-sm-1 col-form-label">
          Stairs:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputStairs"
            placeholder={user.deliveryAddress.stairs}
          />
        </div>
        <label htmlFor="inputDoor" className="col-sm-1 col-form-label">
          Door:
        </label>
        <div className="col">
          <input
            type="text"
            className="form-control"
            id="inputDoor"
            placeholder={user.deliveryAddress.door}
          />
        </div>
      </div>
      {buttonVisibility && (
        <Link to={"/summary"}>
          <Button variant="primary" className="got-to-summary-button">
            Go to summary and submit order
          </Button>
        </Link>
      )}
    </>
  );
};

export default BillingAndDeliveryDetails;
