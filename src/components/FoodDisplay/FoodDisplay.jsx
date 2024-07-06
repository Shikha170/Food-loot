import React, { useContext } from 'react'
import './fooddisplay.css';
import { Context } from '../../context/Context';
import Fooditem from '../fooditem/Fooditem';
import { food_list } from '../../assets/assets';
const FoodDisplay = ({category}) => {
    const {food_list}=useContext(Context)
  return (
    <div className='food-display' id='food-display'>
    <h2>Top Dishes for you</h2>
    <div className='food-display-item'>
       {food_list.map((item, index)=>{
        if(category==="All"|| category===item.category){
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/> 
        }
        
       })}
    </div>

    </div>
  )
}

export default FoodDisplay