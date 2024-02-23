"use client";
import { TiUserAdd, TiUserDelete } from "react-icons/ti";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const UserInfo = ({ user }) => {
  const { user: currentUserClerk } = useUser();

  const [currentUser, setCurrentUser] = useState(null);

  const isFollowing = currentUser?.followings?.find(
    (item) => item._id === user._id,
  );

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(`/api/user/${currentUserClerk?.id}`);
        const data = await res.json();
        setCurrentUser(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [setCurrentUser]);

  const handleAddFollow = async () => {
    try {
      const res = await fetch(
        `/api/user/${currentUser.clerkId}/follow/${user._id}`,
        {
          method: "POST",
        },
      );
      const data = await res.json();
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  const handleUnFollow = async () => {
    try {
      const res = await fetch(
        `/api/user/${currentUser.clerkId}/unfollow/${user._id}`,
        {
          method: "POST",
        },
      );
      const data = await res.json();
      setCurrentUser(data);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  return (
    <div className="flexBetween w-full">
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
      <div>
        {isFollowing ? (
          <TiUserDelete
            className="size-8 cursor-pointer duration-500 hover:text-indigo-500"
            onClick={handleUnFollow}
          />
        ) : (
          <TiUserAdd
            className="size-8 cursor-pointer duration-500 hover:text-indigo-500"
            onClick={handleAddFollow}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfo;
