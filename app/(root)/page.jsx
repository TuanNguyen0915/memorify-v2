"use client";
import FeedCard from "@/components/MainSection/FeedCard/FeedCard";
import { Spinner } from "@/components/Spinner/Spinner";
import { getAllPosts } from "@/services/post.service";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const fetchPosts = async () => {
    let data = await getAllPosts();
    setAllPosts(data);
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetchPosts();
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  }, []);

  return (
    <section className="flex w-full flex-col items-center max-xl:px-4">
      {loading ? (
        <Spinner />
      ) : (
        allPosts?.map((post) => (
          <FeedCard post={post} key={post._id} update={fetchPosts} />
        ))
      )}
    </section>
  );
};
export default HomePage;
