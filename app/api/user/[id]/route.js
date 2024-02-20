import {connectDB} from "@/lib/database/mongoose";
import User from '@/lib/database/models/user.model'

export  const GET = async (req,{params}) => {
  try {
    await connectDB()
    const user = await User.findOne({clerkId: params.id}).populate(
      'followers followings'
    )
    return new Response(JSON.stringify((user)), {status:200})
  }catch (err) {
    console.log(err)
  return new Response("Failure to get user data")
  }
}