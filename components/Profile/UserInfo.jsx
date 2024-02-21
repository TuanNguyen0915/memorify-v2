
import { TiUserAdd, TiUserDelete } from "react-icons/ti";
import Image from "next/image";

const UserInfo = ({ user, currentUser }) => {
  const isFollowing = currentUser?.followings?.includes(user._id);
  return (
    <div className="w-full flexBetween">
      <div className="flex flex-1 items-center gap-4 group">
        <Image
          width={96}
          height={96}
          alt="user photo"
          src={user.profilePhoto}
          className="h-20 w-20 rounded-full ring-4 duration-500 ring-textColor-200 group-hover:ring-textColor-100 2xl:h-24 2xl:w-24"
        />
        <div className="flex w-full flex-col gap-2">
          <p className="font-bold duration-500 group-hover:text-indigo-500 xl:text-2xl">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm duration-500 text-textColor-200 group-hover:text-textColor-100 xl:text-lg">
            @{user.username}
          </p>
          {/* POSTS, FOLLOWERS, FOLLOWINGS */}
          <div className="hidden w-full flex-wrap items-center gap-10">
            {/* xl:flex */}
            <div className="gap-4 flexCenter">
              <p className="text-lg font-semibold duration-500 text-primary-100 group-hover:text-secondary-100">
                {user.posts.length}
              </p>
              <p className="text-lg duration-500 text-textColor-200 group-hover:text-textColor-100">
                Posts
              </p>
            </div>
            <div className="gap-4 flexCenter">
              <p className="text-lg font-semibold duration-500 text-primary-100 group-hover:text-secondary-100">
                {user.followers.length}
              </p>
              <p className="text-lg duration-500 text-textColor-200 group-hover:text-textColor-100">
                Followers
              </p>
            </div>
            <div className="gap-4 flexCenter">
              <p className="text-lg font-semibold duration-500 text-primary-100 group-hover:text-secondary-100">
                {user.followings.length}
              </p>
              <p className="text-lg duration-500 text-textColor-200 group-hover:text-textColor-100">
                Followings
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isFollowing ? (
          <TiUserDelete className="cursor-pointer duration-500 size-8 hover:text-indigo-500" />
        ) : (
          <TiUserAdd className="cursor-pointer duration-500 size-8 hover:text-indigo-500" />
        )}
      </div>
    </div>
  );
};

export default UserInfo;
