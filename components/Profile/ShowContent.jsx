"use client";
import FeedCard from "../MainSection/FeedCard/FeedCard";
import { Spinner } from "../Spinner/Spinner";
import FollowCard from "./FollowCard";

const ShowContent = ({ btnId, user, update }) => {
  if (!user) return <Spinner />;
  return (
    <div className="w-full">
      {btnId === 1 && (
        <div className="w-full flex-col">
          {user.posts?.map((post) => (
            <FeedCard post={post} key={post._id} />
          ))}
        </div>
      )}
      {btnId === 2 && (
        <div className="flex w-full flex-col items-center max-xl:px-4">
          {user.followers?.map((person) => (
            <FollowCard user={person} key={person._id} update={update}/>
          ))}
        </div>
      )}

      {btnId === 3 && (
        <div className="flex w-full flex-col items-center max-xl:px-4">
          {user.followings?.map((person) => (
            <FollowCard user={person} key={person._id} update={update}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowContent;
