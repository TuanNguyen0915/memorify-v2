"use client";
import { useEffect, useState } from "react";
import CreatorInfo from "./CreatorInfo";
import PostInfo from "./PostInfo";

import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import { useUser } from "@clerk/nextjs";
import { getUser, handleError, savePost } from "@/services/user.service";

const FeedCard = ({ post, update }) => {
  const { user: currentUserClerk } = useUser();
  const [isLike, setIsLike] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const isSave = currentUser?.savePosts?.find(
    (item) => item._id.toString() === post._id.toString(),
  );
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getUser(currentUserClerk?.id);
        setCurrentUser(data);
      };
      fetchData();
    } catch (error) {
      handleError(error);
    }
  }, [currentUserClerk]);

  const handleSave = async () => {
    try {
      const data = await savePost(currentUserClerk?.id, post?._id);
      setCurrentUser(data);
      if(update) update()
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <div className="group my-4 flex w-full flex-col gap-4 rounded-lg bg-slate-950 p-4 hover:border hover:border-textColor-500 xl:p-10">
      <CreatorInfo post={post} />
      {/* POST INFO */}
      <PostInfo post={post} />
      <div className="flexBetween w-full">
        <div className="flexCenter gap-4">
          {isLike ? (
            <GoHeartFill className="size-8 text-indigo-500 duration-500 hover:text-indigo-700 xl:size-10" />
          ) : (
            <GoHeart className="size-8 duration-500 hover:text-indigo-500 xl:size-10" />
          )}
          <p className="font-semibold xl:text-xl">{post?.likes.length}</p>
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
  );
};

export default FeedCard;
