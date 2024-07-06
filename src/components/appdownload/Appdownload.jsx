import React from 'react'
import './appdown.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
     <p>For better Experience Download our<br/> Tomato app</p>
     <div className='app-plateform'>
         <img src={assets.play_store}/>
          <img src={assets.app_store}/>
     
     </div>
   
    </div>
  )
}

export default Appdownload