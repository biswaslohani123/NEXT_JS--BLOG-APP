
import ConnectDB from "@/lib/config/db";
import blogModel from "@/lib/models/blogModel";

const { NextResponse } = require("next/server");
import {writeFile} from 'fs/promises'


const LoadDB = async () => {
    await ConnectDB()
}

LoadDB()



// APi endpoint to get All blogs
export async function GET (request) {


        const blogId = request.nextUrl.searchParams.get("id");

        if (blogId) {

            const blog = await blogModel.findById(blogId)
            return NextResponse.json(blog)
        }{
            
            const blogs = await blogModel.find({});
    
            return NextResponse.json({blogs})
        }

      
    

    
    
}

// API Endpoint for uploading blogs
export async function POST(request) {


    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);

    const imageUrl = `/${timestamp}_${image.name}`

    
    const blogData = {

        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imageUrl}`,
        authorImage: `${formData.get('authorImage')}`

    }

    await blogModel.create(blogData);
    console.log("Blog saved");
    
    
    return NextResponse.json({success: true, msg: "Blog Added"})
    

}