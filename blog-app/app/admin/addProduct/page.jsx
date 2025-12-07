"use client"

import { assets } from '@/assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

    const [image, setImage] = useState(false)
    const [data, setData] = useState({

        title: "",
        description: "",
        category: "Startup",
        author: "Biswas",
        authorImage: "/author_img.png"
    });

    const onChangeHandler =  (e) => {

        const name = e.target.name;
        const value = e.target.value
        setData(data => ({...data, [name]:value}))
        
        

    }

    const onSubmitHandler = async (e) => {

        e.preventDefault()

        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('category', data.category);
        formData.append('author', data.author);
        formData.append('authorImage', data.authorImage)
        formData.append('image', image);

        const response = await axios.post('/api/blog', formData);

        if (response.data.success) {
            
            toast.success(response.data.msg)
            setImage(false);
            setData({

                    title: "",
                    description: "",
                    category: "Startup",
                    author: "Biswas",
                    authorImage: "/author_img.png"
                })


        }else{
            toast.error("Error")
        }

    }

  return (
    <>

        <form  onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>

            <p className='text-xl'>Upload thumbnail</p>

            <label htmlFor="image">
  {!image ? (
    <Image className='mt-4' src={assets.upload_area} width={140} height={70} alt='' />
  ) : (
    <img className='mt-4 w-[140px] h-[70px]' src={URL.createObjectURL(image)} alt='' />
  )}
</label>

            
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />

            <p className='text-xl mt-4 '>Blog title</p>
            <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='Type here' required />

            <p className='text-xl mt-4 '>Blog Description</p>
            <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text" placeholder='write content here' rows={6} required />

            {/* Category Selection Button */}

            <p className='text-xl mt-4'>Blog Category</p>
            <select name="category"  onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500' >

                <option value="Startup">Startup</option>
                <option value="Technology">Technology</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            <br />
            <button type='submit' className='mt-8 w-40 h-12 bg-black text-white cursor-pointer active:text-amber-50 active:bg-gray-600'>Add</button>
        </form>
      
    </>
  )
}

export default page
