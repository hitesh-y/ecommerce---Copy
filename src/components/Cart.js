import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { GlobalInfo } from "../App";

const Cart = (props) => {
  const { url , addcart } = useContext(GlobalInfo);
  const [product, setProduct] = useState([]);
  const [Isloading, setIsLoaded] = useState(false);

  const style={
    position:'absolute',
    right: '9px',
    textAlign: 'right',
    top: '10px',
    width:'auto',
    backgroundColor:'white',
    border:'0px'
  }
  const style2={
    display: 'block',
    width: '100%',
    textAlign: 'center',
    padding: '8px 10px',
    lineHeight: '19px',
    fontSize: '1.5rem',
    backgroundColor: '#0aa493',
    color: '#fff',
    border:'0',
  }
  const {
    items,
    removeItem,
    cartTotal,
    emptyCart
  } = useCart();

useEffect(()=>{
  if (localStorage.getItem("Token")) {
    fetch(url + "cart-list", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) =>{return( res.json())})
      .then((data) => {
        setProduct(data.result)
      });   
  } else{
    setProduct(items)
  }
},[items , addcart ]);


const newArray = product.map(function (item) {
 if(localStorage.getItem("Token")){ return {
    id: item.product_id,
    price: item.sale_price,
    name: item.name,
    slug: item.slug,
    quantity:item.qty,
  };}
  else{
    return {
      id: item.id,
      price: item.price,
      name: item.name,
      slug: item.slug,
      quantity:item.quantity,
    };
  }
});

const removeItemdata = (items) => {
  if (localStorage.getItem("Token")) {
    fetch(url + "delete-cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify({
        id: items.id
        
      }),
    })
      .then((res) => res.json())
      .then((result) => {
       fetch(url + "cart-list", {
        method:'GET',
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("Token")}`
        },
       })
       . then((response)=>response.json())
       .then((data)=>{
        setProduct(data.result)
       })
      });
  }else{
     removeItem(items.id);
  }
};
{props.cartnum(product)}


let totals = 0;
product.forEach((item, i) => {
  totals += item.sale_price * item.qty;
});

  return (
    <>
        
      <div class="">
        <div class="products-views">
        { newArray.map((item) => (
          <div key={item.id} class="row justify-content-start align-items-center d-flex products">
          
              <button style={style} onClick={ ()=>removeItemdata(item)}>
                <i class="fa-solid fa-xmark"></i>
              </button>

            <div class="col-lg-4">
              <div class="products-icons">
                <img
                  src="/assets/images/products1.png"
                  title="cart"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-8">
              <div class="products-body">
                <p class="text-start mb-2">
                  Amcrest Security Camera in White Color
                </p>
                <p>
                  {item.price } <span>x {item.quantity}</span>
                </p>
              </div>
            </div>
          </div>
         )) }
        </div>  
        <div class="col total-sec">
          <span class="">Subtotal</span>
          <span class=""> ₹{localStorage.getItem('Token') ? totals : cartTotal}</span>
        </div>
        <div class="row cart-checkout-sec">
          <div class="col-6">
            <Link to="/cartpage" class="javascript:void();">
              View Cart
            </Link>
          </div>
          <div class="col-6">
            <button style={style2} onClick={() => emptyCart()} class="javascript:void();">
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
