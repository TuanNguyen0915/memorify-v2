import Post from "@/lib/database/models/post.model";
import User from "@/lib/database/models/user.model";
import { connectDB } from "@/lib/database/mongoose";
import { uploadToCloudinary } from "@/services/post.service";

export const POST = async (req) => {
  try {
    await connectDB();
    const data = await req.formData();
    let postPhoto = data.get('postPhoto')
    const uploadImage = await uploadToCloudinary(postPhoto);
    const newPost = await Post.create({
      creator: data.get("creator"),
      caption: data.get("caption"),
      tag: data.get("tag"),
      postPhoto: uploadImage.url,
    });
    await newPost.save();

    //update the post to user
    await User.findByIdAndUpdate(
      data.get("creator"),
      {
        $push: {
          posts: newPost._id,
        },
      },
      { new: true },
    );
    return new Response(JSON.stringify(newPost), { status: 200 });
  } catch (error) {
    return new Response("Failed to create post", { status: 500 });
  }
};
