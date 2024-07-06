import React, {useContext} from 'react'
import './cart.css'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const {cartItem,food_list,removeFromCart,getTotalAmount}= useContext(Context)
    const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className='cart-item'>
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item, index)=>{
            if(cartItem[item._id]>0){
                return(
                  <div>
                    <div className='cart-item-title cart-item-item'>
                    <img src={item.image}/>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${item.price*cartItem[item._id]}</p>
                    <p className='cross' onClick={()=>removeFromCart(item._id)}>x</p>
                    </div>
                    <hr/>
                    </div>
                )
            }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
         <h2>Cart Total</h2>
          <div>
            <div className='cart-total-detail'>
             <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
             </div>
             <hr/>
           <div className='cart-total-detail'>
            <p>Delivery fee</p>
            <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className='cart-total-detail'>
            <b>Total</b>
            <b>${getTotalAmount()===0?0:getTotalAmount()+2}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>PROCCED TO CHECKOUT</button>
        </div>
        <div className='cart-promo'>
          <div>
          <p>It you have promo code , Enter here</p>
           <div className='cart-promo-input'>
            <input type='text' placeholder='ENTER PROMO CODE'></input>
            <button>Submit</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart