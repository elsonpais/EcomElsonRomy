import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ReactDOM from "react-dom";
import Slider from "react-elastic-carousel";
import { Link } from "react-router-dom";
import Item from "./Item"; 
import {Carousel} from "react-responsive-carousel";
import { useHistory } from "react-router-dom";

const sliderOptions = {
  pagination: false
}

const Home = () => {
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  const carouselOptions = {
    autoPlay: true,
    infiniteLoop: true,
    showThumbs: false,
    showIndicators: false,
    showArrows: false,
    stopOnHover: false,
    showStatus: false
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
    window.scrollTo(0,0);
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
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661931754/carousel%20images/Stone-Sale-Banner1-scaled_mdglgh.jpg"
                />
              </div>
              {/* <div>
                <img
                  alt="banner3"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661930904/carousel%20images/banner3_ptban8_1_cirbc3.png"
                />
              </div> */}
              <div>
                <img
                  alt="banner4"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661932492/carousel%20images/KV_Big-TV-days-1920x1080_ouhwpl.jpg"
                />
              </div>
              <div>
                <img
                  alt="banner5"
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1661934629/carousel%20images/E-lQnL_VgAcSRjK_dyitru.jpg"
                />
              </div>
            </Carousel>
          </div>

          {/* <div className="greyContainerHome"> */}
          <div className="categoriesContainer">
            <h2>Categories.</h2>
            <Slider breakPoints={breakPoints} {...sliderOptions}>
              {/* <div className="categoriesList"> */}
              {categories.map((category) => (
                <Link
                  to={`/products/${category.name.toLowerCase()}`}
                  className="category"
                >
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

          <div className="greyContainerHome">
            <h2 className="heading">New Arrivals.</h2>
            <div className="arrivalsContainer">
              <div className="arrivalsLeft" onClick={()=> history.push("product/6323784c80fa7626d07652d8")}>
                <img
                  src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662207964/new%20arrivals/realme_axxney.jpg"
                  alt="realme 9i 5g"
                />
              </div>
              <div className="arrivalsRight">
                <div>
                  <img
                    src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662209193/new%20arrivals/watch_njjwmi.jpg"
                    alt="apple watch series 7"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/dnkthwagt/image/upload/v1662210292/new%20arrivals/samsung_miyczy.jpg"
                    alt="samsung tv"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="greyContainerHome">
            <h2 className="heading">Best sellers.</h2>
            <div className="bestSellersContainer">
              {products &&
                products
                  .sort((a, b) => {
                    return b.sellCount - a.sellCount;
                  })
                  .slice(0, 4)
                  .map((product) => (
                    <div
                      className="bestSellerProduct"
                      onClick={() => history.push(`product/${product._id}`)}
                    >
                      <div className="bspLeft">
                        <p className="bspName">
                          {product.name.length > 40
                            ? product.name.substring(0, 40) + "..."
                            : product.name}
                        </p>
                        <p className="bspPrice">Rs. {product.price}/-</p>
                      </div>
                      <div className="bspRight">
                        <img
                          className="bspImage"
                          src={product.images[0].url}
                          alt={product.name}
                        />
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
