import { connectDB } from "@/lib/database/mongoose";
import User from "@/lib/database/models/user.model";
import Post from "@/lib/database/models/post.model";

export const GET = async (req, { params }) => {
  //posts likePosts savePosts
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

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failure to get user data");
  }
};
