import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalInfo } from "../App";
import { useCart } from "react-use-cart";

const Item = () => {
  const [val, setVal] = useState(1);
  const { addItem, updateItemQuantity, removeItem } = useCart();
  const parems = useParams();
  const { name } = parems;
  const { url } = useContext(GlobalInfo);
  const [productDetails, setProductDetails] = useState([]);

  const style = {
    width: "unset",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    padding: " 11px 2rem",
    margin: " 0 5 10 0px",
    fontWeight: "600",
    transition: "all 150ms ease-in-out 0s ",
    lineHeight: "1",
    height: "40px",
    fontSize: "14px",
    borderRadius: "5px",
  };

  useEffect(() => {
    fetch(url + `product-detail?slug=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProductDetails(data.result);
      });
  }, []);

  const newArray = {
    id: productDetails.provariantid,
    price: productDetails.sale_price,
    name: productDetails.name,
    slug: productDetails.slug,
  };

  const addItemdata = (newArray) => {
    console.log(newArray);
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
          product_id: newArray.id,
          qty: "9",
        }),
      })
        .then((res) => res.json())
        .then((result) => {});
    } else {
      addItem(newArray);
    }
  };

  return (
    <>
      <div key={newArray.id}>
        <div class="container-fluid custom-pad">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-5 left-product-content">
                <div class="xzoom-container">
                  <img
                    class="xzoom4"
                    id="xzoom-fancy"
                    src="/assets/images/gallery/preview/01_b_car.jpg"
                    xoriginal="/assets/images/gallery/original/01_b_car.jpg"
                  />
                  <div class="xzoom-thumbs">
                    <a href="/assets/images/gallery/original/01_b_car.jpg">
                      <img
                        class="xzoom-gallery4"
                        width="80"
                        src="/assets/images/gallery/thumbs/01_b_car.jpg"
                        xpreview="images/gallery/preview/01_b_car.jpg"
                        title="The description goes here"
                      />
                    </a>
                    <a href="/assets/images/gallery/original/02_o_car.jpg">
                      <img
                        class="xzoom-gallery4"
                        width="80"
                        src="/assets/images/gallery/preview/02_o_car.jpg"
                        title="The description goes here"
                      />
                    </a>
                    <a href="/assets/images/gallery/original/03_r_car.jpg">
                      <img
                        class="xzoom-gallery4"
                        width="80"
                        src="/assets/images/gallery/preview/03_r_car.jpg"
                        title="The description goes here"
                      />
                    </a>
                    <a href="/assets/images/gallery/original/04_g_car.jpg">
                      <img
                        class="xzoom-gallery4"
                        width="80"
                        src="/assets/images/gallery/preview/04_g_car.jpg"
                        title="The description goes here"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-7 right-product-content">
                <div class="product-heading">
                  <h1>{newArray.name}</h1>
                </div>
                <div class="boxx">
                  <div class="box-icon">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <a href="">0 reviews</a>
                  </div>
                </div>
                <div class="big-price">
                  ${newArray.price}
                  <span class="del-price"> $320.00</span>
                </div>
                <div class="product-box-desc">
                  <div class="brand col-3">
                    <span>Brand: </span>
                    <a href="">Metice</a>
                  </div>

                  <div class="product-code col-3">
                    <span>product Code:</span>
                    <a href="">V10</a>
                  </div>

                  <div class="reward-point col-3">
                    <span>Reward Points:</span>
                    <a href="">100</a>
                  </div>

                  <div class="Availability col-3">
                    <span>Availability:</span>
                    <a href="">
                      {" "}
                      <i class="fas fa-check-square"></i>
                      In Stock
                    </a>
                  </div>

                  <div class="Viewed col-3">
                    <span>Viewed</span>
                    <a href="">
                      {" "}
                      <i class="fa fa-eye" aria-hidden="true"></i>
                      4679 times
                    </a>
                  </div>
                </div>

                <div class="option-quantiy">
                  <label class="quantity-label">Qty</label>
                  <div class="product-input-group">
                    <button
                      onClick={() =>
                        updateItemQuantity(newArray.id, newArray.quantity - 1)
                      }
                      style={style}
                      type="button"
                      class=" btn-outline-secondary"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <input
                      style={style}
                      type="text"
                      name="quantity"
                      value={newArray.quantity}
                     
                    />

                    <button
                      onClick={() =>
                        updateItemQuantity(newArray.id, newArray.quantity + 1)
                      }
                      style={style}
                      type="button"
                      class=" btn-outline-primary"
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>

                <div class="product-cart">
                  <button
                    type="button"
                    value="Add to Cart"
                    data-loading-text="Loading..."
                    id="button-cart"
                    class="btn btn-mega "
                    onClick={() => addItemdata(newArray)}
                  >
                    Add to cart
                  </button>
                  <input
                    type="button"
                    value="Buy Now"
                    data-loading-text="Loading..."
                    id="button-checkout"
                    class="btn btn-checkout "
                    onClick={() => addItem(newArray)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-section">
          <div class="container-fluid ">
            <div class="container">
              <div class="row tab-slider">
                <div class="col-md-3 tabss">
                  <div class="left-tab">
                    <div
                      class="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        class="nav-link active"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        DESCRIPITION
                      </button>
                      <button
                        class="nav-link"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-profile"
                        aria-selected="false"
                      >
                        REVIEWS (0)
                      </button>
                      <button
                        class="nav-link"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-messages"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-messages"
                        aria-selected="false"
                      >
                        SIZE CHART
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-md-9 big-tabs">
                  <div class="tab-content tab-box" id="v-pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <h3>Product Description</h3>
                      <div class="descripition">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium.
                        </p>
                        <p>
                          <strong>Nemo enim ipsam voluptatem</strong>
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                    </div>
                    {/* <!-- review section --> */}
                    <div
                      class="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div class="descripition">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium.
                        </p>
                        <p>
                          <strong>Nemo enim ipsam voluptatem</strong>
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div class="descripition">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum. Sed ut perspiciatis unde omnis iste natus
                          error sit voluptatem accusantium doloremque
                          laudantium.
                        </p>
                        <p>
                          <strong>Nemo enim ipsam voluptatem</strong>
                        </p>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>{productDetails.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
