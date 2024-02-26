import Post from "@/lib/database/models/post.model";
import User from "@/lib/database/models/user.model";
import { connectDB } from "@/lib/database/mongoose";
import { writeFile } from "fs/promises";

export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const post = await Post.findById(params.postId).populate("creator");
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Fail to fetch photo", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectDB();
    const post = await Post.findByIdAndDelete(params.postId).populate(
      "creator",
    );
    const selectedUser = await User.findById(post.creator._id);
    selectedUser.posts = selectedUser.posts.filter(
      (item) => item._id.toString() !== post._id.toString(),
    );
    await selectedUser.save();
    return new Response(JSON.stringify(selectedUser), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to delete post", { status: 500 });
  }
};

//EDIT POST
export const POST = async (req, { params }) => {
  const path = require("path");
  const currentDirectory = process.cwd();
  try {
    await connectDB();
    const data = await req.formData();
    let postPhoto = data.get("postPhoto");
    if (typeof postPhoto !== "string") {
      const bytes = await postPhoto.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const photoPath = path.join(
        currentDirectory,
        "public",
        "uploads",
        postPhoto.name,
      );
      await writeFile(photoPath, buffer);
      postPhoto = `/uploads/${postPhoto.name}`;
    }

    const post = await Post.findByIdAndUpdate(
      params.postId,
      {
        creator: data.get("creator"),
        caption: data.get("caption"),
        tag: data.get("tag"),
        postPhoto: postPhoto,
      },
      {
        new: true,
      },
    );
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Failed to updated post", { status: 500 });
  }
};
