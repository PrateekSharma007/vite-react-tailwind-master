import React from 'react'
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mx-auto text-center h-[82vh] flex flex-col justify-center' >
                <p className='text-green-600'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl   text-white '>Grow with data.</h1>
                <div className='flex justify-center gap-5 p-2'>
                    <p className= "md:text-4xl sm:text-4xl ">fast, flexible financing for</p>
                    <Typed strings={["BTB","BTC","SAAS"]} typeSpeed={120} backSpeed={130} className='md:text-4xl sm:text-4xl '/>
                </div>
                <p className='text-gray-300 text-xl p-4'> Monitor your data analytics to increase for BTC ,BTB & SAAS </p>
                <button className='bg-green-400 w-[150px] rounded-lg mx-auto p-2 text-black font-semibold'><Link to= "/signin">Get Started</Link></button>
            </div>

        </div>
    )
}

export default Hero