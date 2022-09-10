import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactDOM from "react-dom";
import Slider from "react-elastic-carousel";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Item from "./Item"; 
import {Carousel} from "react-responsive-carousel";

const sliderOptions = {
  pagination: false
}

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const carouselOptions = {
    autoPlay: true,
    infiniteLoop: true,
    showThumbs: false,
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const categories = [
    {
      name: "Laptop",
      iconUrl:
        "https://res.cloudinary.com/dnkthwagt/image/upload/v1661109561/carousel%20images/a_qwurfc.png",
    },
    {
      name: "Footwear",
      iconUrl:
        "https://res.cloudinary.com/dnkthwagt/image/upload/v1661109659/carousel%20images/a_yu6e0j.png",
    },
    {
      name: "Clothing",
      iconUrl:
        "https://res.cloudinary.com/dnkthwagt/image/upload/v1661110047/carousel%20images/a_d3fkqj.png",
    },
    {
      name: "Cameras",
      iconUrl:
        "https://res.cloudinary.com/dnkthwagt/image/upload/v1661110254/carousel%20images/a_xz8zo6.png",
    },
    {
      name: "SmartPhones",
      iconUrl:
        "https://res.cloudinary.com/dnkthwagt/image/upload/v1661110314/carousel%20images/a_e0oerf.png",
    },
    {
      name: "Appliances",
      iconUrl:
        "https://res.cloudinary.com/dnkthwagt/image/upload/v1661110357/carousel%20images/a_dzzurq.png",
    },
    {
      name: "Beauty",
      iconUrl:
        "https://res.cloudinary.com/dnkthwagt/image/upload/v1661110389/carousel%20images/a_la1ipr.png",
    },
  ];



  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          {/* <div className="carouselBoot">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 carouselHeight"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105779/carousel%20images/banner1_w8ot3f.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105238/carousel%20images/banner2_omwu2p.png"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105238/carousel%20images/banner3_ptban8.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105238/carousel%20images/banner4_nox56w.png"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105237/carousel%20images/banner5_whiy7m.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div> */}

          <div className="carousel">
            <Carousel {...carouselOptions}>
              <div>
                <img
                  alt="banner1"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105779/carousel%20images/banner1_w8ot3f.jpg"
                />
              </div>
              <div>
                <img
                  alt="banner2"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105238/carousel%20images/banner2_omwu2p.png"
                />
              </div>
              <div>
                <img
                  alt="banner3"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105238/carousel%20images/banner3_ptban8.png"
                />
              </div>
              <div>
                <img
                  alt="banner4"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105238/carousel%20images/banner4_nox56w.png"
                />
              </div>
              <div>
                <img
                  alt="banner5"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661105237/carousel%20images/banner5_whiy7m.jpg"
                />
              </div>
            </Carousel>
          </div>

          {/* <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div> */}

          {/* <div className="greyContainer"> */}
            <div className="categoriesContainer">
              <h2 className="homeHeading">Categories</h2>
                <Slider breakPoints={breakPoints} {...sliderOptions}>
                  {/* <div className="categoriesList"> */}
                  {categories.map((category) => ( 
                    <Link className="category">
                      <Item>
                        <img
                          className="categoryIcon"
                          alt={category.name}
                          src={category.iconUrl}
                        />
                        <p className="categoryName">{category.name}</p>
                      </Item>
                    </Link>
                  ))}
                  {/* </div> */}
                </Slider>
            </div>
          {/* </div> */}

          <div className="greyContainer">
            <h2 className="homeHeading">Trending Now.</h2>
            <div className="productsContainer" id="productsContainer">
              {products &&
                products
                  .slice(0, 8)
                  .map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
            </div>
            <button className="productsBtn">View All</button>
          </div>

          <div className="greyContainer">
            <h2 className="homeHeading">New Arrivals.</h2>
            <div className="productsContainer" id="productsContainer">
              {products &&
                products
                  .slice(0, 8)
                  .map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
            </div>
            <button className="productsBtn">View All</button>
          </div>

          {/* <h2 className="homeHeading">Featured Products</h2>

          <div className="productsContainer" id="productsContainer">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div> */}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
