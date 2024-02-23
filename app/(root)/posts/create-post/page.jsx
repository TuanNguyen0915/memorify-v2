"use client";
import PostForm from "@/components/form/PostForm";
import { Spinner } from "@/components/Spinner/Spinner";
import { getUser, handleError } from "@/services/user.service";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const CreatePostPage = () => {
  const { user, isLoaded } = useUser();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true)
      const fetchData = async ()=> {
        const data = await getUser(user?.id)
        setUserData(data)
        setLoading(false)
      }
      fetchData()
    } catch (error) {
      handleError(error)
    }
  }, [user]);

  const postData = {
    creator: userData?._id,
    caption: "",
    postPhoto: null,
    tag: "",
  };

  return (
    <div className="w-full gap-10 p-4 xl:w-3/4">
      {loading || !isLoaded ? (
        <Spinner />
      ) : (
        <PostForm
          post={postData}
          apiEndPoint="/api/post/new"
          creatorClerkId={userData?.clerkId}
        />
      )}
    </div>
  );
};
export default CreatePostPage;
