"use client";
import FeedCard from "@/components/MainSection/FeedCard/FeedCard";
import { Spinner } from "@/components/Spinner/Spinner";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const getAllPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("api/post");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <section className="flex w-full items-center flex-col max-lg:px-4">
      {loading ? (
        <Spinner />
      ) : (
        posts && posts.map((post) => <FeedCard post={post} key={post._id} />)
      )}
    </section>
  );
};
export default HomePage;
