export const getAllPosts = async () => {
  const res = await fetch("/api/post");
  const data = await res.json();
  return data;
};

export const getPost = async (postId) => {
  const res = await fetch(`/api/post/${postId}`);
  const data = await res.json();
  return data;
};

export const searchPosts = async (searchTerm) => {
  const res = await fetch(`/api/search/posts/${searchTerm}`);
  const data = await res.json();
  return data;
};

export const uploadToCloudinary = async (file) => {
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const PRESET_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", PRESET_NAME);
  uploadData.append("cloud_name", CLOUD_NAME);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: "POST",
    body: uploadData
  })
  const data = await res.json();
  return data
};
