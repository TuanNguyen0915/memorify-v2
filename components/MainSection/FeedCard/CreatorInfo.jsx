"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { BiSolidEditAlt } from "react-icons/bi";

const CreatorInfo = ({ post }) => {
  const { user } = useUser();
  return (
    <div className="flexBetween w-full">
      <Link href={`/profile/${post?.creator?._id}`} className="flexCenter gap-4 group ">
        <>
          <div>
            <Image
              width={56}
              height={56}
              alt="user photo"
              src={post?.creator?.profilePhoto}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold group-hover:text-indigo-500 duration-500 ">
              {post?.creator?.firstName} {post?.creator?.lastName}
            </p>
            <p className="text-sm text-textColor-200 group-hover:text-textColor-100 duration-500">@{post?.creator?.username}</p>
          </div>
        </>
      </Link>

      {/* EDIT BUTTON IF POST BELONG CURRENT USER */}
      {post?.creator?.clerkId === user?.id && (
        <div className="flex justify-end">
          <Link href={`/posts/edit-post/${post?._id}`}>
            <BiSolidEditAlt className="size-10 cursor-pointer duration-500 hover:text-indigo-500" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CreatorInfo;
