"use client";
import FeedCard from "@/components/MainSection/FeedCard/FeedCard";
import { Spinner } from "@/components/Spinner/Spinner";
import { AppContext } from "@/context";
import { getPost } from "@/services/post.service";
import { handleError } from "@/services/user.service";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const page = ({ params }) => {
  const [currentPost, setCurrentPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const {setSelectedPost } = useContext(AppContext);
  const fetchData = async () => {
    const data = await getPost(params?.postId);
    setSelectedPost(data);
    setCurrentPost(data);
  };
  useEffect(() => {
    try {
      setLoading(true);
      fetchData();
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  }, [params?.postId]);
  return (
    <div className="w-full flex-col gap-10">
      {loading && !currentPost ? (
        <Spinner />
      ) : (
        <>
          <div className="flexCenter max-h-[50vh] w-full max-w-full">
            <Image
              src={currentPost?.postPhoto}
              width={1000}
              height={1000}
              alt="post image"
              className="max-h-[50vh] w-full max-w-full rounded-lg object-contain duration-500 group-hover:scale-[1.05]"
            />
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full items-center">
              <div className="min-w-[10rem]">Author</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default page;