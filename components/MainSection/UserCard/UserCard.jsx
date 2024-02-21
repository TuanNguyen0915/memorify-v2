import { TiUserAdd, TiUserDelete } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";

const UserCard = ({ user }) => {
  return (
    <div className="flexBetween w-full xl:w-3/4 gap-10 border-b border-b-slate-600 p-4">
      <div className="flexBetween w-full">
        <Link href={`/profile/${user._id}`} className="flexCenter group gap-4 ">
          <>
            <div>
              <Image
                width={96}
                height={96}
                alt="user photo"
                src={user.profilePhoto}
                className="rounded-full 2xl:w-24 2xl:h-24 w-20 h-20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold duration-500 group-hover:text-indigo-500 xl:text-2xl">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm xl:text-lg text-textColor-200 duration-500 group-hover:text-textColor-100">
                @{user.username}
              </p>
            </div>
          </>
        </Link>
      </div>
      <div>
        <TiUserAdd className="size-8 cursor-pointer duration-500 hover:text-indigo-500" />
      </div>
      <div>
        <TiUserDelete className="size-8 cursor-pointer duration-500 hover:text-indigo-500" />
      </div>
    </div>
  );
};

export default UserCard;
