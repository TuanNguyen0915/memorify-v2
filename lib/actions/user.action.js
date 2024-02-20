import {connectDB} from "@/lib/database/mongoose";
import User from "@/lib/database/models/user.model";

export const createOrUpdateUser = async (id,first_name,last_name,image_url,email_addresses , username) => {
  try {
    await connectDB()

    return await Promise.all([
      User.findOneAndUpdate({
        clerkId:id
      },{
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address,
          username: username
        }
      }, {
        upsert: true,new:true
      })
    ])
  } catch (err) {
    console.log(err)
  }
}

export const deleteUser = async (id) => {
  try{
    await connectDB()
    return await User.findOneAndDelete({clerkId:id})
  } catch (err) {
    console.log(err)
  }
}
