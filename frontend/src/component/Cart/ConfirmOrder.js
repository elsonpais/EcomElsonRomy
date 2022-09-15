import React, { Fragment, useEffect } from "react";
// import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
// import { Typography } from "@material-ui/core";

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = Math.round(cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  ));

  const shippingCharges = subtotal > 1000 ? 0 : 50;

  const tax = Math.round(subtotal * 0.18);

  const totalPrice = Math.round(subtotal + tax + shippingCharges);

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      tax,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      {/* <CheckoutSteps activeStep={1} /> */}
      <div className="confirmOrderPage">
        <div className="left">
          <div className="confirmshippingArea">
            <h2>Shipping Info</h2>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
              <div className="edit">
                <button onClick={() => history.push("/shipping")}>Edit</button>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <h2>Your Cart Items</h2>
            <div className="cartHeader">
              <p>Items</p>
              <p>Quantity X Price</p>
            </div>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X Rs. {item.price} ={" "}
                      <b>Rs. {item.price * item.quantity}/-</b>
                    </span>
                  </div>
                ))}
            </div>
            <div className="edit2">
              <button onClick={() => history.push("/cart")}>Edit</button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="right">
          <div className="orderSummary">
            <h3>Order Summary</h3>
            <div>
              <div>
                <p>Subtotal</p>
                <span>Rs. {subtotal}/-</span>
              </div>
              <div>
                <p>Shipping Charges</p>
                {shippingCharges > 0 ? (
                  <span>Rs. {shippingCharges}/-</span>
                ) : (
                  <h5 className="free">Free</h5>
                )}
              </div>
              <div>
                <p>GST</p>
                <span>Rs. {tax}/-</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total</b>
              </p>
              <b>
                <span>Rs. {totalPrice}/-</span>
              </b>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
