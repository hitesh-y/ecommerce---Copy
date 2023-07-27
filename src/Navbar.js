import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div class="container-fluid header-menu">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-sm-12">
              <div class="left-header-menu">
                <nav class="navbar navbar-expand-lg ">
                  <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav w-100">
                      <li class="nav-item dropdown w-100">
                        <a
                          class="nav-link dropdown-toggle text-white"
                          href="#"
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fa fa-bars pe-xl-3 pe-lg-3 "></i> SHOP BY
                          DEPARTMENT
                        </a>
                        <ul
                          class="dropdown-menu w-100 category-names "
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Home &amp; Kitchen
                            </a>
                          </li>
                          <li class="dropdown">
                            <a
                              class="nav-link dropdown-toggle"
                              href="#"
                              id="navbarDropdown"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Dropdown
                            </a>
                            <ul
                              class="dropdown-menu"
                              aria-labelledby="navbarDropdown"
                            >
                              <li>
                                <a class="dropdown-item" href="#">
                                  Action
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Another action
                                </a>
                              </li>
                              <li>
                                <hr class="dropdown-divider" />
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Smart Phones
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Cameras &amp; Photography
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Jwellery &amp; Watches
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Headphones
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Laptop &amp; Ipad
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Sport &amp; Outdoors
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Furniture &amp; Decor
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item fw-bold" href="#">
                              <i class="fa fa-plus"></i>More Category
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            <div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-sm-12">
              <div class="mid-header-menu">
                <nav class="navbar navbar-expand-lg">
                  <div class="container-fluid">
                    <div
                      class="collapse navbar-collapse justify-content-end"
                      id="navbarNavDropdown"
                    >
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                          <Link class="nav-link" to="/">
                            HOME
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/about">
                            ABOUT US
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/shop">
                            SHOP
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/productlist">
                            NEW PRODUCT LIST
                          </Link>
                        </li>
                        <li class="nav-item">
                          <Link class="nav-link" to="/blog">
                            BLOGS
                          </Link>
                        </li>

                        <li class="nav-item">
                          <Link class="nav-link" to="/contact">
                            CONTACT US
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
