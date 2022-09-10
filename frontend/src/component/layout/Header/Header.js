import React from "react";
import {useRef} from "react"
import {FaBars, FaTimes, FaUserAlt} from "react-icons/fa"
// import logo from "../../../images/logo.png";
// import Fragment from "react"
import {AiOutlineSearch} from "react-icons/ai" 
import {ImHome, ImCart} from "react-icons/im"
import {IoClose} from "react-icons/io5"

// const options = {
//   burgerColorHover: "#eb4034",
//   logo,
//   logoWidth: "20vmax", 
//   navColor1: "white",
//   logoHoverSize: "10px",
//   logoHoverColor: "#eb4034",
//   link1Text: "Home",
//   link2Text: "Products",
//   link3Text: "Contact",
//   link4Text: "About",
//   link1Url: "/",
//   link2Url: "/products",
//   link3Url: "/contact",
//   link4Url: "/about",
//   link1Size: "1.3vmax",
//   link1Color: "rgba(35, 35, 35,0.8)",
//   nav1justifyContent: "flex-end",
//   nav2justifyContent: "flex-end",
//   nav3justifyContent: "flex-start",
//   nav4justifyContent: "flex-start",
//   link1ColorHover: "#eb4034",
//   link1Margin: "1vmax",
//   profileIconUrl: "/login",
//   profileIconColor: "rgba(35, 35, 35,0.8)",
//   searchIconColor: "rgba(35, 35, 35,0.8)",
//   cartIconColor: "rgba(35, 35, 35,0.8)",
//   profileIconColorHover: "#eb4034",
//   searchIconColorHover: "#eb4034",
//   cartIconColorHover: "#eb4034",
//   cartIconMargin: "1vmax",
// };

const Header = () => {
  const navRef = useRef();
  const searchRef = useRef();
  // const closeButton = document.querySelector(".search-container .close-search");

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const searchBtn = () => {
    navRef.current.classList.add("hide")
    searchRef.current.classList.remove("hide")
  }
  const close_search = () => {
    navRef.current.classList.remove("hide")
    searchRef.current.classList.add("hide")
  }

  return (<> 
    <header>
      <div className="orange_nav"><img src="https://th.bing.com/th/id/R.fcb07201723665e2b3073a21430dd62a?rik=AeI5ifj%2bJweb3g&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-10%2fOrange-Abstract-Shape-Background-Wallpaper-28389.jpg&ehk=ypjsA6IOuR1FFjY9MfrTGTf%2bSrYlmzV%2b47HJC8fJ1KM%3d&risl=&pid=ImgRaw&r=0"></img></div>
      <h3 className="logo">LOGO</h3>
      <nav ref={navRef}>
        
        <a href=""><ImHome className="minicon1"/>Home</a>
        <a href=""><ImCart className="minicon2"/>Cart</a>
        <a href=""><FaUserAlt className="minicon3"/>Profile</a> 
        <a onClick={searchBtn}><AiOutlineSearch className="icon" /></a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes/></button>
      </nav>
      <div ref={searchRef} class="search-container hide">
		   			<div class="search"></div>
		   			<div class="search-bar">
		   				<form>
		   					<input type="text" placeholder="Search"/>
		   				</form>
		   			</div>
		   			<div onClick={close_search} class="close-search"><IoClose/></div>
      </div> 
      <button className="nav-btn" onClick={showNavbar}><FaBars/></button>
    </header>
  </>); 
};

export default Header;
