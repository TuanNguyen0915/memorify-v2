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
            <Link href="/" className="group w-full text-center text-5xl">
              <p className="font-bold text-secondary-100 duration-300 group-hover:text-textColor-100">
                Merori
                <span className="font-bold text-textColor-100 duration-300 group-hover:text-secondary-100">
                  fy
                </span>
              </p>
            </Link>
          </div>
          <div className="flexCenter w-full flex-col gap-2">
            <div className="relative h-[70px] w-[70px] rounded-full"
            onClick={()=>{router.push(`/profile/${user._id}`)}}>
              <Image
                src={user.profilePhoto}
                alt="user avatar"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-full object-cover object-center hover:shadow-2xl hover:shadow-secondary-100"
              />
            </div>
            <p className="w-full text-center text-xl">
              {user.firstName} {user.lastName}
            </p>
          </div>
          <div className="flexBetween w-full">
            <div className="w-full text-center">
              <p className="text-lg font-bold">{user.posts?.length}</p>
              <p>Posts</p>
            </div>
            <div className="w-full text-center">
              <p className="text-lg font-bold">{user.followers?.length}</p>
              <p>Followers</p>
            </div>
            <div className="w-full text-center">
              <p className="text-lg font-bold">{user.followings?.length}</p>
              <p>Following</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default UserInfo;
