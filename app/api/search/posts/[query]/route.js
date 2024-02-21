import Post from "@/lib/database/models/post.model";
import { connectDB } from "@/lib/database/mongoose";

export const GET = async (req, { params }) => {

  try {
    await connectDB();
    const searchPosts = await Post.find({
      $or: [
        { caption: { $regex: params.query, $options: "i" } },
        { tag: { $regex: params.query, $options: "i" } },
      ],
    }).populate("creator likes")
    return new Response(JSON.stringify(searchPosts), { status: 200 });
  } catch (error) {
    return new Response("Failure to search data", { status: 500 });
  }
};
