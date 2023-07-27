import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useCart } from "react-use-cart";
import { GlobalInfo } from "../App";

const Login = (props) => {
  const { items, removeItem } = useCart();
  const { url } = useContext(GlobalInfo);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [Isloading, setIsLoaded] = useState(false);

  useEffect(()=>{
    const loader = document.getElementById('preloader');

      if(Isloading){
          loader.style.display = "block";
      }
      else{
          loader.style.display = "none";
      };
  },[Isloading])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoaded(true);
    fetch(url + "login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "email",
        type_value: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.error) {
            alert(result.message);
            setIsLoaded(false);
          } else {
            items.map((item) => {
              fetch(url + "add-cart", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${result.token}`,
                },
                body: JSON.stringify({
                  add_type: "add",
                  product_id: item.id,
                  qty: item.quantity,
                }),
              })
                .then((res) => res.json())
                .then((result) => {
                  if (result.error) {
                    alert(result.message);
                  } else {
                    removeItem(item.id);
                  }
                });
            });

            localStorage.setItem("Token", result.token);
            localStorage.setItem("name", result.name);
            localStorage.setItem("email", result.email);
            setIsLoaded(false);
            alert(result.message);
            navigate("/");
          }
        },
        (error) => {
          setIsLoaded(false);
          alert(error);
          navigate("/login");
        }
      );
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const login = () => {
    localStorage.setItem("Token", true);
    navigate(-1);
  };

  useEffect(() => {
    let logi = localStorage.getItem("login");
    if (logi) {
      navigate("/");
      alert("login successfull !");
    }
  },[]);

  return (
    <div>
      <div class="container-fluid">
        <div class="contact-section pt-120 pb-120 account-boxs">
          <div class="container-fluid">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-10">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="login-banner">
                        <img
                          src="./assets/images/login.jpg"
                          title="login"
                          class="img-fluid"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="col-md-12">
                        <div class="full-form">
                          <div class="contact-form">
                            <h3 class="contact-heading">
                              Create your Account!
                            </h3>
                            <span>
                              {" "}
                              Don't Have an Account? <a href="#">
                                {" "}
                                Sign Up!
                              </a>{" "}
                            </span>
                          </div>
                          <div class="form-group mb-3">
                            <input
                              value={email}
                              onInput={(e) => setEmail(e.target.value)}
                              type="email"
                              class="form-control"
                              placeholder="Email address"
                            />
                          </div>
                          <div class="form-group mb-3">
                            <input
                              value={password}
                              onInput={(e) => setPassword(e.target.value)}
                              type="password"
                              class="form-control"
                              placeholder="Password"
                            />
                          </div>

                          <div class="radio-button py-4">
                            <div class="checkbox margin-top-0">
                              <input type="checkbox" id="two-step" />
                              <label for="two-step">
                                <span class="checkbox-icon"></span> Remember Me
                              </label>
                            </div>
                            <a href="#">Forgot Password?</a>
                          </div>

                          <div class="form-button">
                            <button
                              class="button"
                              type="submit"
                              form="login-form"
                              onClick={handleSubmit}
                            >
                               <div class="justify-content-center" id="preloader" style={{display:'none'}}>
                                      <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                      </div>
                                    </div>
                              Log In <i class="fa-solid fa-angle-right"></i>{" "}
                            </button>
                          </div>
                          <div class="login-separator">
                            <span>Or Login in With</span>
                          </div>

                          <div class="social-button">
                            <FacebookLogin
                              appId="1088597931155576"
                              // autoLoad={true}
                              fields="name,email,picture"
                              cssClass="my-facebook-button-class"
                              icon="fa-facebook"
                              buttonStyle={{
                                borderRadius: "2px",
                                padding: "10px",
                                color: "rgba(0, 0, 0, 0.54)",
                                border: "0px",
                                backgroundColor: "white",
                                boxShadow:
                                  " rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px",
                              }}
                              // onClick={componentClicked}
                              callback={responseFacebook}
                            />
                            ,
                            <GoogleLogin
                              clientId="326538060414-5vqrgaosddu857h2siom011r796tfl4j.apps.googleusercontent.com"
                              buttonText="Google"
                              onSuccess={responseGoogle}
                              onFailure={responseGoogle}
                            />
                            <button class="twitter-login">
                              <i class="fa-brands fa-twitter"></i> Twitter
                            </button>
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
  );
};

export default Login;
