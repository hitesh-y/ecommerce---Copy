import React from "react";
import { Link } from "react-router-dom";

const Address = () => {
  return (
    <>
      <div class="address-section">
        <div class="container-fluid">
          <div class="container">
            <div class="row">
              <div class="col-md-3 page-tab">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/dashboard">
                      <i class="fa-solid fa-angles-right"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/account">
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
                <div class="box-head">
                  <h3>Save Address</h3>
                </div>
                <div class="box-detail">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="details">
                        <div class="name">
                          <h5>Mark Jugal</h5>
                          <div class="button">
                            <h6>Home</h6>
                          </div>
                        </div>
                        <div class="address">
                          <p>549 Sulphur Springs Road</p>
                          <p>Downers Grove, IL</p>
                          <p>60515</p>
                        </div>
                        <div class="number">
                          <p>Mobile No. +1-123-456-7890</p>
                        </div>
                        <div class="two-button">
                          <a href="">Edit</a>
                          <a href="">Remove</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="details">
                        <div class="name">
                          <h5>Mark Jugal</h5>
                          <div class="button">
                            <h6>Home</h6>
                          </div>
                        </div>
                        <div class="address">
                          <p>549 Sulphur Springs Road</p>
                          <p>Downers Grove, IL</p>
                          <p>60515</p>
                        </div>
                        <div class="number">
                          <p>Mobile No. +1-123-456-7890</p>
                        </div>
                        <div class="two-button">
                          <a href="">Edit</a>
                          <a href="">Remove</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="details">
                        <div class="name">
                          <h5>Mark Jugal</h5>
                          <div class="button">
                            <h6>Home</h6>
                          </div>
                        </div>
                        <div class="address">
                          <p>549 Sulphur Springs Road</p>
                          <p>Downers Grove, IL</p>
                          <p>60515</p>
                        </div>
                        <div class="number">
                          <p>Mobile No. +1-123-456-7890</p>
                        </div>
                        <div class="two-button">
                          <a href="">Edit</a>
                          <a href="">Remove</a>
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
    </>
  );
};

export default Address;
