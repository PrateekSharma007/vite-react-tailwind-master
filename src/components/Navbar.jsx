import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai";


const Navbar = () => {

  const [nav,setNav] = useState(false);

  const handlenav = () => { 
    setNav(!nav)
  }



  return (
    <div className="flex justify-between items-end text-white h-24 max-w-[1240px] mx-auto px-4">
      <div className="left">
        <h1 className="text-green-500 text-2xl">WEBSITE.</h1>
      </div>
      <div className="right ">
        <ul className= "hidden md:flex justify-between items-center gap-5 ">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/account">Account</Link></li>
          <li><Link to="/signin">Signin</Link></li>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Create Account
          </button>
        </ul>
        <div onClick= {handlenav} className = "block md:hidden">
          {!nav ? <AiOutlineClose size = {20}/> : <GiHamburgerMenu size= {20} />} 
          
        </div>
        <div className=  {!nav ? " md:hidden fixed left-0 top-0   w-[60%] border-r border-r-gray-900 ease-in-out duration-500" :"fixed left-[100%]"}>
          <ul className = "p-5 mt-28 h-[100vh] text-white uppercase">
            <li className='mt-2 border-b border-gray-500 pb-4'><Link to="/">Home</Link></li>
            <li className='mt-2 border-b border-gray-500 pb-4'><Link to="/account">Account</Link></li>
            <li className='mt-2 border-b border-gray-500 pb-4'><Link to="/signin">Signin</Link></li>
            <li className='mt-2 border-b border-gray-500 pb-4'><Link to="/signin">About</Link></li>
            <li className='mt-2 border-b border-gray-500 pb-4'><Link to="/signin">Contact</Link></li>
          </ul>
        </div>

      </div>
    </div>
  )
}


export default Navbar