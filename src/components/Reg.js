import React,{useEffect, useState} from "react";
// import { useAlert } from 'react-alert'
// import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useCart } from "react-use-cart";


const Reg = (props) => {
  const { items } = useCart();
  const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setCpassword] = useState('');
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

    const handleSubmit = async e => {
        e.preventDefault();
        setIsLoaded(true);
        fetch('http://192.168.1.22/ecom_for_react_api/public/api/emailuser-registration',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name, email, password, confirm_password
          })
        }).then(res => res.json())
        .then((result) => {

          if(result.error){
            alert(result.message);
            setIsLoaded(false);
        }else{

          items.map((item)=>{
            fetch('http://192.168.1.22/ecom_for_react_api/public/api/add-cart',{
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                          'Content-Type': 'application/json',
                          "Authorization": `${result.token}`,       
              },
              body: JSON.stringify({
                   'add_type':'add',
                   'product_id':item.id,
                   'qty': item.quantity
                })
              }).then(res => res.json())
              .then();
           })
            localStorage.removeItem("react-use-cart");

            localStorage.setItem('Token', true);
            localStorage.setItem('name', result.name);
            localStorage.setItem('email', result.email);
            setIsLoaded(false);
            alert(result.message);
            navigate("/");
        }
               
            if(result.error){
              alert(result.message);
              setIsLoaded(false);
            }else{
              setIsLoaded(false);
              alert(result.message);
               navigate("/");
            }
            
            },
            (error) => {
                setIsLoaded(false);
                 alert(error);
            }
        )
        
    }



  return (
    <>
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
                      {/* <!-- register Section --> */}
                      <form  onSubmit={handleSubmit} method="post">
                        <div class="col-md-12 mt-5">
                            <div class="full-form">
                            <div class="contact-form">
                                <h3 class="contact-heading">
                                Welcome
                                </h3>
                                <span>
                                {" "}
                                Don't Have an Account? 
                                </span>
                            </div>
                            <div class="form-group mb-3">
                                <input
                                value={name}
                                onChange={ (e)=>setName(e.target.value)}
                                type="text"
                                required
                                class="form-control"
                                placeholder="Name "
                                />
                            </div>
                            <div class="form-group mb-3">
                                <input
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                type="email"
                                class="form-control"
                                required
                                placeholder="Email address"
                                />
                            </div>
                            <div class="form-group mb-3">
                                <input
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                type="password"
                                class="form-control"
                                required
                                placeholder="Password"
                                />
                            </div>
                            <div class="form-group mb-3">
                                <input
                                value={confirm_password} 
                                onInput={e => setCpassword(e.target.value)}
                                type="password"
                                class="form-control"
                                placeholder="Confirm Password"
                                />
                            </div>

                            <div class="radio-button py-4">
                                <div class="checkbox margin-top-0">
                                <input type="checkbox" id="two-step" />
                                <label for="two-step">
                                    <span class="checkbox-icon"></span>I Have Read
                                    and Agree to the
                                </label>
                                </div>
                                <a href="#">Terms Conditions</a>
                            </div>
                            <div class="form-button">
                                <button
                                class="button"
                                type="submit"
                                // form="login-form"
                                >
                                   <div class="justify-content-center" id="preloader" style={{display:'none'}}>
                                      <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                      </div>
                                    </div>
                                Sing Up <i class="fa-solid fa-angle-right"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                      </form>
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

export default Reg;
