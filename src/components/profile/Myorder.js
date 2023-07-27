import React from "react";
import { Link } from "react-router-dom";

const Myorder = () => {
  return (
    <>
      <div class="address-section">
        <div class="container-fluid">
          <div class="container">
            <div className="row">
              <div class="col-md-3 page-tab">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/dashboard"
                    >
                      <i class="fa-solid fa-angles-right"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="nav-link active"
                      aria-current="page"
                      to="/account"
                    >
                      <i class="fa-solid fa-angles-right"></i>
                      Account Details
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/address">
                      <i class="fa-solid fa-angles-right"></i>
                      Address{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/order">
                      <i class="fa-solid fa-angles-right"></i>
                      Order{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">
                      <i class="fa-solid fa-angles-right"></i>
                      Contact us
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/wishlist">
                      <i class="fa-solid fa-angles-right"></i>
                      Wishlist
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/payment">
                      <i class="fa-solid fa-angles-right"></i>
                      Payment
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="col-md-9">
                <h1>this is my order page</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorder;
