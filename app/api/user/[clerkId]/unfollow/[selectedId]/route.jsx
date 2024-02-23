import User from "@/lib/database/models/user.model";

const { connectDB } = require("@/lib/database/mongoose");

export const POST = async (req, { params }) => {
  try {
    connectDB();
    // find current user
    const currentUser = await User.findOne({
      clerkId: params.clerkId,
    }).populate("posts likePosts savePosts followers followings");
    // selectedUser to following
    const selectedUser = await User.findById(params.selectedId).populate(
      "posts likePosts savePosts followers followings",
    );
    currentUser.followings = currentUser.followings.filter(
      (item) => item._id.toString() !== selectedUser._id.toString(),
    );
    selectedUser.followers = selectedUser.followers.filter(
      (item) => item._id.toString() !== currentUser._id.toString(),
    );

    Promise.all([currentUser.save(), selectedUser.save()])
    return new Response(JSON.stringify(currentUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error", { status: 500 });
  }
};
