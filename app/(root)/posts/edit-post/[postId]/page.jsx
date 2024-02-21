"use client";
import { Spinner } from "@/components/Spinner/Spinner";
import PostForm from "@/components/form/PostForm";
import { useEffect, useState } from "react";

const EditPost = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({});
  const [creatorClerkId, setCreatorClerkId] = useState(null);
  const getPost = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/post/${params.postId}`);
      const data = await res.json();
      setPostData({
        creator: data.creator?._id,
        caption: data.caption,
        tag: data.tag,
        postPhoto: data.postPhoto,
      });
      setCreatorClerkId(data.creator?.clerkId);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (params.postId) {
      getPost();
    }
  }, [params.postId]);
  return (
    <div className="min-h-screen w-full">
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <PostForm
          post={postData}
          apiEndPoint={`/api/post/${params.postId}`}
          creatorClerkId={creatorClerkId}
        />
      )}
    </div>
  );
};

export default EditPost;
