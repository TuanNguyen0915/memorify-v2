import { useState } from "react";
import CreatorInfo from "./CreatorInfo";
import PostInfo from "./PostInfo";

import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";

const FeedCard = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const [isSave, setIsSave] = useState(false);
  return (
    <div className="my-4 flex w-full flex-col gap-4 rounded-lg bg-slate-950 p-4 lg:p-10">
      <CreatorInfo creator={post?.creator} />
      {/* POST INFO */}
      <PostInfo post={post} />
      <div className="flexBetween w-full">
        <div className="flexCenter gap-4">
          {isLike ? (
            <GoHeartFill className="size-8 text-indigo-500 duration-500 hover:text-indigo-700 lg:size-10" />
          ) : (
            <GoHeart className="size-8 duration-500 hover:text-indigo-500 lg:size-10" />
          )}
          <p className="font-semibold lg:text-xl">{post?.likes.length}</p>
        </div>
        <div className="flexCenter">
          {isSave ? (
            <HiBookmark className="size-8 text-orange-500 duration-500 hover:text-orange-700 lg:size-10" />
          ) : (
            <HiOutlineBookmark className="size-8 duration-500 hover:text-orange-500 lg:size-10" />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
