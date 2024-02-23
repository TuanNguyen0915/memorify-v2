export const getUser = async (clerkId) => {
  const res = await fetch(`/api/user/${clerkId}`);
  const data = await res.json();
  return data;
};

export const getAllUsers = async () => {
  const res = await fetch("/api/user");
  const data = await res.json();
  return data;
};

export const searchPeople = async (searchTerm) => {
  const res = await fetch(`/api/search/people/${searchTerm}`);
  const data = await res.json();
  return data;
};

export const follow = async (currentId, selectedId) => {
  const res = await fetch(`/api/user/${currentId}/follow/${selectedId}`, {
    method: "POST",
  });
  const data = await res.json();
  return data;
};

export const unfollow = async (currentId, selectedId) => {
  const res = await fetch(`/api/user/${currentId}/unfollow/${selectedId}`, {
    method: "POST",
  });
  const data = await res.json();
  return data;
};

export const savePost = async (currentId, postId) => {
  const res = await fetch(`/api/user/${currentId}/save/${postId}`, {
    method: "POST",
  });
  const data = await res.json();
  return data;
};

export const likePost = async (currentId, postId) => {
  const res = await fetch(`/api/user/${currentId}/like/${postId}`, {
    method: "POSt",
  });
  const data = await res.json();
  return data;
};

export const handleError = (error) => {
  console.log(error);
  throw new Error(error);
};


