import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const Context=createContext(null);

// export const Context=createContext(null);


const ContextProvider=(props)=>{

const [cartItem, setCartItem]=useState({});
const url="http://localhost:3000";

const [token, setToken]=useState("");
const [food_list, setFoodList]=useState([])
const addToCart = (itemId)=>{
  if(!cartItem[itemId]){
    setCartItem((prev)=>({...prev,[itemId]:1}))
  }
  else{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
  }
}
const removeFromCart =(itemId)=>{
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
}
const getTotalAmount=()=>{
  let amount=0;
  for(const item in cartItem){
    if(cartItem[item]>0){
    let itneminfo=food_list.find((p)=>p._id===item);
    amount+=itneminfo.price*cartItem[item];}
  }
  return amount;
}
const fetchFoodList=async()=>{
  const response=await axios.get(url+"/api/food/list")
  setFoodList(response.data.data)
}
useEffect(()=>{
  
  async function loadData(){
    await fetchFoodList();
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }
  }
  loadData();
},[])
    const contextValue={
       food_list,
       cartItem,
       setCartItem,
       addToCart,
       removeFromCart,
       getTotalAmount,
       url,
       token,
       setToken
    }
   
   

    return(
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;