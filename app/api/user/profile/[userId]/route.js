import { connectDB } from "@/lib/database/mongoose";
import User from "@/lib/database/models/user.model";
// import Post from "@/lib/database/models/post.model";
export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const user = await User.findById(params.userId)
      // .populate({
      //   path: "followers followings",
      //   model: User,
      // })
      // .populate({
      //   path: "posts savePosts likePosts",
      //   model: Post,
      // });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failure to get user data");
  }
};
