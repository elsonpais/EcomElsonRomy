import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../layout/Header/Header.js"
import Dialog from '../Dialog.js'; 
import { Component } from 'react';
import { logout } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import {MdClose} from "react-icons/md" 
import { Country, State } from "country-state-city";
import { saveShippingInfo } from "../../actions/cartAction"; 

const Profile = ({ history }) => {

  const firstName = "";
  const lastName = "";

  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);
  const [addressState, setAddressState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const [modal, setModal] = useState(false); 
  const [modal2, setModal2] = useState(false);

  const toggleModal = () => {
    setModal(!modal);

    if(modal) {
      document.body.classList.add('active-modal')
      //document.getElementsByClassName('modal2').style.visibility='hidden';
      //document.getElementsByClassName('modal-content2').style.visibility='hidden';
    } else { 
      document.body.classList.remove('active-modal')
    }

    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
  };

  const toggleModal2 = () => {
    setModal2(!modal2);

    if(modal2) {
      document.body.classList.add('active-modal2') 
      //document.getElementsByClassName('modal').style.visibility='hidden';
      //document.getElementsByClassName('modal-content1').style.visibility='hidden';
    } else {
      document.body.classList.remove('active-modal2')
    } 
  };

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    window.scrollTo(0,0)
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  const state = {
    isOpen: false
  }

  const dispatch = useDispatch();

  // const options = [
  //   { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  // ];

  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  const saveShipping = () => {

    setModal(!modal);

    if(modal) {
      document.body.classList.add('active-modal')
      //document.getElementsByClassName('modal2').style.visibility='hidden';
      //document.getElementsByClassName('modal-content2').style.visibility='hidden';
    } else { 
      document.body.classList.remove('active-modal')
    }

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    // document.body.classList.remove('active-modal')
  }

  const closeShipping = () => {
    setModal(!modal);

    if(modal) {
      document.body.classList.add('active-modal')
      //document.getElementsByClassName('modal2').style.visibility='hidden';
      //document.getElementsByClassName('modal-content2').style.visibility='hidden';
    } else { 
      document.body.classList.remove('active-modal')
    }
  }

  const contactSaveBtn = () => {

    setModal(!modal2);

    if(modal2) {
      document.body.classList.add('active-modal2')
      //document.getElementsByClassName('modal2').style.visibility='hidden';
      //document.getElementsByClassName('modal-content2').style.visibility='hidden';
    } else { 
      document.body.classList.remove('active-modal2')
    }

    // console.log("hello")
    // document.body.classList.remove('active-modal2')

    firstName = document.getElementById("firstname").value
    lastName = document.getElementById("lastname").value
  }

  return (
    // <Fragment>
    //   <Header/> 
    //   {loading ? (
    //     <Loader />
    //   ) : (
    //     <Fragment>
    //       <MetaData title={`${user.name}'s Profile`} />
    //       <div className="profileContainer">
    //         <div>
    //           <h1>My Profile</h1>
    //           <img src={user.avatar.url} alt={user.name} />
    //           <Link to="/me/update">Edit Profile</Link>
    //         </div>
    //         <div>
    //           <div>
    //             <h4>Full Name</h4>
    //             <p>{user.name}</p>
    //           </div>
    //           <div>
    //             <h4>Email</h4>
    //             <p>{user.email}</p>
    //           </div>
    //           <div>
    //             <h4>Joined On</h4>
    //             <p>{String(user.createdAt).substr(0, 10)}</p>
    //           </div>

    //           <div>
    //             <Link to="/orders">My Orders</Link>
    //             <Link to="/password/update">Change Password</Link>
    //           </div>
    //         </div>
    //       </div>
    //     </Fragment>
    //   )}
    // </Fragment>

    <Fragment>
      <div className="profilePage">
        <div className="parent">
          <div className="header2">
            <h2>Account</h2>
            <a onClick={() => logoutUser()}>Sign Out &gt;</a>
          </div>
          <h1>Hi {firstName == "" ? user.name : firstName + lastName}.</h1>
        </div>
         
        <div className="ProfileOrder">
          <h1>Welcome</h1>
          <h4>We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.” – Jeff Bezos, Founder of Amazon</h4>
        </div>

        <div className="OrderContainer">
          <div className="orderCard">
            <h1>Your Orders</h1>
            <p>Track, modify, or cancel an order or make a return.</p>
            <a href=""  onClick={() => history.push("/orders")}>See your order history &gt;</a>
          </div>
          <div className="soCard">
            <h1>Change Password</h1>
            <p>A password change a day keeps the intruder away</p>
            <a href="">Change Password &gt;</a>
          </div>
        </div>
        <div className="accountSettings">
          <h1>Account Settings</h1>
          <div className="shippingInfo">
            <div><h2>Shipping</h2></div>

            <div className="shippingAddr">
              <h4>Shipping Address</h4>
              <p>{user.name}</p>
              <p>India</p> 
              <a onClick={ () => toggleModal()} className="" >Edit</a>
            </div>

            <div className="contactInfo">
              <h4>Contact information</h4>
              <p>{user.email}</p>
              <a onClick={ () => toggleModal2()}>Edit</a>
            </div>
          </div>

          <div className="privacyInfo">
            <div><h2>Privacy</h2></div>

            <div className="PIContainer">
              <h4>Privacy Information</h4>
              <p>
                You're in control of your personal information and can manage your data or delete your account at any time. Apple is committed to protecting your privacy.
              </p>
              <a href="">Manage my personal information &gt;</a>
            </div>
          </div> 

          <div className="EcomIDInfo">
            <div><h2>Ecom ID</h2></div>

            <div className="EcomIDContainer">
              <p>{user.email}</p>
              <a href="">Manage Ecom ID</a>
            </div>
          </div>
        </div>
      </div>
      {/* <Dialog/> */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1>Edit your shipping address.</h1>
            {/* <input placeholder="Address Line 1"></input>
            <input placeholder="Address Line 2 (Optional)"></input>
            <input placeholder="PIN code"></input>
            <input  placeholder="City, State"></input>
            <input placeholder="Country"></input>  */}
            
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            
              <input
                type="number"
                placeholder="Pin Code"
                required
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>

            {country && (

                <select
                  required
                  value={addressState}
                  onChange={(e) => setAddressState(e.target.value)}
                >
                  <option value="">State</option>
                  {State &&
                    State.getStatesOfCountry(country).map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>)}

            <button onClick={() => saveShipping() } className="SaveBtn">Save</button>
            <button onClick={() => closeShipping() } className="CancelBtn">Cancel</button>
            <button className="close-modal" onClick={toggleModal}>
              <MdClose/>
            </button>
          </div>
        </div>
      )}

{modal2 && (
        <div className="modal2">
          <div onClick={toggleModal2} className="overlay2"></div>
          <div className="modal-content2">
            <h1>Edit your contact information.</h1>
            <input id="firstname" placeholder="First Name" ></input>
            <input id="lastname" placeholder="Last Name" ></input>
            <button onClick={() => contactSaveBtn()} className="SaveBtn2">Save</button>
            <button className="CancelBtn2">Cancel</button>
            <button className="close-modal2" onClick={toggleModal2}>
              <MdClose/>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Profile;
