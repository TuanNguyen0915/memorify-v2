"use client";
import { useEffect, useRef, useState } from "react";
import CreatorInfo from "./CreatorInfo";
import PostInfo from "./PostInfo";

import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import { useUser } from "@clerk/nextjs";
import {
  getUser,
  handleError,
  likePost,
  savePost,
} from "@/services/user.service";
import { getPost } from "@/services/post.service";

const FeedCard = ({ post }) => {
  const { user: currentUserClerk } = useUser();
  const [currentUser, setCurrentUser] = useState(null);
  const [updatedPost, setUpdatedPost] = useState(null);

  const getUpdatePost = async () => {
    try {
      const data = await getPost(post?._id);
      
      setUpdatedPost(data);
    } catch (error) {
      handleError(error)
    }
  }

  //*TODO: handle save or un-save post
  const isSave = currentUser?.savePosts?.find(
    (item) => item?._id === post?._id,
  );
  const handleSave = async (e) => {
    e.stopPropagation();
    try {
      const data = await savePost(currentUserClerk?.id, post?._id);
      setCurrentUser(data);
    } catch (error) {
      handleError(error);
    }
  };



  //*TODO: handle like or un-like post
  const isLike = currentUser?.likePosts?.find(
    (item) => item?._id === post?._id,
  );
  const handleLike = async (e) => {
    e.stopPropagation();
    try {
      const data = await likePost(currentUserClerk?.id, post?._id);
      setCurrentUser(data);
      getUpdatePost()
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getUser(currentUserClerk?.id);
        setCurrentUser(data);
      };
      getUpdatePost()
      fetchData();
    } catch (error) {
      handleError(error);
    }
  }, [currentUserClerk, post]);


  return (
    <>
      {currentUser && post && (
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
                  {updatedPost?.likes?.length}
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
