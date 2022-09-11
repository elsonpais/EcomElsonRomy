import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { useHistory } from "react-router-dom";

const Footer = () => {

  const history = useHistory();

  return (
    <footer id="footer">
      <div className="top">
        <div className="first">
          <h3>Sitemap</h3>
          <a onClick={() => history.push("/")}>Home</a>
          <a onClick={() => history.push("/products")}>Products</a>
          <a onClick={() => history.push("/cart")}>Cart</a>
          <a onClick={() => history.push("/account")}>Account</a>
          <a onClick={() => history.push("/orders")}>Orders</a>
        </div>
        <div className="second">
          <h3>Support</h3>
          <a>FAQs</a>
          <a onClick={() => history.push("/contact")}>Contact Us</a>
        </div>
        <div className="third">
          <h3>Be The First To Know</h3>
          <p>Sign up to our emails to receive exclusive drops and discounts.</p>
          <div className="subscribeForm">
            <input placeholder="Enter your name" />
            <input placeholder="Enter email address" />
            <button>Sign Up</button>
          </div>
        </div>
        <div className="fourth">
          <h3>Contact Details</h3>
          <a>ecomelsonromy@gmail.com</a>
          <div className="socialIcons">
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662293538/social%20icons/image-removebg-preview_6_xfwxfk.png"
                alt="instagram"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662293645/social%20icons/image-removebg-preview_7_hkk617.png"
                alt="facebook"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662294585/social%20icons/image-removebg-preview_10_hltm8k.png"
                alt="twitter"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662293992/social%20icons/image-removebg-preview_9_en3xsm.png"
                alt="gmail"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomLeft">
          <p>
            &copy;&nbsp;&nbsp;2022&nbsp;&nbsp;EcomElsonRomy.&nbsp;&nbsp;All
            rigths reserved.
          </p>
        </div>
        <div className="bottomRight">
          <div className="paymentIcons">
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662299651/social%20icons/visa-logo-800x450-removebg-preview_mxpxwj.png"
                alt="visa"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662299749/social%20icons/Mastercard_logo.0-removebg-preview_fhdakl.png"
                alt="mastercard"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662299906/social%20icons/paypal-logo-white-background-vector-image-eps-72682465-removebg-preview_eo8zxn.png"
                alt="paypal"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662299961/social%20icons/rupay-vector-logo-removebg-preview_zpoc9k.png"
                alt="rupay"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662300028/social%20icons/PhonePe-Logo.wine-removebg-preview_h49yvl.png"
                alt="phonepe"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662300087/social%20icons/paytm_logo_official_small-removebg-preview_up3veb.png"
                alt="paytm"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662300123/social%20icons/bharat-interface-for-money-bhim-logo-vector-removebg-preview_kfhzec.png"
                alt="bhim app"
              />
            </a>
            <a>
              <img
                src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662300173/social%20icons/Google-Pay-780x470-removebg-preview_ujvzda.png"
                alt="google pay"
              />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MeAbhiSingh</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div> */}
    </footer>
  );
};

export default Footer;
