import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePhoto:{
    type: String,
    required: true,
  },
  posts: {
    type: [{type: mongoose.Schema.Types.ObjectId,ref:"Post"}],
    default: []
  },
  likePosts: {
    type: [{type: mongoose.Schema.Types.ObjectId,ref:"Post"}],
    default: []
  },
  savePosts: {
    type: [{type: mongoose.Schema.Types.ObjectId,ref:"Post"}],
    default: []
  },
  followers:{
    type: [{type: mongoose.Schema.Types.ObjectId,ref:"UserModel"}],
    default: []
  },
  followings:{
    type: [{type: mongoose.Schema.Types.ObjectId,ref:"UserModel"}],
    default: []
  }
})

const UserModel = mongoose.models.User || mongoose.model('UserModel', UserSchema)
export default UserModel
