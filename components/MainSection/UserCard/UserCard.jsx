"use client";
import { TiUserAdd, TiUserDelete } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {
  follow,
  getUser,
  handleError,
  unfollow,
} from "@/services/user.service";

const UserCard = ({ user }) => {
  const { user: userClerkId } = useUser();
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      const getCurrentUser = async () => {
        const data = await getUser(userClerkId?.id);
        setCurrentUser(data);
      };
      getCurrentUser();
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  }, [setCurrentUser]);

  const isFollowing = currentUser?.followings?.find(
    (item) => item._id.toString() === user._id.toString(),
  );
  const handleUnfollow = async () => {
    try {
      const data = await unfollow(currentUser?.clerkId, user?._id);
      setCurrentUser(data);
    } catch (error) {
      handleError(error);
    }
  };
  const handleFollow = async () => {
    try {
      const data = await follow(currentUser?.clerkId, user?._id);
      setCurrentUser(data);
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flexBetween w-full gap-10 border-b border-b-slate-600 p-4 xl:w-3/4">
          <div className="flexBetween w-full">
            <Link
              href={`/profile/${user.clerkId}`}
              className="flexCenter group gap-4"
            >
              <>
                <div>
                  <Image
                    width={96}
                    height={96}
                    alt="user photo"
                    src={user.profilePhoto}
                    className="h-20 w-20 rounded-full 2xl:h-24 2xl:w-24"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold duration-500 group-hover:text-indigo-500 xl:text-2xl">
                    {user.firstName} {user.lastName}
                  </p>
                  <p className="text-sm text-textColor-200 duration-500 group-hover:text-textColor-100 xl:text-lg">
                    @{user.username}
                  </p>
                </div>
              </>
            </Link>
          </div>
          {currentUser?._id !== user?._id &&
            (isFollowing ? (
              <TiUserDelete
                className="size-8 cursor-pointer duration-500 hover:text-indigo-500"
                onClick={handleUnfollow}
              />
            ) : (
              <TiUserAdd
                className="size-8 cursor-pointer duration-500 hover:text-indigo-500"
                onClick={handleFollow}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default UserCard;
