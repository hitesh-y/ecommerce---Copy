import React, { useEffect, useState, useContext } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { GlobalInfo } from "./App";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


function Shop(props) {
  const { url ,add_cart } = useContext(GlobalInfo);
  const [product, setProduct] = useState([]);
  const [Isloading, setIsLoaded] = useState(false);

  useEffect(() => {
    const loader = document.getElementById("preloader");

    if (Isloading) {
      loader.style.display = "block";
    } else {
      loader.style.display = "none";
    }
  }, [Isloading]);

  useEffect(() => {
    setIsLoaded(true);
    fetch(url + "latest-products")
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


  return (
    <>
       <span className="cart-count">{props.data}</span>
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
                {/* <div class="spinner-border d-flex" role="status" style={{alignItems:'center'}}>
                 <span class="sr-only" >Loading...</span>
               </div> */}

                <div class="row dlab-blog blog-half m-b30 mx-0" id="preloader">
                  <div class="col-lg-12 dlab-media">
                    <Skeleton height={230} />
                  </div>
                </div>

                {newArray.map((item, index) => (
                  <div key={item.id} class="col-md-4 mb-5">
                    <div class="products-boxs">
                      <div class="row align-items-center justify-content-center">
                        <div class="col-md-5">
                          <div class="product2 position-relative">
                            <Link to="">
                              <div class="product-image2 position-relative">
                                <img
                                  class="img-fluid"
                                  src="/assets/images/product-1.png"
                                  title="product"
                                />
                                <button
                                  onClick={() => add_cart(item) }
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
                            </Link>
                          </div>
                        </div>

                        <div class="col-md-7">
                          <div class="product2 position-relative">
                            {/* <!-- product description --> */}
                            <div class="product-content2">
                              <h3>
                                <Link to={`/product/${item.slug}`}>
                                  <div>{item.name}</div>
                                </Link>
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
                                <div class="price-sale2">$ {item.price} </div>
                                <div class="discount-price2">{item.id}</div>
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
    </>
  );
}
export default Shop;
