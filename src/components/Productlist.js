import React, { useState, useEffect, useRef, useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useCart } from "react-use-cart";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { GlobalInfo } from "../App";

const Productlist = () => {
  const { addItem } = useCart();
  const { url , add_cart } = useContext(GlobalInfo);
  let [responseData, setResponseData] = useState([]);
  const [Isloading, setIsLoaded] = useState(false);
  let [isNext, isNextFunc] = useState(false);
  let [pagenum, setPage] = useState(0);
  let [priceFilter, setpriceFilter] = useState(0);
  let [shortData, setshortData]=useState(0);
  // let count = useRef(20);

  const style = {
    width: "unset",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    padding: " 11px 2rem",
    margin: " 5 5 10 5px",
    fontWeight: "600",
    transition: "all 150ms ease-in-out 0s ",
    lineHeight: "1",
    height: "40px",
    fontSize: "14px",
    borderRadius: "5px",
    color: "white",
  };

  useEffect(() => {
    const loader = document.getElementById("preloader");
    if (Isloading) {
      loader.style.display = "block";
    } else {
      loader.style.display = "none";
    }
  }, [Isloading]);

  const fetchData = () => {
    setIsLoaded(true);
    axios
      .get(
        url + `productlist?offset=${pagenum}&limit=12&price_id=${priceFilter}&sort_order=${shortData}`
      )
      .then((response) => {
        setResponseData([...responseData, ...response.data.result]);
        isNextFunc(true);
        setIsLoaded(false);
      })
      .catch((error) => {
        setIsLoaded(false);
      });
  };

  const filterdata = (e) => {
    setResponseData([]);
    setpriceFilter(e.target.value);
  };
 
  const shortdata=(e)=>{
    setResponseData([]);
    setshortData(e.target.value);
  }
  useEffect(() => {
    setResponseData([]);
    fetchData();
  }, [priceFilter,shortData]);
  console.log(shortData)

 

  const fetchMoreData = () => {
    if (responseData.length >= pagenum || pagenum == 0) {
      setPage(pagenum + 12);
      fetchData();
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, [""]);

  const newArray = responseData.map(function (item) {
    return {
      id: item.variant_productid,
      price: item.offer_price,
      name: item.name,
      slug: item.slug,
    };
  });


  const addItemdata = (items) => {
    if (localStorage.getItem("Token")) {
      fetch(url + "add-cart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
        body: JSON.stringify({
          add_type: "add",
          product_id: items.id,
          qty:"1",
        }),
      })
        .then((res) => res.json())
        .then((result) => {});
    } else {
      addItem(items);
    }
  };
  return (
    <div>
      <InfiniteScroll
        dataLength={responseData.length} //sets the length of data
        next={fetchMoreData} //fetching next set of data
        hasMore={isNext} //determine is more data is there to load
        //is displayed when more data is loaded
      >
        <div class="container-fluid product-section py-5">
          <div class="container">
            {/* <!-- product boxs --> */}
            <div class="row mb-lg-4">
              <div class="col-lg-3 filter-menu">
                <h2 class="heading-filter"> Filter products by</h2>
                <div class="accordion acc-main-menu mb-3" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Top Level Menu
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <div
                          class="accordion acc-main-menu"
                          id="accordionExample1"
                        >
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                              <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse11"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Mid-Level Menu
                              </button>
                            </h2>
                            <div
                              id="collapse11"
                              class="accordion-collapse collapse"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample1"
                            >
                              <div class="accordion-body">
                                <div class="accordion" id="accordionExample2">
                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="headingOne"
                                    >
                                      <button
                                        class="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapse21"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                      >
                                        Last Level
                                      </button>
                                    </h2>
                                    <div
                                      id="collapse21"
                                      class="accordion-collapse collapse"
                                      aria-labelledby="headingOne"
                                      data-bs-parent="#accordionExample2"
                                    >
                                      <div class="accordion-body inner-items">
                                        <ul>
                                          <li>
                                            <a href="">One</a>
                                          </li>
                                          <li>
                                            <a href="">Two</a>
                                          </li>
                                          <li>
                                            <a href="">Three</a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="brand-menu">
                  <h2 class="heading-filter"> Price</h2>
                  <div class="brand-input-check-container">
                    <div class="brand-input-check">
                      <input
                        type="radio"
                        name="price"
                        value="1"
                        id="priceOne"
                        onChange={filterdata}
                      />
                      <label for="priceOne">Rs. 0 - Rs. 1000</label>
                    </div>
                    <div class="brand-input-check">
                      <input
                        type="radio"
                        name="price"
                        value="2"
                        id="priceTwo"
                        onChange={filterdata}
                      />
                      <label for="priceTwo">Rs. 1001 - Rs. 5000</label>
                    </div>
                    <div class="brand-input-check">
                      <input
                        type="radio"
                        name="price"
                        value="3"
                        id="priceThree"
                        onChange={filterdata}
                      />
                      <label for="priceThree">Rs. 5001 - Above</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-9 row ps-lg-5">
                <div class="filter-index">
                  <div class="row">
                    <div class="col-lg-6">
                      <h4>
                        <i class="fa fa-list" aria-hidden="true"></i> Showing
                        1-9 of 12 item(s)
                      </h4>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center justify-content-end sort-by">
                      <h4>Sort by: </h4>
                      <select name="sort_by" onClick={shortdata} id="sortBy">
                        <option value="0" > Manual</option>
                        <option value="4" > Latest</option>
                        <option value="3" > Oldest</option>
                        <option value="1" > Price, low to high</option>
                        <option value="2" > Price, high to low</option>
                        <option value="5" > Name, A to Z</option>
                        <option value="6" > Name, Z to A</option>
                      </select>
                    </div>
                  </div>
                </div>

                {newArray.map((item) => (
                  <div key={item.id} class="col-md-3 p-1">
                    <div class="product position-relative">
                      <div class="product-image position-relative">
                        <Link to={`/product/${item.slug}`}>
                          <img
                            class="img-fluid"
                            src="./assets/images/product-1.png"
                            title="product"
                          />
                        </Link>
                        <button
                          onClick={() => add_cart(item)}
                          class="btn btn-outline-primary"
                          type="submit"
                          value="Submit"
                          title="Add to Cart"
                          id="liveToastBtn"
                          style={style}
                        >
                          Add to Cart
                        </button>
                      </div>
                      <span class="offer-sale">Sale</span>

                      {/* <!-- product description --> */}
                      <div class="product-content">
                        <h3>
                          <Link to={`/product/${item.slug}`}>{item.name}</Link>
                        </h3>
                        <div class="product-icon">
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="productVendor">
                          <label>Sold By:</label> <a href="#0">AyoMart</a>
                        </div>
                        <div class="product-price">
                          <div class="price-sale"> ${item.price} </div>
                          <div class="discount-price">$298.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div class="row dlab-blog blog-half m-b30 mx-0 " id="preloader">
                  <div class="col-xl-3 col-lg-3 col-md-3 col-4 dlab-media">
                    <Skeleton height={150} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
export default Productlist;
