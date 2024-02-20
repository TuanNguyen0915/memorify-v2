import Post from '@/lib/database/models/post.model'
import User from '@/lib/database/models/user.model'
import { connectDB } from '@/lib/database/mongoose'
import { writeFile } from 'fs/promises'

export const POST = async (req) => {
  
  const path = require('path')
  const currentDirectory = process.cwd()
  try {
    await connectDB()
    const data = await req.formData()
    let postPhoto = data.get('postPhoto')
    const bytes = await postPhoto.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const photoPath = path.join(currentDirectory, 'public', 'uploads', postPhoto.name)
    await writeFile(photoPath, buffer)
    postPhoto = `/uploads/${postPhoto.name}`
    const newPost = await Post.create({
      creator: data.get('creator'),
      caption: data.get('caption'),
      tag: data.get('tag'),
      postPhoto: postPhoto,
    })
    await newPost.save()

    //update the post to user
    await User.findByIdAndUpdate(
      data.get('creator'),
      {
        $push: {
          posts: newPost._id,
        },
      },
      { new: true }
    )
    return new Response(JSON.stringify(newPost), { status: 200 })
  } catch (error) {

    return new Response('Failed to create post', { status: 500 })
  }
}
