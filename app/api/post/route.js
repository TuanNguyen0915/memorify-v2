import Post from "@/lib/database/models/post.model";
import { connectDB } from "@/lib/database/mongoose";
export const GET = async (req) => {
  try {
    await connectDB();
    let posts = await Post.find().populate("creator").sort({ createdAt: -1 });
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failure to fetch posts", { status: 500 });
  }
};
