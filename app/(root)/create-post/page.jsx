"use client";
import { Spinner } from "@/components/Spinner/Spinner";
import PostForm from "@/components/form/PostForm";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const CreatePostPage = () => {
  const { user, isLoaded } = useUser();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch(`api/user/${user?.id}`);
      const data = await res.json();
      setUserData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  const postData = {
    creator: userData?._id,
    caption: "",
    postPhoto: null,
    tag: "",
  };

  return (
    <div className="w-full gap-10 p-4 lg:w-3/4">
      {loading || !isLoaded ? <Spinner /> : <PostForm post={postData} />}
    </div>
  );
};
export default CreatePostPage;
