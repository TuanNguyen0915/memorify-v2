"use client";
import SearchPage from "@/components/Search/SearchPage";
import { Spinner } from "@/components/Spinner/Spinner";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPost = () => {
  
  const [loading, setLoading] = useState(false);
  const [searchedByPosts, setSearchedByPosts] = useState(null);
  const [searchedByPeople, setSearchedByPeople] = useState(null);
 
  useEffect(() => {
    setLoading(true);
    const apiUrls = [
      `/api/search/posts/${param?.query}`,
      `/api/search/people/${params?.query}`,
    ];
    Promise.all(apiUrls.map((url) => fetch(url).then((res) => res.json())))
      .then(([posts, people]) => {
        setSearchedByPosts(posts);
        setSearchedByPeople(people);
      })
      .catch((err) => console.log(err))
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
