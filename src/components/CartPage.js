import React, {useState} from "react";
import { useCart } from "react-use-cart";

const CartPage = () => {
  const [val , setVal]=useState(1);
  
	const style={
		width: 'unset',
		justifyContent: 'center',
		alignItems: 'center',
		outline: 'none',
		padding:' 11px 2rem' ,
		margin:' 0 5 10 0px',
		fontWeight: '600' ,
		transition: 'all 150ms ease-in-out 0s ' ,
		lineHeight: '1' ,
		height: '40px' ,
		fontSize: '14px',
		borderRadius: '5px' ,
	  }

  const {
    isEmpty,
    totalUniqueItems,
    items,
    quantity,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div>
      <div class="container-fluid cart-section">
        <div class="container">
          <div class="row">
            <div class="col-md-10">
              <div class="row">
                <div class="col-md-8">
                  {items.map((item) => (
                  
                    <div key={item.id}>
                      <div class="col">
                        <h1 class="heading2"> Product Item</h1>
                      </div>
                      <div class="col-md-4">
                        <div class="product-image" style={{ display: "flex" }}>
                          <a href="#">
                            <img
                              class="img-fluid prdct-img"
                              src="/assets/images/products1.png"
                            />
                          </a>
                        </div>
                      </div>

                      <div class="col-md-8">
                        <div class="col">
                          <div class="product-info">
                            <a href="#0">
                              {" "}
                              Amcrest Security Camera in White Color
                            </a>
                            <p>
                              AyoMart<span class="price"> ₹{item.price }  Quantity = {item.quantity}</span>
                            </p>
                          </div>
                        </div>
                        <div class="col">

                        <div class="product-input-group">
                          <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} style={style}  type="button" class=" btn-outline-secondary"> - </button>
                          <input
                            style={style}
                            type="text"
                            name="quantity"
                            value={item.quantity}
                            onChange={(e) => { setVal(e.target.value); updateItemQuantity(item.id, item.quantity = val)}}
                          />
                      
                           <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} style={style}  type="button" class=" btn-outline-primary"> + </button>
                        </div>

                          {/* <div class="product-input-group">
					              		<button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} style={style}  type="button" class=" btn-outline-secondary"> - </button>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} style={style}  type="button" class=" btn-outline-primary"> + </button>
                            <button onClick={() => removeItem(item.id)} style={style} type="button" class=" btn-outline-danger"> RemoveItem </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    ))}
                </div>

                <div class="col-md-4">
                  <div class="total-summry">
                    <h1 class="shopping-headingg"> Price Summary</h1>
                    <ul class="cart-itemss">
                      <li class="col">
                        <span class="left-text">
                          <h6>Subtotal({totalUniqueItems})</h6>
                        </span>
                        <span class="right-text">
                          <h6> ₹{cartTotal}</h6>
                        </span>
                      </li>

                      <li>
                        <div class="left-text">
                          <h6>Shipping</h6>
                        </div>
                        <div class="right-text">
                          <h6>Free</h6>
                        </div>
                      </li>

                      <li>
                        <div class="left-text">
                          <h6>Discount</h6>
                        </div>
                        <div class="right-text">
                          <h6> ₹ 00.00</h6>
                        </div>
                      </li>

                      <li class="total-list">
                        <div class="left-textt">
                          <h6>TOTAL</h6>
                        </div>
                        <div class="right-textt">
                          <h6> ₹{cartTotal}</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col">
                    <div class="cjeckout-btn">
                      <a href="#0"> Checkout</a>
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

export default CartPage;
