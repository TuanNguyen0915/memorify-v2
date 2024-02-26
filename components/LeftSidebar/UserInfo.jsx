"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Spinner } from "../Spinner/Spinner";
const UserInfo = () => {
  const { currentUser } = useSelector((state) => state.currentUser);
  const router = useRouter();
  return (
    <div className="flex w-full flex-col gap-10">
      {!currentUser ? (
        <Spinner />
      ) : (
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
            <div
              className="relative h-[100px]  w-[100px] rounded-full"
              onClick={() => {
                router.push(`/profile/${currentUser?.clerkId}`);
              }}
            >
              <Image
                src={currentUser?.profilePhoto}
                alt="currentUser avatar"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-full object-cover object-center hover:shadow-2xl hover:shadow-secondary-100"
              />
            </div>
            <p className="w-full text-center text-xl">
              {currentUser?.firstName} {currentUser?.lastName}
            </p>
            <p className="w-full text-center italic text-textColor-200">
              @{currentUser?.username}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default UserInfo;
