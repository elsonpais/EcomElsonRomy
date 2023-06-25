import React from "react";
import { Link } from "react-router-dom";
//import { Rating } from "@material-ui/lab";
import Fragment from "react"
import "./OrderCard.css"
import { useSelector, useDispatch } from "react-redux";

const OrderCard = ({ item, status, date }) => {

  const { loading, error, orders } = useSelector((state) => state.myOrders);

  const rows = []
//   const options = {
//     value: product.ratings,
//     readOnly: true,
//     precision: 0.5,
//   };

// orders &&
//     orders.forEach((order, index) => {
//         rows.push({
//           status: order.orderStatus
//         })
//     });

 console.log(item.orderStatus)
  return (
    // <Fragment>
        <Link className="OrderProductImageContainer">
            <img src={item.image}></img>
            
            <div className="orderInfo">
              <p>{(item.name.length > 33 ? item.name.substring(0,33)+".." : item.name)}</p>
          
              <p>{`₹${item.price}`}</p>
            </div>

            <div className="OrderShippingInfo">
              <h2>{(status == "Processing" ? `Arrives ${new Date((new Date(date)).getTime()+60480000).toDateString().substring(0,10)}` : `Delivered ${Date(date).substring(0, 10)}`)}</h2>
            </div>
        </Link>  
    // {/* </Fragment> */}
  );
};

export default OrderCard;
