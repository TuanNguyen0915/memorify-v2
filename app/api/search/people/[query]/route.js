
import User from "@/lib/database/models/user.model";
import { connectDB } from "@/lib/database/mongoose";

export const GET = async (req, { params }) => {

  try {
    await connectDB();
    const searchPosts = await User.find({
      $or: [
        { firstName: { $regex: params.query, $options: "i" } },
        { lastName: { $regex: params.query, $options: "i" } },
        { username: { $regex: params.query, $options: "i" } },
        { email: { $regex: params.query, $options: "i" } },
      ],
    })
    return new Response(JSON.stringify(searchPosts), { status: 200 });
  } catch (error) {
    return new Response("Failure to search data", { status: 500 });
  }
};
