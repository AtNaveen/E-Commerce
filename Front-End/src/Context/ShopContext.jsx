import React ,{ createContext , useEffect, useState} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();


const ShopContextProvider =(props)=>{
    const currency = "$";
    const delivery_fee=10;
    const BACKEND_URL = "https://e-commerce-back-end-4sme.onrender.com";
    const [search,setSearch] = useState('');
    const [showsearch,setShowSearch]= useState(false);
    const [cartItems,setCartItems] = useState({});
    const [products,setProducts] = useState([]);
    const [token,setToken] = useState('');
    const navigate = useNavigate()

    const addToCart = async(itemId, size) => {

        let cartData = structuredClone(cartItems);

            if(!size){
               toast.error('Select Product size')
               return;
             }
             
            if (cartData[itemId]) {
                if(cartData[itemId][size]) {
                    cartData[itemId][size] += 1;
                } else{
                    cartData[itemId][size] = 1;
                }
            } else {
             cartData[itemId] ={};
             cartData[itemId][size] =1;
            }
        setCartItems(cartData);

        if(token) {
            try{
                await axios.post(BACKEND_URL + '/api/cart/add' , {itemId, size} , {headers:{ Authorization: `Bearer ${token}` }})
            }catch(e){
                console.log(e)
                toast.error(e.message)
            }
        }
    }

    const getCartCount = () => {
        let totalCount = 0;
          for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item];
                }
                } catch (e) {
                    console.log(e)
                toast.error(e.message)
                }
            }
        }
        return totalCount;
    }
    
    const updateQuantity = async(itemId,size,quantity) =>{
         let cartData = structuredClone(cartItems);

         cartData[itemId][size] = quantity;

         setCartItems(cartData);
          if(token){
         try {
            axios.post(BACKEND_URL + "/api/cart/update", {itemId, size,quantity} , {headers:{ Authorization: `Bearer ${token}` } } )
            
         } catch (error) {
            console.log(error)
            toast.error(error.message)
         }} 
    }

    const getCartAmount = () =>{
        let totalAmount =0;
        for (const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items );
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch(error){}
            }
        }
        return totalAmount;
    }

    const getProductsData = async() => {

        try {
            const response = await axios.get(BACKEND_URL + "/api/product/list" )
            if(response.data.status === 200) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(response.error.message)
            
        }
    }

    const getUserCart = async(token) => {
        try {
            const response = await axios.post(BACKEND_URL +"/api/cart/get",{},{headers:{ Authorization: `Bearer ${token}` } } )
            if(response.data.success) {
                setCartItems(response.data.cartData)
            } 
         }catch(e){
            console.log(e)
            toast.error(e.message)
        }
    }

   useEffect(()=>{
    getProductsData()
   },[])

   useEffect(()=>{
    if(!token && localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem('token'))
    }
   },[])


    const value ={
     products,currency,delivery_fee ,
      search , showsearch , setSearch ,setShowSearch ,
      cartItems,addToCart,setCartItems,getUserCart,
      getCartCount ,updateQuantity , getCartAmount,
      navigate , BACKEND_URL ,token,setToken
    }

    return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>

    )
}
export default ShopContextProvider;
