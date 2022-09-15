import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "./ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import Select from "react-select";

 const categories = [
   "laptop",
   "footwear",
   "clothing",
   "cameras",
   "smartphones",
   "appliances",
   "beauty",
 ];

const priceRange = [
  "500 and below",
  "500 - 1000",
  "1000 - 1500",
  "1500 - 2000",
  "2000 and above"
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  let keyword = match.params.keyword;
  let tempCat;
  console.log(keyword);
  if (categories.includes(keyword)) {
    // setCategory(keyword);
    tempCat = keyword;
    keyword = "";
    // document.getElementById("categorySelect").value = keyword;
    // console.log("category h = " + tempCat);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState(tempCat || "");
  const [sortBy, setSortBy] = useState(localStorage.getItem("priceSort"));

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  const changeSelectPrice = (price) => {
    if (price == "500 and below") return([0,500]);
    else if (price == "500 - 1000") return([500,1000]);
    else if (price == "1000 - 1500") return([1000,1500]);
    else if (price == "1500 - 2000") return([1500,2000]);
    else if (price == "2000 and above") return([2000,500000]);
    else if (price == "None") return([0,500000]);
  };

  const changePriceToWords = (price) => {
    if (price == [0, 500]) return "500 and below";
    else if (price == [500, 1000]) return "500 - 1000";
    else if (price == [1000, 1500]) return "1000 - 1500";
    else if (price == [1500, 2000]) return "1500 - 2000";
    else if (price == [2000, 500000]) return "2000 and above";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    console.log(category);

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, sortBy, ratings, alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          {/* <h2 className="productsHeading">Products</h2> */}

          <div className="productsPage">
            <div className="filters">
              <div>
                <h3>Price Range</h3>
                <select
                  id="priceSelect"
                  onChange={() =>
                    setPrice(document.getElementById("priceSelect").value)
                  }
                >
                  {price == null ? (
                    <option>None</option>
                  ) : (
                    <option>{price}</option>
                  )}
                  {priceRange
                    .filter((currPrice) => currPrice !== price)
                    .map((priceLabel) => (
                      <option>{priceLabel}</option>
                    ))}
                  {price != null && price != "None" && <option>None</option>}
                </select>
              </div>

              <div>
                <h3>Categories</h3>
                <select
                  id="categorySelect"
                  onChange={() => {
                    document.getElementById("categorySelect").value != "All"
                      ? setCategory(
                          document.getElementById("categorySelect").value
                        )
                      : setCategory("");
                      keyword = "";
                  }}
                >
                  <option>{category || "All"}</option>
                  {categories
                    .filter((cat) => cat !== category)
                    .map((category) => (
                      <option>{category}</option>
                    ))}
                  {category && <option>All</option>}
                </select>
              </div>
              <div>
                <h3>Sort by</h3>
                <select
                  id="priceSortSelect"
                  onChange={() => {
                      setSortBy(
                            document.getElementById("priceSortSelect").value
                          );
                          localStorage.setItem("priceSort",document.getElementById("priceSortSelect"));
                      }
                  }
                >
                  <option>None</option>
                  <option>Price - Low to High</option>
                  <option>Price - High to Low</option>
                  <option>Customer Rating</option>
                </select>
              </div>
            </div>

            <div className="productsContainer">
              {filteredProductsCount == 0 ? (
                <div className="noProducts">
                  <h2>No products match your search.</h2>
                </div>
              ) : (
                products &&
                (sortBy == "Price - Low to High"
                  ? products.sort((a, b) => {
                      return a.price - b.price;
                    })
                  : sortBy == "Price - High to Low"
                  ? products.sort((a, b) => {
                      return b.price - a.price;
                    })
                  :  (sortBy == "Customer Rating") ? (products.sort((a,b)=> {return(b.ratings - a.ratings)}))
                  :
                    products
                ).map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              )}
            </div>
          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="First"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
