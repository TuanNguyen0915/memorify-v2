import Image from "next/image";

const PostInfo = ({ post }) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-textColor-100 xl:text-2xl">
        {post?.caption}
      </h2>
      <div className="flexCenter w-full">
        <Image
          src={post?.postPhoto}
          width={1000}
          height={1000}
          alt="post image"
          className="max-h-[50vh] max-w-full rounded-lg object-contain"
        />
      </div>
      <p className="text-base text-indigo-500 xl:text-xl ">#{post?.tag}</p>
    </>
  );
};

export default PostInfo;
