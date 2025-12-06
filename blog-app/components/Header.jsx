import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (

    <div className='py-5 px-5 md:px-12 lg:px-20 '>
        <div className='flex justify-between items-center'>
            <Image alt='' src={assets.logo}  className='w-[200px] sm:w-auto cursor-pointer'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black cursor-pointer bg-black text-white rounded hover:scale-105 transition-all transform duration-300 hover:translate-y-1'>Get Started <Image alt='' src={assets.arrow}className="invert"/></button>
        </div>

        <div className='text-center my-8 bg-gradient-to-b from-white via-pink-50 to-white rounded-3xl p-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1> 
            <p className='mt-10 mx-w-[740px]  m-auto text-xs sm:text-base'>Explore my latest articles packed with knowledge, inspiration, and real-world experiences.</p>

            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border  border-black  shadow-pink-50 rounded-lg p-2 shadow-lg '>

                <input type="email" placeholder='Enter your email' className='pl-4 outline-none ' />
                <button type='submit' className='border-l border-black py-3 px-4 sm:px-8 active:bg-gray-800 text-black cursor-pointer active:text-white bg-gray-400 '>Subscribe</button>

            </form>

        </div>

    </div>
  )
}

export default Header
