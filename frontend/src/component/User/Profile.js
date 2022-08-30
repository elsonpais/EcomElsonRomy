import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../layout/Header/Header.js"
import Dialog from '../Dialog.js';
import { Component } from 'react';

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  const state = {
    isOpen: false
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
            <a href="">Sign Out ></a>
          </div>
          <h1>Hi {user.name}.</h1>
        </div>
        
        <div className="ProfileOrder">
          <h1>Orders</h1>
          <h4>You haven't placed any orders with us. When you do, their status will appear on this page</h4>
        </div>

        <div className="OrderContainer">
          <div className="orderCard">
            <h1>Your Orders</h1>
            <p>Track, modify, or cancel an order or make a return.</p>
            <a href="">See your order history ></a>
          </div>
          <div className="soCard">
            <h1>Change Password</h1>
            <p>A password change a day keeps the intruder away</p>
            <a href="">Change Password ></a>
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
              <a onClick={(e) => this.setState({ isOpen: true })} >Edit</a>
            </div>

            <div className="contactInfo">
              <h4>Contact information</h4>
              <p>{user.email}</p>
              <a href="">Edit</a>
            </div>
          </div>

          <div className="privacyInfo">
            <div><h2>Privacy</h2></div>

            <div className="PIContainer">
              <h4>Privacy Information</h4>
              <p>
                You're in control of your personal information and can manage your data or delete your account at any time. Apple is committed to protecting your privacy.
              </p>
              <a href="">Manage my personal information ></a>
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

        <Dialog show = {true}></Dialog>
      </div>
    </Fragment>
  );
};

export default Profile;
