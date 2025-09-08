import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import SearchBar from "./Components/SearchBar"

function App() {
 
  return (
    <div className="w-7xl m-auto">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/placeorder' element={<PlaceOrder/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
