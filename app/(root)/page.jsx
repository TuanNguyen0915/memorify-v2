"use client";
import FeedCard from "@/components/MainSection/FeedCard/FeedCard";
import { Spinner } from "@/components/Spinner/Spinner";
import { getAllPosts } from "@/services/post.service";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        let data = await getAllPosts();
        setPosts(data);
        setLoading(false);
      };
      fetchData();
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  }, []);
  return (
    <section className="flex w-full flex-col items-center max-xl:px-4">
      {loading && posts ? (
        <Spinner />
      ) : (
        posts?.map((post) => <FeedCard post={post} key={post._id} />)
      )}
    </section>
  );
};
export default HomePage;
