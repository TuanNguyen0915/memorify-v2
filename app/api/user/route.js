import User from "@/lib/database/models/user.model";
import { connectDB } from "@/lib/database/mongoose";

export const GET = async (req, ) => {
  try {
    await connectDB();
    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response("Fail to fetch data", { status: 500 });
  }
}