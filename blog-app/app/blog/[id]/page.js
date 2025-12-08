"use client"

import { assets, blog_data } from '@/assets/assets';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {


    const params = useParams()
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
      
        const response = await axios.get('/api/blog', {
            params: {
                id: params.id
            }
        })

        setData(response.data);
    }

    useEffect(() => {
        fetchBlogData()
    },[])


   
    
  return  ( data ? <>
    <div className='sh py-5 px-5 md:px-12 lg:px-28 bg-linear-to-b from-white via-purple-100 to-white  '>

        <div className='flex justify-between items-center'>
               <Link href='/'>
               <Image  src={assets.logo} width={180} alt='' className='1-[130px] sm:w-auto'/>
               </Link> 
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black cursor-pointer rounded-xl bg-black text-white'>Get Started <Image alt='' src={assets.arrow} className='invert'/></button>
    
        </div>

        <div className=' text-center my-24 '>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>

            <Image alt='' src={data.author_img} width={60} height={60} className='mx-auto mt-6 border border-white rounded-full'/>

            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>

        </div>
    </div>

    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 '>

    <Image alt='' src={data.image} width={1280} height={720} className='rounded-2xl border-4 border-black'/>

    <h2 className='text-[20px] my-8 font-semibold'>Introduction: </h2>
    <p>{data.description}</p>
    <h3 className='my-6 text-[18px] font-semibold'>step 1: Self-Reflection and Goal Setting</h3>
    <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aliquid autem? Praesentium perspiciatis incidunt debitis nesciunt quasi ullam numquam eaque.</p>

    <h3 className='my-6 text-[18px] font-semibold'>step 2: Self-Reflection and Goal Setting</h3>
    <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aliquid autem? Praesentium perspiciatis incidunt debitis nesciunt quasi ullam numquam eaque.</p>

    <h3 className='my-6 text-[18px] font-semibold'>step 3: Self-Reflection and Goal Setting</h3>
    <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aliquid autem? Praesentium perspiciatis incidunt debitis nesciunt quasi ullam numquam eaque.</p>

    <h3 className='my-6 text-[18px] font-semibold'>Conclusion: </h3>
    <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, aliquid autem? Praesentium perspiciatis incidunt debitis nesciunt quasi ullam numquam eaque.</p>

    <div className='my-24'>
        <p className='text-black font-semibold my-4'>Share this article on social media</p>

        <div className='flex'>
            <Image alt='' src={assets.facebook_icon} width={50}/>
            
            <Image alt='' src={assets.twitter_icon} width={50}/>
            
            <Image alt='' src={assets.googleplus_icon} width={50}/>
            
        </div>
    </div>
    

    </div>

    <Footer/>
    </>: <></>
  )
}

export default page
