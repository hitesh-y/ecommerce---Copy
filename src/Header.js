import React,{useContext, useState , useEffect} from "react";
import { Link } from "react-router-dom";
import Cart from "./components/Cart";
import Navbar from "./Navbar";
import { useCart } from "react-use-cart";
import {useNavigate} from 'react-router-dom';
import { GlobalInfo } from "./App";

const Header = () => {
  const navigate = useNavigate();
  const { url } = useContext(GlobalInfo);
  const [productnum, setProduct] = useState();
  const [number , setnumber]=useState();

  const logout = () => {
      localStorage.clear();
      navigate("/");
   };

  const {totalUniqueItems} = useCart();
  const cartnum  =(product)=>{
    setProduct(product.length)
  }

  useEffect(()=>{
  if (localStorage.getItem("Token")) {
      setnumber(productnum);
  }
  else{
       setnumber(totalUniqueItems)
  }
 },[productnum,logout] )
  return (
    <div>
      <div class="container-fluid py-xl-4 py-lg-4 py-md-4 py-2 top-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="col">
                <div class="add-header">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <span class="ps-xl-2 ps-lg-2">
                    Stote Location: 1234 Heaven Stress, Beverly Hill, Melbourne,
                    USA.
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="right-header">
                <ul class="justify-content-end d-flex">
                  {localStorage.getItem('Token') ? 
                    <li>
                      <Link  to="/dashboard">My account</Link >
                      <Link  onClick={logout} to="/">Logout</Link >
                    </li>
                        : 
                      <li>
                        <Link  to="/reg">register</Link>
                          <span>or</span>
                        <Link to="/login">Sign in</Link>
                      </li>
                   }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second header */}
      <div class="container-fluid py-xl-4 py-lg-4 py-md-4 main-header">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-md-2 col-sm-3 col-12 logo">
              <div class="col">
                <a  href="index.php">
                  <img src="/assets/images/logo.png" class="img-fluid" alt="logo" />
                </a >
              </div>
            </div>
            <div class="col-xl-2 col-md-2 col-sm-3 col-12 support">
              <div class="col d-flex justify-content-center align-content-center">
                <div class="icons">
                  <i class="fas fa-headphones"></i>
                </div>
                <div class="col ps-xl-4 ps-lg-4 ps-md-4">
                  <label>
                    Hotline Free:
                    <span>(+100) 123 456 7890</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-6">
              <div class="search-top">
                <form action="" class="">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Keywords To Search..."
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button type="submit" class="search-tn">
                      Search{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-xl-2 col-md-2 col-sm-3 col-12">
              <div class="cart-top position-relative">
                <li class="nav-item">
                  <a 
                    class="nav-link pe-xl-4 pe-lg-4"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <img class="img-fluid" src="/assets/images/handbag-cart.png" />
                    <span class="cart-text">
                      <span class="hidden-count">{ number}</span>
                    </span>
                    <span class="cart-title">Your Cart</span>
                  </a >
                  <ul class="dropdown-menu cart-list scrollbars">
                     <Cart cartnum={cartnum}></Cart>
                  </ul>   
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--- Navigation Menu----> */}
        <Navbar/>
    </div>
  );
};
export default Header;
