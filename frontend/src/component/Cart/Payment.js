import React, { Fragment, useEffect, useRef, useState } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
// import { Typography } from "@material-ui/core";
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import "./payment.css";
// import CreditCardIcon from "@material-ui/icons/CreditCard";
// import EventIcon from "@material-ui/icons/Event";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder, clearErrors } from "../../actions/orderAction";
// import Collapsible from "react-collapsible";

const Payment = ({ history }) => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const dispatch = useDispatch();
  const alert = useAlert();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };

  const submitHandler = async() => {

    payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));

          history.push("/success");
        } else {
          alert.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);


  // const collapsibleOptions = {
  //   triggerStyle: {
  //     background: "rgb(241,241,241)",
  //     font: "1.8vmax Poppins",
  //     display: "inline-block",
  //     width: "100%",
  //     margin: "0.5vmax 0",
  //     borderRadius: "7px",
  //     cursor: "pointer"
  //   }
  // };

  const [showOptions,setShowOptions] = useState(true);
  const [showCard, setShowCard] = useState(false);


  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentPage">
        <h1>How do you want to pay?</h1>
        <h2>Select a payment method.</h2>
        {showOptions && (
          <div className="paymentCardContainer">
            <div
              className="paymentCard"
              onClick={() => {
                setShowOptions(false);
                setShowCard(true);
              }}
            >
              <h3>Credit Card or Debit Card</h3>
              <p>Visa, Mastercard, PayPal, RuPay</p>
            </div>
            <div className="paymentCard">
              <h3>Net Banking</h3>
            </div>
            <div className="paymentCard">
              <h3>UPI</h3>
              <p>PhonePe, Paytm, BHIM app, Google pay</p>
            </div>
            <div className="paymentCard">
              <h3>Pay on Delivery</h3>
            </div>
          </div>
        )}
        {showCard && (
          <div className="cardContainer">
            <div className="back">
              <p>&lt;</p>
              <p
                className="backBtn"
                onClick={() => {
                  setShowCard(false);
                  setShowOptions(true);
                }}
              >
                Back
              </p>
            </div>
            <h3>Enter your card information:</h3>
            <CardNumberElement className="cardNumberInput" />
            <div className="flex">
              <CardExpiryElement className="cardExpiryInput" />
              <CardCvcElement className="cardCvcInput" />
            </div>
            <button onClick={()=> submitHandler()} ref={payBtn} className="payBtn">{`Pay  -  Rs. ${
              orderInfo && orderInfo.totalPrice
            }/-`}</button>
          </div>
        )}

        {/* <div className="collapsibleContainer">
          <div className="collapse">
            <button onClick={() => setIsCreditVisible(!isCreditVisible)}>
              Credit Card
            </button>
            {isCreditVisible && (
              <div className="credit" id="credit">
                <form
                  className="paymentForm"
                  onSubmit={(e) => submitHandler(e)}
                >
                  <div>
                    <CreditCardIcon className="paymentIcon" />
                    <CardNumberElement className="paymentInput" />
                  </div>
                  <div>
                    <EventIcon className="paymentIcon" />
                    <CardExpiryElement className="paymentInput" />
                  </div>
                  <div>
                    <VpnKeyIcon className="paymentIcon" />
                    <CardCvcElement className="paymentInput" />
                  </div>

                  <input
                    type="submit"
                    value={`Pay  Rs. ${orderInfo && orderInfo.totalPrice}/-`}
                    ref={payBtn}
                    className="paymentFormBtn"
                  />
                </form>
              </div>
            )}
          </div>
          <div className="collapse">
            <button>
              Debit Card
            </button>
            
          </div>
          <div className="collapse">
            <button>
              Pay on Delivery
            </button>
            
          </div>
        </div> */}

        {/* <div className="paymentContainer">
          <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
            <Typography>Card Info</Typography>
            <div>
              <CreditCardIcon />
              <CardNumberElement className="paymentInput" />
            </div>
            <div>
              <EventIcon />
              <CardExpiryElement className="paymentInput" />
            </div>
            <div>
              <VpnKeyIcon />
              <CardCvcElement className="paymentInput" />
            </div>

            <input
              type="submit"
              value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
              ref={payBtn}
              className="paymentFormBtn"
            />
          </form>
        </div> */}
      </div>
    </Fragment>
  );
};

export default Payment;
