"use client";
import {useForm} from "react-hook-form";
import {MdOutlineAddPhotoAlternate} from "react-icons/md";
import Image from "next/image";
import {useRouter} from "next/navigation";

const PostForm = ({ post, apiEndPoint, creatorClerkId }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: post,
  });
  const router = useRouter();

  const publishPost = async (data) => {
    try {
      const postForm = new FormData();
      postForm.append("creator", data.creator);
      postForm.append("caption", data.caption);
      postForm.append("tag", data.tag);
      if (typeof data.postPhoto !== "string") {
        postForm.append("postPhoto", data.postPhoto[0]);
      } else {
        postForm.append("postPhoto", data.postPhoto);
      }
      const res = await fetch(apiEndPoint, {
        method: "POST",
        body: postForm,
      });
      if (res.ok) {
        router.push(`/profile/${creatorClerkId}`);
      }
    } catch (error) {
      console.log(`Upload fail ${error}`);
    }
  };
  return (
    <form
      className="flex w-full flex-col items-center gap-10"
      onSubmit={handleSubmit(publishPost)}
    >
      {/*UPLOAD PHOTO OR EDIT PHOTO*/}
      <div className="w-full flexCenter">
        <label htmlFor="photo" className="cursor-pointer group">
          {watch("postPhoto") ? (
            typeof watch("postPhoto") === "string" ? (
              <Image
                src={post?.postPhoto}
                alt="post photo"
                width={1000}
                height={1000}
                className="max-w-full rounded-lg object-contain max-h-[50vh]"
              />
            ) : (
              watch("postPhoto")?.length > 0 && (
                <Image
                  src={URL.createObjectURL(watch("postPhoto")[0])}
                  alt="post photo"
                  width={1000}
                  height={1000}
                  className="max-w-full rounded-lg object-contain max-h-[50vh]"
                />
              )
            )
          ) : (
            <div className="flex items-center gap-10">
              <MdOutlineAddPhotoAlternate
                className="duration-300 size-24 text-textColor-100 group-hover:text-primary-100 xl:size-52"/>
              <p className="text-center text-xl font-bold text-primary-100 group-hover:text-textColor-100">
                {" "}
                Select a file{" "}
              </p>
              <input
                {...register("postPhoto", {
                  validate: (value) => {
                    if (
                      typeof value === null ||
                      (Array.isArray(value) && value?.length === 0) ||
                      value === "undefined"
                    ) {
                      return "A photo is required";
                    }
                    return true;
                  },
                })}
                type="file"
                style={{ display: "none" }}
                id="photo"
              />
              {errors.postPhoto && (
                <p className="text-red-400">{errors.postPhoto.message}</p>
              )}
            </div>
          )}
        </label>
      </div>
      {/*CAPTION*/}
      <div className="w-full">
        <label htmlFor="caption" className="label-field">
          Caption
        </label>
        <textarea
          {...register("caption", {
            required: "Please fill all the fields",
            validate: (value) => {
              if (value?.length < 3) {
                return "Caption must be at least 3 characters";
              }
              return true;
            },
          })}
          id="caption"
          rows={5}
          placeholder="Share your thinking ..."
          className="input-field"
        />
        {errors.caption && (
          <p className="text-red-400">{errors.caption.message}</p>
        )}
      </div>
      {/*TAG*/}
      <div className="w-full">
        <label htmlFor="tag" className="label-field">
          Tag
        </label>
        <input
          {...register("tag", {
            required: "Please fill all the fields",
            validate: (value) => {
              if (value?.length < 3) {
                return "Tag must be at least 3 characters";
              }
              return true;
            },
          })}
          type="text"
          placeholder="#tag"
          className="input-field"
        />
        {errors.tag && <p className="text-red-400">{errors.tag.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full btn-submit"
      >
        Publish
      </button>
    </form>
  );
};
export default PostForm;
