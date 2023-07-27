import React, { useEffect, useState, useContext } from "react";
import Slider from "./components/Slider";
import { useCart } from "react-use-cart";
import { GlobalInfo } from "./App";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Home() {
  const {addItem} = useCart();
  const { url , add_cart } = useContext(GlobalInfo);
  const [product, setProduct] = useState([]);
  const [Isloading, setIsLoaded] = useState(false);

  useEffect(() => {
    const loader = document.getElementById("loader");
    if (Isloading) {
      loader.style.display = "block";
    } else {
      loader.style.display = "none";
    }
  }, [Isloading]);

  useEffect(() => {
    setIsLoaded(true);
    fetch(url+"topselling-product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data.result);
        setIsLoaded(false);
      });
  }, []);

  

  const newArray = product.map(function (item) {
    return {
      id: item.variant_productid,
      price: item.sale_price,
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
          qty: "9",
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
      <Slider />

      {/* <!-- service section start --> */}
      <div class="container-fluid ps-lg-4 pe-lg-4">
        <div class="container service-section mt-xl-5 mt-lg-5 mb-xl-4 mb-lg-4 py-xl-5 py-lg-5">
          <div class="row">
            <div class="col py-xl-1 py-lg-1">
              <div class="service-process ps-4 pe-5">
                <img src="/assets/images/service1.png" class="img-fluid" />
                <div class="service-process-steps">
                  <h4> FREE DELIVERY</h4>
                  <p> For all orders over $120</p>
                </div>
              </div>
            </div>

            <div class="col py-xl-1 py-lg-1">
              <div class="service-process">
                <img
                  src="/assets/images/service2.png"
                  class="img-fluid"
                  title=""
                />
                <div class="service-process-steps">
                  <h4> SAFE PAYMENT</h4>
                  <p> 100% secure payment</p>
                </div>
              </div>
            </div>

            <div class="col py-xl-1 py-lg-1">
              <div class="service-process">
                <img
                  src="/assets/images/service3.png"
                  class="img-fluid"
                  title=""
                />
                <div class="service-process-steps">
                  <h4> SHOP WITH CONFIDENCE</h4>
                  <p> For all orders over $120</p>
                </div>
              </div>
            </div>

            <div class="col py-xl-1 py-lg-1">
              <div class="service-process">
                <img
                  src="/assets/images/service4.png"
                  class="img-fluid"
                  title=""
                />
                <div class="service-process-steps">
                  <h4> 24/7 HELP CENTER</h4>
                  <p> Dedicated 24/7 support</p>
                </div>
              </div>
            </div>

            <div class="col py-xl-1 py-lg-1">
              <div class="service-process">
                <img
                  src="/assets/images/service5.png"
                  class="img-fluid"
                  title=""
                />
                <div class="service-process-steps">
                  <h4> FRIENDLY SERVICES</h4>
                  <p> 30 day satisfaction guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- offer section start --> */}
      <div class="container-fluid offer-section py-xl-2 py-lg-2">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="collection-box">
                <a href="#0">
                  <img
                    src="/assets/images/offer1.png"
                    title="banner"
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="col">
                <div class="collection-box">
                  <a href="">
                    <img
                      src="/assets/images/offer2.png"
                      title="banner"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div class="col my-5">
                <div class="collection-box">
                  <a href="">
                    <img
                      src="/assets/images/offer3.png"
                      title="banner"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="collection-box">
                <a href="">
                  <img
                    src="/assets/images/offer4.png"
                    title="banner"
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid " style={{ backgroundColor: "#f5f5f5" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-5">
              <div class="row">
                <div class="heading position-relative">
                  <h3 style={{ backgroundColor: "#f5f5f5" }}>
                    Top Best Selling<span>Products</span>
                  </h3>
                </div>
              </div>

              <div class="row mt-xl-4 mt-lg-4 mt-md-4">
                <div class="col-md-4 mb-5">
                  <div class="products-boxs">
                    <div class="row align-items-center justify-content-center">
                      <div class="col-md-5">
                        <div class="product2 position-relative">
                          <a href="#0">
                            <div class="product-image2 position-relative">
                              <img
                                class="img-fluid"
                                src="/assets/images/product-1.png"
                                title="product"
                              />
                              <button
                                class="cart-btn2"
                                type="submit"
                                value="Submit"
                                title="Add to Cart"
                                onClick={() => addItem()}
                              >
                                <span class="icons2">+</span>
                                <span class="text2">Add to Cart</span>
                              </button>
                            </div>
                            <span class="offer-sale2">Sale</span>
                          </a>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="product2 position-relative">
                          {/* <!-- product description --> */}
                          <div class="product-content2">
                            <h3>
                              <a href="#0">
                                Amcrest Security Camera in White Color{" "}
                              </a>
                            </h3>
                            <div class="product-icon2">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="productVendor2">
                              <label>Sold By:</label> <a href="#0">AyoMart</a>
                            </div>
                            <div class="product-price2">
                              <div class="price-sale2"> $100.00 </div>
                              <div class="discount-price2">$298.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-5">
                  <div class="products-boxs">
                    <div class="row align-items-center justify-content-center">
                      <div class="col-md-5">
                        <div class="product2 position-relative">
                          <a href="product-list.php">
                            <div class="product-image2 position-relative">
                              <img
                                class="img-fluid"
                                src="/assets/images/product-1.png"
                                title="product"
                              />
                              <button
                                class="cart-btn2"
                                type="submit"
                                value="Submit"
                                title="Add to Cart"
                              >
                                <span class="icons2">+</span>
                                <span class="text2">Add to Cart</span>
                              </button>
                            </div>
                            <span class="offer-sale2">Sale</span>
                          </a>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="product2 position-relative">
                          {/* <!-- product description --> */}
                          <div class="product-content2">
                            <h3>
                              <a href="#0">
                                Amcrest Security Camera in White Color{" "}
                              </a>
                            </h3>
                            <div class="product-icon2">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="productVendor2">
                              <label>Sold By:</label> <a href="#0">AyoMart</a>
                            </div>
                            <div class="product-price2">
                              <div class="price-sale2"> $100.00 </div>
                              <div class="discount-price2">$298.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-5">
                  <div class="products-boxs">
                    <div class="row align-items-center justify-content-center">
                      <div class="col-md-5">
                        <div class="product2 position-relative">
                          <a href="product-list.php">
                            <div class="product-image2 position-relative">
                              <img
                                class="img-fluid"
                                src="/assets/images/product-1.png"
                                title="product"
                              />
                              <button
                                class="cart-btn2"
                                type="submit"
                                value="Submit"
                                title="Add to Cart"
                              >
                                <span class="icons2">+</span>
                                <span class="text2">Add to Cart</span>
                              </button>
                            </div>
                            <span class="offer-sale2">Sale</span>
                          </a>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="product2 position-relative">
                          {/* <!-- product description --> */}
                          <div class="product-content2">
                            <h3>
                              <a href="#0">
                                Amcrest Security Camera in White Color{" "}
                              </a>
                            </h3>
                            <div class="product-icon2">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="productVendor2">
                              <label>Sold By:</label> <a href="#0">AyoMart</a>
                            </div>
                            <div class="product-price2">
                              <div class="price-sale2"> $100.00 </div>
                              <div class="discount-price2">$298.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-5">
                  <div class="products-boxs">
                    <div class="row align-items-center justify-content-center">
                      <div class="col-md-5">
                        <div class="product2 position-relative">
                          <a href="product-list.php">
                            <div class="product-image2 position-relative">
                              <img
                                class="img-fluid"
                                src="/assets/images/product-1.png"
                                title="product"
                              />
                              <button
                                class="cart-btn2"
                                type="submit"
                                value="Submit"
                                title="Add to Cart"
                              >
                                <span class="icons2">+</span>
                                <span class="text2">Add to Cart</span>
                              </button>
                            </div>
                            <span class="offer-sale2">Sale</span>
                          </a>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="product2 position-relative">
                          {/* <!-- product description --> */}
                          <div class="product-content2">
                            <h3>
                              <a href="#0">
                                Amcrest Security Camera in White Color{" "}
                              </a>
                            </h3>
                            <div class="product-icon2">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="productVendor2">
                              <label>Sold By:</label> <a href="#0">AyoMart</a>
                            </div>
                            <div class="product-price2">
                              <div class="price-sale2"> $100.00 </div>
                              <div class="discount-price2">$298.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-5">
                  <div class="products-boxs">
                    <div class="row align-items-center justify-content-center">
                      <div class="col-md-5">
                        <div class="product2 position-relative">
                          <a href="product-list.php">
                            <div class="product-image2 position-relative">
                              <img
                                class="img-fluid"
                                src="/assets/images/product-1.png"
                                title="product"
                              />
                              <button
                                class="cart-btn2"
                                type="submit"
                                value="Submit"
                                title="Add to Cart"
                              >
                                <span class="icons2">+</span>
                                <span class="text2">Add to Cart</span>
                              </button>
                            </div>
                            <span class="offer-sale2">Sale</span>
                          </a>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="product2 position-relative">
                          {/* <!-- product description --> */}
                          <div class="product-content2">
                            <h3>
                              <a href="#0">
                                Amcrest Security Camera in White Color{" "}
                              </a>
                            </h3>
                            <div class="product-icon2">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="productVendor2">
                              <label>Sold By:</label> <a href="#0">AyoMart</a>
                            </div>
                            <div class="product-price2">
                              <div class="price-sale2"> $100.00 </div>
                              <div class="discount-price2">$298.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-5">
                  <div class="products-boxs">
                    <div class="row align-items-center justify-content-center">
                      <div class="col-md-5">
                        <div class="product2 position-relative">
                          <a href="product-list.php">
                            <div class="product-image2 position-relative">
                              <img
                                class="img-fluid"
                                src="/assets/images/product-1.png"
                                title="product"
                              />
                              <button
                                class="cart-btn2"
                                type="submit"
                                value="Submit"
                                title="Add to Cart"
                              >
                                <span class="icons2">+</span>
                                <span class="text2">Add to Cart</span>
                              </button>
                            </div>
                            <span class="offer-sale2">Sale</span>
                          </a>
                        </div>
                      </div>

                      <div class="col-md-7">
                        <div class="product2 position-relative">
                          {/* <!-- product description --> */}
                          <div class="product-content2">
                            <h3>
                              <a href="#0">
                                Amcrest Security Camera in White Color{" "}
                              </a>
                            </h3>
                            <div class="product-icon2">
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                            </div>
                            <div class="productVendor2">
                              <label>Sold By:</label> <a href="#0">AyoMart</a>
                            </div>
                            <div class="product-price2">
                              <div class="price-sale2"> $100.00 </div>
                              <div class="discount-price2">$298.00</div>
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

      {/* <!-- Overview Section start -->     */}
      <div class="container-fluid overview-section py-4">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 mb-4 text-center">
              <div class="overview-process">
                <img src="/assets/images/icon-11.png" class="img-fluid" />
                <div class="overview-text">
                  <h4>
                    {" "}
                    50<span>+</span>
                  </h4>
                  <p> Families Served</p>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mb-4 text-center">
              <div class="overview-process">
                <img src="/assets/images/icon-12.png" class="img-fluid" />
                <div class="overview-text">
                  <h4>
                    {" "}
                    1500<span>+</span>
                  </h4>
                  <p>Orders Delivered</p>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mb-4 text-center">
              <div class="overview-process">
                <img src="/assets/images/icon-13.png" class="img-fluid" />
                <div class="overview-text">
                  <h4>
                    {" "}
                    22000<span>+</span>
                  </h4>
                  <p> Pincodes Served</p>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-3 mb-4 text-center">
              <div class="overview-process">
                <img src="/assets/images/icon-14.png" class="img-fluid" />
                <div class="overview-text">
                  <h4>
                    {" "}
                    10<span>+</span>
                  </h4>
                  <p> Medicines Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Top Best Selling Section start -->    */}
      <div className="container-fluid top-best-selling">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mb-4">
              <div class="row">
                <div class="heading position-relative">
                  <h3 style={{ backgroundColor: "#f5f5f5" }}>
                    Top Best Selling<span>Products</span>
                  </h3>
                </div>
              </div>

              <div class="row mt-xl-4 mt-lg-4 mt-md-4">

              <div class="row dlab-blog blog-half m-b30 mx-0" id="loader">
                <div class="col-12 dlab-media" >
                  <Skeleton height={380} />
                </div>
              </div>

                {newArray.map((item, index) => (
                  <div key={item.id} class="col-md-6 mb-5">
                    <div class="products-boxs">
                      <div class="row align-items-center justify-content-center">
                        <div class="col-md-5">
                          <div class="product2 position-relative">
                            <a href="#0">
                              <div class="product-image2 position-relative">
                                <img
                                  class="img-fluid"
                                  src="/assets/images/product-1.png"
                                  title="product"
                                />
                                <button
                                  class="cart-btn2"
                                  type="submit"
                                  value="Submit"
                                  title="Add to Cart"
                                  onClick={() => add_cart(item)}
                                >
                                  <span class="icons2">+</span>
                                  <span class="text2">Add to Cart</span>
                                </button>
                              </div>
                              <span class="offer-sale2">Sale</span>
                            </a>
                          </div>
                        </div>

                        <div class="col-md-7">
                          <div class="product2 position-relative">
                            {/* <!-- product description --> */}
                            <div class="product-content2">
                              <h3>
                                <a href="#0">{item.author}</a>
                              </h3>
                              <div class="product-icon2">
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                              </div>
                              <div class="productVendor2">
                                <label>Sold By:</label> <a href="#0">AyoMart</a>
                              </div>
                              <div class="product-price2">
                                <div class="price-sale2"> ${item.price} </div>
                                <div class="discount-price2">${item.price}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
