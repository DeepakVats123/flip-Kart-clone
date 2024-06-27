import { useRef } from "react";
import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";



export const CartContext = createContext();




const CartContextProvider = ( {children} )=>{
    // const carturl = `https://flipkart-data.onrender.com/products`
    const token = localStorage.getItem('flipkartToken');
    const carturl = `https://flipkart-api-new.onrender.com/cart`
    
    const [cartData, SetCartData] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const [globalAddress, setGlobalAddress] = useState({})
    function getData() {
        setLoading(true);
        fetch(`${carturl}?token=${token}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res, 'resylt');
            SetCartData(res)
          })
          .catch((err) => console.log(err))
          .finally(()=>setLoading(false))
      }
      useEffect(()=>{
        getData();
      },[])

      

return <CartContext.Provider value={{ 
        cartData, SetCartData,loading,
        setLoading, getData, globalAddress, setGlobalAddress, carturl
    }} >
    {children}
</CartContext.Provider>

}


export default CartContextProvider;