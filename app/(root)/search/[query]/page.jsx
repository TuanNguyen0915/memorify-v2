"use client";
import SearchPage from "@/components/Search/SearchPage";
import { Spinner } from "@/components/Spinner/Spinner";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPost = () => {
  const { query } = useParams();
  const [loading, setLoading] = useState(false);
  const [searchedByPosts, setSearchedByPosts] = useState(null);
  const [searchedByPeople, setSearchedByPeople] = useState(null);
  //region: SOLUTION 1
  // const getSearchedPosts = async () => {
  //   try {
  //     const response = await fetch(`/api/search/posts/${query}`);
  //     const data = await response.json();
  //     setSearchedByPosts(data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getSearchedByPeople = async () => {
  //   try {
  //     const response = await fetch(`/api/search/people/${query}`);
  //     const data = await response.json();
  //     setSearchedByPeople(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(()=> {
  //   Promise.all([getSearchedPosts(), getSearchedByPeople()])
  // },[query])
  //endregion

  useEffect(() => {
    setLoading(true);
    const apiUrls = [
      `/api/search/posts/${query}`,
      `/api/search/people/${query}`,
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
