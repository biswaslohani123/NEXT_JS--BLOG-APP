"use client"

import { blog_data } from '@/assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {


    const [menu, setMenu ] = useState("All");

  return (

    <div>
      <div className='flex justify-center gap-5 my-18'>

            <button onClick={() => setMenu('All')}  className={`py-1 px-4 rounded-sm transition-colors duration-300 ${menu === 'All' ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}>All</button>

            <button onClick={() => setMenu('Technology')} className={`py-1 px-4 rounded-sm transition-colors duration-300 ${menu === 'Technology' ? 'bg-black text-white' : 'bg-white text-black border border-black'}`} >technology</button>

            <button onClick={() => setMenu('Startup')} className={`py-1 px-4 rounded-sm transition-colors duration-300 ${menu === 'Startup' ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}>Startup</button>

            <button onClick={() => setMenu('Lifestyle')} className={`py-1 px-4 rounded-sm transition-colors duration-300 ${menu === 'Lifestyle' ? 'bg-black text-white' : 'bg-white text-black border border-black'}`} >Life Style</button>
      </div>
      
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 x:mx-24'>

        {blog_data.filter((item) => menu === 'All'? true : item.category === menu ).map((item , index) => {

            return <BlogItem key={index} id={item.id} title={item.title} image={item.image} description={item.description} category={item.category}/>

        })}

      </div>
    </div>
  )
}

export default BlogList
