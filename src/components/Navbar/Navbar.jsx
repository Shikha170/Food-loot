import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../../pages/cart/Cart'
import { Context } from '../../context/Context'
const Navbar = ({setShowlogin}) => {
    const [menu, setMenu]=useState("Home")
    const {getTotalAmount,token,setToken}=useContext(Context);
    const navigate=useNavigate();
    const logout=()=>{
      localStorage.removeItem("token");
      setToken("")
      navigate('/')
    }
  return (
    <div className='navbar'>
 <Link to='/'> <img src={assets.logo} alt='' className='logo'/></Link>
    <ul className='navbar-menu'>
     <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
     <a href='#menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
     <a href='#appdownload' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile App</a>
     <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</a>
    </ul>
    <div className='navbar-right'>
      <img src={assets.search_icon} alt=''/>
      <div className='navbar-search-icon'>
       <Link to='/cart'> <img src={assets.basket_icon} alt=''/></Link>
         <div className={getTotalAmount()===0?"":"dot"}></div>
      </div>
      {!token? <button onClick={()=>setShowlogin(true)}> Sign in</button>
    :<div className='navbar-profile'>
      <img src={assets.profile_icon}/>
      <ul className='nav-profile-dropdown'>
        <li><img
        src={assets.bag_icon} alt=''/>
        <p>Orders</p>
        </li>
        <hr/>
        <li onClick={logout}><img src={assets.logout_icon} alt=''/>
        <p>Logout</p>
        </li>
      </ul>

    </div>
  }
     
    </div>
    </div>
  )
}

export default Navbar