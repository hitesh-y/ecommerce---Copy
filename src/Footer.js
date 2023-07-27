import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <!-- footer section start --> */}

      <div class="container-fluid footer-section py-xl-5 py-lg-5 py-md-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4 pe-5">
              <div class="footer-info">
                <a href="#0">
                  <img
                    src="./assets/images/logo.png"
                    title=""
                    class="img-fluid"
                    className="mb-3"
                  />{" "}
                </a>
                <div class="col mb-3">
                  <p>
                    All the lorem ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary making this the first
                    true generator on the Internet.
                  </p>
                </div>
              </div>
              <div class="col-xl-12 col-md-12 col-sm-12 col-12 support">
                <div class="col d-flex justify-content-center align-content-center">
                  <div class="icons">
                    <i class="fas fa-headphones" aria-hidden="true"></i>
                  </div>
                  <div class="col ps-xl-4 ps-lg-4 ps-md-4">
                    <label>
                      Hotline Free:
                      <span>(+100) 123 456 7890</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="footer-address mt-4">
                <p>
                  <strong>Add:</strong> 1234 Heaven Stress, Beverly Hill,
                  Melbourne, USA.
                </p>
              </div>
            </div>

            <div class="col-md-2">
              <div class="footer-menu-links">
                <h4>INFORMATION COMPANY</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li>
                    <a href="">Help Center</a>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <a href="">Report Abuse</a>
                  </li>
                  <li>
                    <a href="">Submit a Dispute</a>
                  </li>
                  <li>
                    <a href="">Policies & Rules</a>
                  </li>
                  <li>
                    <a href="">Your Feedback</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-2">
              <div class="footer-menu-links">
                <h4>MY ACCOUNT</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li>
                    <Link to="/dashboard">My Account</Link>
                  </li>
                  <li>
                    <a href="">Order History</a>
                  </li>
                  <li>
                    <Link to="/wishlist">Wish List</Link>
                  </li>
                  <li>
                    <a href="">Newsletter</a>
                  </li>
                  <li>
                    <a href="">Order History</a>
                  </li>
                  <li>
                    <a href="">International Orders</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-2">
              <div class="footer-menu-links">
                <h4>INFORMATION COMPANY</h4>
              </div>
              <div class="footer-content">
                <ul>
                  <li>
                    <Link to="contact">Contact Us</Link>
                  </li>
                  <li>
                    <a href="">Testimonials</a>
                  </li>
                  <li>
                    <a href="">Location & Working Hours</a>
                  </li>
                  <li>
                    <a href="">Our Guarantee</a>
                  </li>
                  <li>
                    <a href="">Track Your Order</a>
                  </li>
                  <li>
                    <a href="">Help Page</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-2">
              <div class="footer-menu-links">
                <h4>FOLLOW US ON</h4>
              </div>
              <div class="sociaright">
                <ul>
                  <li>
                    <a class="facebook" href="#0">
                      {" "}
                      <i class="fa-brands fa-facebook-f"></i> Facebook
                    </a>{" "}
                  </li>
                  <li>
                    <a class="facebook" href="#0">
                      {" "}
                      <i class="fa-brands fa-twitter"></i> Twitter
                    </a>{" "}
                  </li>
                  <li>
                    <a class="facebook" href="#0">
                      {" "}
                      <i class="fa-brands fa-instagram"></i> Instagram
                    </a>{" "}
                  </li>
                  <li>
                    <a class="facebook" href="#0">
                      {" "}
                      <i class="fa-brands fa-pinterest"></i> Pinterestt
                    </a>{" "}
                  </li>
                  <li>
                    <a class="facebook" href="#0">
                      {" "}
                      <i class="fa-brands fa-flickr"></i> flickr
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid copyright py-3">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="col">
                <p>
                  © <script> document.write(new Date().getFullYear()) </script>{" "}
                  Pharmacy. All Rights Reserved Design & Developed By
                </p>
                <a href="#0" target="_blank">
                  <img src="./assets/images/imglogo.png" title="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer section end --> */}
    </>
  );
};
export default Footer;
