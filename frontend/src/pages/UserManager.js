import React from "react";
import BillingAndDeliveryDetails from "./BillingAndDeliveryDetails";

const UserManager = ({ user }) => {
  return (
    <div className="UserManager">
      <h2>User data</h2>
      {user && (
        <form>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-1 col-form-label">
              First Name:
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder={user.firstName}
              />
            </div>
            <label htmlFor="lastName" className="col-sm-1 col-form-label">
              Last Name:
            </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder={user.lastName}
              />
            </div>
            <label
              className="col-sm-1 col-form-label"
              htmlFor="inlineFormInputGroupUsername"
            >
              Username:
            </label>
            <div className="col">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername"
                  placeholder={user.userName}
                />
              </div>
            </div>
          </div>

          <BillingAndDeliveryDetails user={user} buttonVisibility={false} />

          <button type="button" className="btn btn-primary">
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default UserManager;
