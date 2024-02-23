"use client";
import FeedCard from "@/components/MainSection/FeedCard/FeedCard";
import { Spinner } from "@/components/Spinner/Spinner";
import { getUser, handleError } from "@/services/user.service";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const SavedPage = () => {
  const { user } = useUser();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const data = await getUser(user?.id);
    setCurrentUser(data);
  };
  useEffect(() => {
    try {
      setLoading(true);
      fetchData();
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  }, [user]);
  return (
    <main className="min-h-screen w-full">
      {loading && !currentUser ? (
        <Spinner />
      ) : currentUser?.savePosts?.length === 0 ? (
        <h1 className="text-xl font-bold xl:text-5xl text-center mt-40">No saved posts</h1>
      ) : (
        currentUser?.savePosts?.map((post) => (
          <FeedCard post={post} key={post._id} update={fetchData} />
        ))
      )}
    </main>
  );
};

export default SavedPage;
