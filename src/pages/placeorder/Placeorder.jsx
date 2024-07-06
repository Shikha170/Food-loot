import React, { useContext } from 'react'
import './placeorder.css'
import { Context } from '../../context/Context'
const Placeorder = () => {
  const {getTotalAmount}=useContext(Context)
  return (
    <div>
    <form className='placeorder'>
      <div className='placeorder-left'>
         <p className='title'>Customer Information</p>
         <div className='multifield'>
           <input type='text' placeholder='First Name'/>
           <input type='text' placeholder='Last Name'/>
         </div>
         <input type='email' placeholder='Email'/>
         <input type='text' placeholder='Stree'/>
         <div className='multifield'>
           <input type='text' placeholder='City'/>
           <input type='text' placeholder='State'/>
         </div>
         <div className='multifield'>
           <input type='number' placeholder='Pincode'/>
           <input type='text' placeholder='Country'/>
         </div>
         <input type='text' placeholder='Phone'/>
      </div>
      <div className='placeorder-right'>
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
         <p>${2}</p>
         </div>
         <hr/>
         <div className='cart-total-detail'>
         <b>Total</b>
         <b>${getTotalAmount()+2}</b>
         </div>
         
       </div>
       <button>PROCCED TO PAYMENT</button>
     </div>
      </div>
    </form>
    </div>
  )
}

export default Placeorder