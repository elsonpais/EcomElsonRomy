import React, { Fragment } from "react";
import "./Cart.css";
// import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>No Products in Your Cart</Typography>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="greyContainerCart">
            <div className="cartSection">
              <h3>Your Cart</h3>
              <div className="cartHeader">
                <p>Items</p>
                <p>Price</p>
              </div>
              <div className="items">
                {cartItems &&
                  cartItems.map((item) => (
                    <div className="item">
                      <Link to={`/product/${item.product}`}>
                        <img
                          className="item-image"
                          src={item.image}
                          alt={item.name}
                        />
                      </Link>
                      <div className="item-details">
                        <Link
                          to={`/product/${item.product}`}
                          style={{ textDecoration: "none" }}
                        >
                          <h4 className="item-name">{item.name}</h4>
                        </Link>

                        {item.stock < 11 && (
                          <p className="stockLeft">
                            Only {item.stock} left in stock.
                          </p>
                        )}

                        <div className="itemQuantity">
                          <button
                            onClick={() =>
                              decreaseQuantity(item.product, item.quantity)
                            }
                          >
                            -
                          </button>
                          <input type="number" value={item.quantity} readOnly />
                          <button
                            onClick={() =>
                              increaseQuantity(
                                item.product,
                                item.quantity,
                                item.stock
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="remove"
                          onClick={() => deleteCartItems(item.product)}
                        >
                          Remove
                        </button>
                      </div>
                      <p className="item-price">Rs. {item.price}/-</p>
                    </div>
                  ))}
              </div>
            </div>
            <div className="priceSection">
              <h3>Price Details</h3>
              <div className="subtotal">
                <h5>SubTotal ({cartItems.length} items)</h5>
                <h5>
                  Rs.{" "}
                  {cartItems.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )}
                  /-
                </h5>
              </div>
              <div className="shippingCharges">
                <h5>Shipping Charges</h5>
                {cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                ) > 1000 ? (
                  <h5 className="free">Free</h5>
                ) : (
                  <h5>Rs. 50/-</h5>
                )}
              </div>
              <div className="total">
                <h4>Total</h4>
                {cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                ) > 1000 ? (
                  <h4>
                    Rs.{" "}
                    {Math.round(cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    ))}
                    /-
                  </h4>
                ) : (
                  <h4>
                    Rs.{" "}
                    {cartItems.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0
                    ) + 50}
                    /-
                  </h4>
                )}
              </div>
              <div className="checkout">
                <button onClick={checkoutHandler}>Proceed to buy</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
