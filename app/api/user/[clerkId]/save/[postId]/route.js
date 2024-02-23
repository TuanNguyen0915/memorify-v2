import Post from "@/lib/database/models/post.model";
import User from "@/lib/database/models/user.model";
import { connectDB } from "@/lib/database/mongoose";

export const POST = async (req, { params }) => {
  try {
    await connectDB();
    const user = await User.findOne({ clerkId: params.clerkId }).populate([
      {
        path: "posts likePosts savePosts",
        model: Post,
        populate: {
          path: "creator",
          model: User,
        },
      },
      {
        path: "followers followings",
        model: User,
        populate: {
          path: "posts savePosts likePosts",
          model: Post,
        },
      },
    ]);
    const isSaved = user.savePosts.find(item => item._id.toString() === params.postId.toString())
    //*TODO: if user save the post click will un-save the post, and save otherwise
    if(isSaved) {
      user.savePosts = user.savePosts.filter(item => item._id.toString() !== params.postId.toString())
    } else {
      user.savePosts.push(params.postId)
    }
    await user.save()
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
