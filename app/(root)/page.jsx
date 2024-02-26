"use client";
import { useUser } from "@clerk/nextjs";
import FeedCard from "@/components/MainSection/FeedCard/FeedCard";
import { Spinner } from "@/components/Spinner/Spinner";
import { getAllPosts } from "@/services/post.service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUserSuccess,
  setCurrentUserFailure,
  setCurrentUserStart,
} from "@/lib/redux/slices/currentUserSlice";
import { getUser, handleError } from "@/services/user.service";
const HomePage = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.currentUser);
  const [allPosts, setAllPosts] = useState([]);
  const fetchPosts = async () => {
    let data = await getAllPosts();
    setAllPosts(data);
  };
  const fetchCurrentUser = async () => {
    dispatch(setCurrentUserStart());
    let data = await getUser(user?.id);
    dispatch(setCurrentUserSuccess(data));
  };
  useEffect(() => {
    if (user?.id) {
      try {
        fetchCurrentUser();
      } catch (error) {
        dispatch(setCurrentUserFailure(error));
        handleError(error);
      }
    }
  }, [user?.id]);

  useEffect(() => {
    try {
      fetchPosts();
    } catch (error) {
      handleError(error);
    }
  }, []);

  return (
    <section className="flex w-full flex-col items-center max-xl:px-4">
      {loading && !allPosts ? (
        <Spinner />
      ) : (
        allPosts?.map((post) => (
          <FeedCard post={post} key={post._id} update={fetchPosts} />
        ))
      )}
    </section>
  );
};
export default HomePage;
