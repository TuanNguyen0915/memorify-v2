export const getAllPosts = async() => {
  const res = await fetch("/api/post");
  const data = await res.json();
  return data
}

export const getPost = async (postId) => {
  const res = await fetch(`/api/post/${postId}`);
  const data = await res.json();
  return data;
}


export const searchPosts = async(searchTerm) => {
  const res= await fetch(`/api/search/posts/${searchTerm}`);
  const data = await res.json();
  return data
}