import User from "@/lib/database/models/user.model";

const { connectDB } = require("@/lib/database/mongoose");

export const POST = async (req, { params }) => {
  try {
    await connectDB();
    // find current user
    const currentUser = await User.findOne({
      clerkId: params.clerkId,
    }).populate("posts likePosts savePosts followers followings");
    // selectedUser to following
    const selectedUser = await User.findById(params.selectedId).populate(
      "posts likePosts savePosts followers followings",
    );

    const isFollow = currentUser.followings.find(
      (item) => item._id.toString() === selectedUser._id.toString(),
    );
    //TODO: if current user had following the selectedUser, then remove by filter the selectedUser from currentUser.followings. And remove currentUser from selectedUser.followers by filter
    if (isFollow) {
      currentUser.followings = currentUser.followings.filter(
        (item) => item._id.toString() !== selectedUser._id.toString(),
      );
      selectedUser.followers = selectedUser.followers.filter(
        (item) => item._id.toString() !== currentUser._id.toString(),
      );
      //TODO: if current user had not following the selectedUser, then push selectedUser to currentUser.followings. And push currentUser to selectedUser.followers
    } else {
      currentUser.followings.push(selectedUser._id);
      selectedUser.followers.push(currentUser._id);
    }
    //save both data
    Promise.all([currentUser.save(), selectedUser.save()]);
    return new Response(JSON.stringify(currentUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Error", { status: 500 });
  }
};
