import ConnectDB from "@/lib/config/db";

const { NextResponse } = require("next/server");
import {writeFile} from 'fs/promises'



const LoadDb = async () => {

    await ConnectDB();

}

LoadDb();

export async function GET (request) {

    console.log('Blog get Hit');
    return NextResponse.json({msg: 'API working GET'})
    
    
}

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
    
    return NextResponse.json({imageUrl})
    

}