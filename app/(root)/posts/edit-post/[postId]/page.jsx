"use client";
import { Spinner } from "@/components/Spinner/Spinner";
import PostForm from "@/components/form/PostForm";
import { getPost } from "@/services/post.service";
import { handleError } from "@/services/user.service";
import { useEffect, useState } from "react";

const EditPost = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({});
  const [creatorClerkId, setCreatorClerkId] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const data = await getPost(params?.postId);
        setPostData({
          creator: data.creator?._id,
          caption: data.caption,
          tag: data.tag,
          postPhoto: data.postPhoto,
        });
        setCreatorClerkId(data.creator?._id);
        setLoading(false);
      };
      fetchData()
    } catch (error) {
      handleError(error);
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
          apiEndPoint={`/api/post/${params?.postId}`}
          creatorClerkId={creatorClerkId}
        />
      )}
    </div>
  );
};

export default EditPost;
