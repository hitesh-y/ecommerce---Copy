import React from "react";
import { useState, useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom';


const Otp =(props)=>{
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setUserEmail] = useState(location.state.userEmail);

    const handleSubmit = async e => {
        e.preventDefault();
        const data =new FormData(e.target);
        const email = data.get('email');
        const otp = data.get('otp1')+data.get('otp2')+data.get('otp3')+data.get('otp4')+data.get('otp5')+data.get('otp6');
   
        fetch(props.baseUrl+'public/api/registartion-submit-otp',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,otp
          })
        }).then(res => res.json())
        .then(
            (result) => {
            if(result.error){
                alert(result.message);
            }else{
                localStorage.setItem('Token', result.token);
                localStorage.setItem('name', result.name);
                localStorage.setItem('email', result.email);
                alert(result.message);
                navigate("/");
            }
            
            },
            (error) => {
                alert(error);
            }
        )
        
    }

    const handleSubmitResndOtp = async e => {
        e.preventDefault();

        fetch(props.baseUrl+'public/api/sendotp',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
                    'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
        }).then(res => res.json())
        .then(
            (result) => {
                if(result.error){
                    alert(result.message);
                }else{
                    //localStorage.setItem('Token', result.token);
                    alert(result.message);
                    setCounter(30);
                }
            
            },
            (error) => {
                alert.error(error);
            }
        )
        
    }


    const [counter, setCounter] = useState(30);
    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

        if(counter>0){
            document.getElementById('otp-again').style.display = "none";
            document.getElementById('timer_left').style.display = "Block";
        }else{
            document.getElementById('otp-again').style.display = "block";
            document.getElementById('timer_left').style.display = "none";
        }


        return () => clearInterval(timer);

    }, [counter]);

    return(
        <div>
                                    <div class="col-md-12 mt-5">
                        <div class="full-form">
                          <div class="contact-form">
                            <h3 class="contact-heading">Otp Verification</h3>
                            <span>
                              {" "}
                              Please enter the OTP (one time password) to verify
                              your account. A Code has been sent to *******179
                            </span>
                          </div>
                          <div class="form-group mb-3">
                            <input
                              type="email"
                              class="form-control otp"
                              placeholder=""
                            />
                            <input
                              type="email"
                              class="form-control otp"
                              placeholder=""
                            />
                            <input
                              type="email"
                              class="form-control otp"
                              placeholder=""
                            />
                            <input
                              type="email"
                              class="form-control otp"
                              placeholder=""
                            />
                            <input
                              type="email"
                              class="form-control otp"
                              placeholder=""
                            />
                            <input
                              type="email"
                              class="form-control otp"
                              placeholder=""
                            />
                          </div>

                          <div class="form-button">
                            <button
                              class="button"
                              type="submit"
                              form="login-form"
                            >
                              Submit <i class="fa-solid fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
        </div>
    )
};

export default Otp;