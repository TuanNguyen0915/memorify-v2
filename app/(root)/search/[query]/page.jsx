"use client";
import SearchPage from "@/components/Search/SearchPage";
import { Spinner } from "@/components/Spinner/Spinner";
import { searchPosts } from "@/services/post.service";
import { handleError, searchPeople } from "@/services/user.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPost = () => {
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  const [searchedByPosts, setSearchedByPosts] = useState(null);
  const [searchedByPeople, setSearchedByPeople] = useState(null);

  useEffect(() => {
    setLoading(true);
    const apis = [searchPosts(query), searchPeople(query)];
    Promise.all(apis.map((api) => api))
      .then(([posts, people]) => {
        setSearchedByPosts(posts);
        setSearchedByPeople(people);
      })
      .catch((error) => handleError(error))
      .finally(setLoading(false));
  }, [query]);

  return (
    <div className="min-h-screen w-full">
      {loading ? (
        <div className="flexCenter size-full">
          <Spinner />
        </div>
      ) : (
        <SearchPage
          searchedByPeople={searchedByPeople}
          searchedByPosts={searchedByPosts}
        />
      )}
    </div>
  );
};

export default SearchPost;
