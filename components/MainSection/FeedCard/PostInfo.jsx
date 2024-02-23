import Image from "next/image";

const PostInfo = ({ post }) => {
  return (
    <>
      <h2 className="text-xl font-semibold text-textColor-100 xl:text-2xl">
        {post?.caption}
      </h2>
      <div className="w-full flexCenter">
        <Image
          src={post?.postPhoto}
          width={1000}
          height={1000}
          alt="post image"
          className="max-w-full rounded-lg object-contain max-h-[50vh] group-hover:scale-[1.05] duration-500"
        />
      </div>
      <p className="text-base text-indigo-500 xl:text-xl">#{post?.tag}</p>
    </>
  );
};

export default PostInfo;
