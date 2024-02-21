"use client";
import { TiUserAdd, TiUserDelete } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const UserCard = ({ user }) => {
  const { user: userClerkId } = useUser();
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      const getCurrentUser = async () => {
        const res = await fetch(`/api/user/${userClerkId.id}`);
        const data = await res.json();
        setCurrentUser(data);
      };
      getCurrentUser();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [userClerkId]);

  const isFollowing = currentUser?.followings?.includes(user._id);
  
  const handleUnfollow =()=> {
    console.log("handleUnfollow")
  }
  const handleFollow =()=> {
    console.log('handleFollow')
  }
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full gap-10 border-b border-b-slate-600 p-4 flexBetween xl:w-3/4">
          <div className="w-full flexBetween">
            <Link
              href={`/profile/${user.clerkId}`}
              className="gap-4 flexCenter group"
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
                  <p className="text-sm duration-500 text-textColor-200 group-hover:text-textColor-100 xl:text-lg">
                    @{user.username}
                  </p>
                </div>
              </>
            </Link>
          </div>
          {isFollowing ? (
            <TiUserDelete className="cursor-pointer duration-500 size-8 hover:text-indigo-500" onClick={handleUnfollow}/>
          ) : (
            <TiUserAdd className="cursor-pointer duration-500 size-8 hover:text-indigo-500" onClick={handleFollow}/>
          )}
        </div>
      )}
    </>
  );
};

export default UserCard;
