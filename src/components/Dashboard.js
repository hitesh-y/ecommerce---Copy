import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-12 top-header">
              <div class="row">
                <div class="col-md-3">
                  <h6>Dashboard</h6>
                </div>
                <div class="col-md-9">
                  <div class="main-heading">
                    <div class="image">
                      <i class="fa-solid fa-user"></i>
                      <h6>My Profile</h6>
                    </div>

                    <button
                      color="primary"
                      class="Button-sc-l2616d-0 fBrTG btn"
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <div class="d-flex align-items-start">
                <div class="col-md-3 left-box">
                  <div
                    class="nav flex-column nav-pills me-3"
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
                      <i class="fa-solid fa-user"></i>My Profile
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
                      <i class="fa-solid fa-location-dot"></i>
                      <Link to="/address"> My Address</Link>
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
                      <i class="fa-brands fa-first-order"></i>
                      <Link to="/order"> My Order</Link>
                    </button>
                    <button
                      class="nav-link"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-heart"></i>
                      <Link to="/wishlist"> My Wishlist </Link>
                    </button>
                    <button
                      class="nav-link"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-bag-shopping"></i>
                      <Link to="/account">Payment Method</Link>
                    </button>
                  </div>
                </div>
                <div class="tab-content" id="v-pills-tabContent">
                  <div class="col-md-9 right-box">
                    {/* <!-- profile section start --> */}
                    <div
                      class="tab-pane fade show active"
                      id="v-pills-home-tab"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div class="profile-image">
                        <img
                          class="img-fluid"
                          src="./assets/pharmacy-profile/profile-img.png"
                        />
                        <div class="side-img">
                          <i class="fa-solid fa-camera"></i>
                        </div>
                      </div>

                      {/* <!-- <div class="form-profile"> --> */}
                      <div class=" formm-box">
                        <div class="col-md-6 form-small">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                              First Name
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>

                        <div class="col-md-6 form-small">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                              Last Name
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="second-box">
                        <div class="col-md-6 form-small">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                              Email{" "}
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>

                        <div class="col-md-6 form-small">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                              Phone
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="third-box">
                        <div class="col-md-6 form-small">
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                              Birth Date
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        color="primary"
                        class="Button-sc-l2616d-0 save-button"
                      >
                        Save Changes
                      </button>
                    </div>

                    {/* <!-- profile section end --> */}

                    {/* <!-- address section start --> */}
                    <div
                      class="tab-pane fade"
                      id="v-pills-profile-tab"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    ></div>

                    {/* <!-- address section end --> */}
                    <div
                      class="tab-pane fade"
                      id="v-pills-messages-tab"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      ...
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-settings-tab"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      ...
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-settings-tab"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
