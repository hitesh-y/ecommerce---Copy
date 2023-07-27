import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import{BrowserRouter}from"react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Protected from "./Protected";
import Login from "./components/Login";
import Reg from "./components/Reg";
import Services from "./Services";
import Shop from "./Shop";
import Product from "./Product";
import Blog from "./Blog";
import Wishlist from "./components/wishlist";
import {CartProvider, useCart } from "react-use-cart";
import React , {createContext, useState , useEffect} from "react";
import Footer from "./Footer";
import Item from "./components/Item";
import Dashboard from "./components/Dashboard";
import Productlist from "./components/Productlist";
import CartPage from "./components/CartPage";
import Otp from "./components/Otp";
import Account from "./components/profile/Account";
import Address from "./components/profile/Address";
import Myorder from "./components/profile/Myorder";
import Payment from "./components/profile/Payment";


export const GlobalInfo = createContext();

function App() {
  const { addItem , items } = useCart();
   const [baseUrl, setBaseUrl]=useState("http://192.168.1.86/ecom_for_react_api/public/api/");
   const [addcart, setaddcart]=useState();

 const add_cart =(items)=>{
    if (localStorage.getItem("Token")) {
      fetch(baseUrl + "add-cart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
        body: JSON.stringify({
          product_id: items.id,
          qty: 1,
          add_type: "add",
        }),
      })
        .then((res) =>{return( res.json())})
        .then((data) => {
          setaddcart(data)
        });
    } else {
      addItem(items);
    }
   }

  return (
    <>      <BrowserRouter>
    <CartProvider>
     <GlobalInfo.Provider value={{url:baseUrl , add_cart:add_cart , addcart:addcart }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product" element={<Product />} />
            <Route path="about" element={<Protected Value={About} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="login" element={<Login />} />
            <Route path="reg" element={<Reg />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="services" element={<Protected Value={Services}/>} />
            <Route path="/product/:name" element={<Item />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productlist" element={<Productlist />} />
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/address" element={<Address />} />
            <Route path="/order" element={<Myorder />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
      </GlobalInfo.Provider>   
      </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
