import { blog_data } from '@/assets/assets'
import React from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
  return (

    <div>
      <div className='flex justify-center gap-5 my-18'>
            <button className='bg-black text-white py-1 px-4 rounded-sm'>All</button>
            <button >technology</button>
            <button >Startup</button>
            <button >Life Style</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 x:mx-24'>

        {blog_data.map((item , index) => {

            return <BlogItem key={index} title={item.title} image={item.image} description={item.description} category={item.category}/>

        })}

      </div>
    </div>
  )
}

export default BlogList
