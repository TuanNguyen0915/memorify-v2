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
    const post = await Post.findById(params.postId).populate('creator likes')
    const isLike = user.likePosts.find(
      (item) => item._id.toString() === post._id.toString(),
    );
    if (isLike) {
      user.likePosts = user.likePosts.filter(
        (item) => item._id.toString() !== post._id.toString(),
      );
      post.likes = post.likes.filter(
        (item) => item._id.toString() !== user._id.toString(),
      );
    } else {
      user.likePosts.push(post._id);
      post.likes.push(user._id);
    }
    Promise.all([user.save(), post.save()]);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
