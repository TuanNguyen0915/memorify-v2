"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UserInfo = ({ user }) => {
  const router = useRouter()
  return (
    <div className="flex w-full flex-col gap-10">
      {user && (
        <>
          <div className="flex w-full flex-col items-center gap-8">
            <Link href="/" className="w-full text-center text-5xl group">
              <p className="font-bold duration-300 text-secondary-100 group-hover:text-textColor-100">
                Merori
                <span className="font-bold duration-300 text-textColor-100 group-hover:text-secondary-100">
                  fy
                </span>
              </p>
            </Link>
          </div>
          <div className="w-full flex-col gap-2 flexCenter">
            <div className="relative rounded-full  h-[100px] w-[100px]"
            onClick={()=>{router.push(`/profile/${user.clerkId}`)}}>
              <Image
                src={user.profilePhoto}
                alt="user avatar"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-full object-cover object-center hover:shadow-secondary-100 hover:shadow-2xl"
              />
            </div>
            <p className="w-full text-center text-xl">
              {user.firstName} {user.lastName}
            </p>
            <p className="w-full text-center italic text-textColor-200">@{user.username}</p>
          </div>
          {/* <div className="w-full flexBetween">
            <div className="w-full text-center">
              <p className="text-lg font-bold text-secondary-100">{user.posts?.length}</p>
              <p>Posts</p>
            </div>
            <div className="w-full text-center">
              <p className="text-lg font-bold text-secondary-100">{user.followers?.length}</p>
              <p>Followers</p>
            </div>
            <div className="w-full text-center">
              <p className="text-lg font-bold text-secondary-100">{user.followings?.length}</p>
              <p>Following</p>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};
export default UserInfo;
