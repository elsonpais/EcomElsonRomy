import React from "react";
import {useRef, useState} from "react"
import {
  FaBars,
  FaTimes,
  FaUserAlt,
  FaRegUser,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
// import logo from "../../../images/logo.png";
// import Fragment from "react"
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai"; 
import {ImHome, ImCart} from "react-icons/im"
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import {IoClose} from "react-icons/io5"
import { HiOutlineUser } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { RiStore2Line } from "react-icons/ri";
import { useHistory } from "react-router-dom";

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

  // const [search, setSearch] = useState("");
  // const searchText = ""

  const body = document.body;
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      body.classList.remove("scroll-up");
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down") && currentScroll > ((10*document.documentElement.clientHeight)/100)) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
  })

  const history = useHistory();
  const navRef = useRef();
  const searchRef = useRef();
  // const closeButton = document.querySelector(".search-container .close-search");
  const searchvisi = useRef();
  const closeButton = document.querySelector(".search-container .close-search");

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  const searchBtn = () => {
    searchvisi.current.classList.add("hide")
    navRef.current.classList.add("hide")
    searchRef.current.classList.remove("hide")
  }
  const close_search = () => {
    searchvisi.current.classList.remove("hide")
    navRef.current.classList.remove("hide")
    searchRef.current.classList.add("hide")
  }

  const homeNavBtn = () => {
    history.push("/");
  }

  const cartNavBtn = () => {
    history.push("/cart");
  }

  const profileBtn = () => {
    history.push("/account");
  }

  const storeBtn = () => {
    history.push("/products");
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      
      history.push(`/products/:${document.getElementById("searchText").value}`) 
    }
  }

  return (
    <>
      <header>

        <nav>
        <div ref={navRef} className="leftNav">
        <IoCartOutline className="logoIcon" />
            <h3>SHOPPABLE</h3>
          </div>
        <div ref={navRef} className="orange_nav"><img src="https://th.bing.com/th/id/R.fcb07201723665e2b3073a21430dd62a?rik=AeI5ifj%2bJweb3g&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-10%2fOrange-Abstract-Shape-Background-Wallpaper-28389.jpg&ehk=ypjsA6IOuR1FFjY9MfrTGTf%2bSrYlmzV%2b47HJC8fJ1KM%3d&risl=&pid=ImgRaw&r=0"></img></div>
          
          <div ref={navRef} className="rightNav">
            <div className="navBtns">
              <button onClick={homeNavBtn}>
                <IoHomeOutline className="navIcon" />
                Home
              </button>
              <button onClick={storeBtn}>
                <RiStore2Line className="navIcon" />
                Store
              </button>
              <button onClick={cartNavBtn}>
                <IoCartOutline className="navIcon navIconCart" />
                Cart
              </button>
              <button onClick={profileBtn}>
                <FiUser className="navIcon navIconUser" />
                Profile
              </button>
              <button ref={searchvisi} onClick={() => searchBtn()}>
                <AiOutlineSearch className="navIcon navIconSearch" />
                Search
              </button> 
            </div>
          </div>

          <div ref={searchRef} class="search-container hide">
		   			{/* <div class="search"></div> */}
		   			<div class="search-bar">
		   				<form onSubmit={() => history.push(`/products/${document.getElementById("searchText").value}`)}>
		   					<input 
                  id="searchText"
                  type="text"
                  placeholder="Search"
                //  value={searchText}
                //  onKeyDown={() => handleKeyDown()}
                 />
		   				</form>
		   			</div>
		   			<div onClick={close_search} class="close-search"><IoClose/></div>
          </div> 

        </nav>
      </header>
    </>
  ); 
};

export default Header;
