import React,{useContext, useEffect, useState} from "react";
import { useCart } from "react-use-cart";
import { GlobalInfo } from "../App";

function Wishlist() {
  const { addItem } = useCart();
  const { url } = useContext(GlobalInfo);

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(url + "topselling-product")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data.result);
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
    <>
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
        >
          <div className="container">
            <h1 className="page-title">
              Wishlist<span>Shop</span>
            </h1>
          </div>
        </div>
        {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Shop</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Wishlist
              </li>
            </ol>
          </div>
        </nav> */}

        <div className="page-content">
          <div className="container">
            <table className="table table-wishlist table-mobile">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Stock Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {newArray.map((item, index) => (
                  <tr>
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <a href="#">
                            <img
                              src="/assets/images/product-1.png"
                              alt="Product image"
                            />
                          </a>
                        </figure>

                        <h3 className="product-title">
                          <a href="#">{item.author}</a>
                        </h3>
                      </div>
                    </td>
                    <td className="price-col">${item.price}</td>
                    <td className="stock-col">
                      <span className="in-stock">In stock</span>
                    </td>
                    <td className="action-col">
                      <button
                        className="btn btn-block btn-outline-primary-2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={addItemdata(item)}
                      >
                        <i className="icon-list-alt"></i>Add to Cart
                      </button>
                    </td>
                    <td className="remove-col">
                      <button className="btn btn-remove">
                        <i className="icon-close"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="wishlist-share">
              <div className="social-icons social-icons-sm mb-2">
                <label className="social-label">Share on:</label>
                <a
                  href="#"
                  className="social-icon"
                  title="Facebook"
                  target="_blank"
                >
                  <i className="icon-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  title="Twitter"
                  target="_blank"
                >
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  title="Instagram"
                  target="_blank"
                >
                  <i className="icon-instagram"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  title="Youtube"
                  target="_blank"
                >
                  <i className="icon-youtube"></i>
                </a>
                <a
                  href="#"
                  className="social-icon"
                  title="Pinterest"
                  target="_blank"
                >
                  <i className="icon-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Wishlist;
