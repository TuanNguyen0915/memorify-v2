import { useState } from "react";
import CreatorInfo from "./CreatorInfo";
import PostInfo from "./PostInfo";

import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";

const FeedCard = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const [isSave, setIsSave] = useState(false);
  return (
    <div className="my-4 flex w-full flex-col gap-4 rounded-lg p-4 bg-slate-950 hover:border-textColor-500 hover:border xl:p-10">
      <CreatorInfo post={post} />
      {/* POST INFO */}
      <PostInfo post={post} />
      <div className="w-full flexBetween">
        <div className="gap-4 flexCenter">
          {isLike ? (
            <GoHeartFill className="text-indigo-500 duration-500 size-8 hover:text-indigo-700 xl:size-10" />
          ) : (
            <GoHeart className="duration-500 size-8 hover:text-indigo-500 xl:size-10" />
          )}
          <p className="font-semibold xl:text-xl">{post?.likes.length}</p>
        </div>
        <div className="flexCenter">
          {isSave ? (
            <HiBookmark className="text-orange-500 duration-500 size-8 hover:text-orange-700 xl:size-10" />
          ) : (
            <HiOutlineBookmark className="duration-500 size-8 hover:text-orange-500 xl:size-10" />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
