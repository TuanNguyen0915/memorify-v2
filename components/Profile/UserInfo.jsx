"use client";
import { TiUserAdd, TiUserDelete } from "react-icons/ti";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  follow,
  getUser,
  handleError,
  unfollow,
} from "@/services/user.service";

const UserInfo = ({ user }) => {
  const { user: currentUserClerk } = useUser();

  const [currentUser, setCurrentUser] = useState(null);

  const isFollowing = currentUser?.followings?.find(
    (item) => item._id === user._id,
  );

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getUser(currentUserClerk?.id);
        setCurrentUser(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [setCurrentUser, currentUserClerk]);

  const handleFollow = async () => {
    try {
      const data = await follow(currentUser?.clerkId, user?._id);
      setCurrentUser(data);
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="flexBetween w-full">
      {currentUser && user && (
        <>
          <div className="group flex flex-1 items-center gap-4">
            <Image
              width={96}
              height={96}
              alt="user photo"
              src={user.profilePhoto}
              className="Color-100 h-20 w-20 rounded-full ring-4 ring-textColor-200 duration-500 group-hover:scale-110 2xl:h-24 2xl:w-24"
            />
            <div className="flex w-full flex-col gap-2">
              <p className="font-bold duration-500 group-hover:text-secondary-100 xl:text-2xl">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-textColor-200 duration-500 group-hover:text-textColor-100 xl:text-lg">
                @{user.username}
              </p>
            </div>
          </div>
          {currentUser?._id !== user?._id && (
            <div>
              {isFollowing ? (
                <TiUserDelete
                  className="size-8 cursor-pointer duration-500 hover:text-indigo-500"
                  onClick={handleFollow}
                />
              ) : (
                <TiUserAdd
                  className="size-8 cursor-pointer duration-500 hover:text-indigo-500"
                  onClick={handleFollow}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserInfo;
