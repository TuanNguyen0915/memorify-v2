"use client";
import { useState } from "react";
import FeedCard from "../MainSection/FeedCard/FeedCard";
import UserCard from "../MainSection/UserCard/UserCard";
import { Spinner } from "../Spinner/Spinner";

const SearchPage = ({ searchedByPosts, searchedByPeople }) => {
  const [isPostToggle, setIsPostToggle] = useState(true);

  return (
    <div className="flexCenter w-full flex-col">
      <div className="flexCenter mt-4 w-full gap-10 px-4 xl:mt-10">
        <button
          onClick={() => setIsPostToggle(true)}
          className={`btn-submit xl:min-w-[15rem] max-xl:w-full  ${isPostToggle ? "opacity-100" : "opacity-50"} flexCenter `}
        >
          {searchedByPosts?.length > 0 ? `Post (${searchedByPosts?.length})`:"Post"}
        </button>
        <button
          onClick={() => setIsPostToggle(false)}
          className={`btn-submit xl:min-w-[15rem] max-xl:w-full  ${!isPostToggle ? "opacity-100" : "opacity-50"} flexCenter`}
        >
          {searchedByPeople?.length > 0 ? `People (${searchedByPeople?.length})`:"People"}
        </button>
      </div>
      <div className="mt-10 flex w-full flex-col items-center max-xl:px-4">
        {isPostToggle ? (
          //TODO: Run spinner when fetching data, then show posts
          !searchedByPosts ? (
            <Spinner />
          ) : searchedByPosts?.length === 0 ? (
            <p className="text-center text-lg xl:text-2xl">No posts found</p>
          ) : (
            searchedByPosts?.map((post) => (
              <div key={post._id} className="w-full">
                <FeedCard post={post} />
              </div>
            ))
          )
          //TODO: Run spinner when fetching data, then show users
        ) : !searchedByPeople ? (
          <Spinner />
        ) : searchedByPeople?.length === 0 ? (
          <p className="text-center text-lg xl:text-2xl">No people found</p>
        ) : (
          searchedByPeople?.map((person) => (
            <UserCard user={person} key={person._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
