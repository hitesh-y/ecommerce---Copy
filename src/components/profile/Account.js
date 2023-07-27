import React from "react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div class="address-section">
        <div class="container-fluid">
          <div class="container">
            <div class="row">
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

              <div class="col-md-9 page-column">
                <div class="account">
                  <h1>Account Details</h1>
                </div>
                <div class="card">
                  <div class="card-details">
                    <h3>Personal Info</h3>
                    <p>
                      <b>First Name:</b>
                      Jenny
                      <br />
                      <b>Last Name:</b>
                      Raider
                      <br />
                      <b>E-mail:</b>
                      jennyraider@hotmail.com
                      <br />
                      <b>Phone:</b>
                      876-432-4323
                    </p>
                  </div>
                </div>
                <div class="edit-box">
                  <a href="">
                    <i class="fa-solid fa-pencil"></i>
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
