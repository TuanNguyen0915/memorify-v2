"use client";
import { useEffect, useState } from "react";
import CreatorInfo from "./CreatorInfo";
import PostInfo from "./PostInfo";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUserSuccess } from "@/lib/redux/slices/currentUserSlice";
import { handleError, likePost, savePost } from "@/services/user.service";
import { getPost } from "@/services/post.service";
const FeedCard = ({ post, update }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.currentUser);
  const [updatePost, setUpdatePost] = useState(null);
  const getUpdatePost = async () => {
    try {
      const data = await getPost(post?._id);
      setUpdatePost(data);
    } catch (error) {
      handleError(error);
    }
  };

  //*TODO: handle save or un-save post
  const isSave = currentUser?.savePosts?.find(
    (item) => item?._id === post?._id,
  );
  const handleSave = async () => {
    try {
      const data = await savePost(currentUser?.clerkId, post?._id);
      dispatch(setCurrentUserSuccess(data));
      if (update) update();
    } catch (error) {
      throw new Error(error);
    }
  };

  //*TODO: handle like or un-like post
  const isLike = currentUser?.likePosts?.find(
    (item) => item?._id === post?._id,
  );
  const handleLike = async () => {
    try {
      const data = await likePost(currentUser?.clerkId, post?._id);
      dispatch(setCurrentUserSuccess(data));
      if (update) update();
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getUpdatePost();
  }, [post]);
  return (
    <>
      {post && (
        <div className="group my-4 flex w-full flex-col gap-4 rounded-lg bg-slate-950 p-4 hover:border hover:border-textColor-500 xl:p-10">
          <CreatorInfo post={post} />
          {/* POST INFO */}
          <PostInfo post={post} />
          <div className="flexBetween w-full">
            <div className="flexCenter gap-4">
              {isLike ? (
                <GoHeartFill
                  className="size-8 text-orange-500 duration-500 hover:text-indigo-700 xl:size-10"
                  onClick={handleLike}
                />
              ) : (
                <GoHeart
                  className="size-8 duration-500 hover:text-indigo-500 xl:size-10"
                  onClick={handleLike}
                />
              )}
              {post?.likes?.length > 0 && (
                <p className="font-semibold xl:text-xl">
                  {updatePost?.likes?.length}
                </p>
              )}
            </div>
            <div className="flexCenter">
              {isSave ? (
                <HiBookmark
                  className="size-8 text-orange-500 duration-500 hover:text-orange-700 xl:size-10"
                  onClick={handleSave}
                />
              ) : (
                <HiOutlineBookmark
                  className="size-8 duration-500 hover:text-orange-500 xl:size-10"
                  onClick={handleSave}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedCard;
