"use client";
import { useUser } from "@clerk/nextjs";
import FeedCard from "@/components/MainSection/FeedCard/FeedCard";
import { Spinner } from "@/components/Spinner/Spinner";
import { getAllPosts } from "@/services/post.service";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllPostsStart,
  setAllPostsFailure,
  setAllPostsSuccess,
} from "@/lib/redux/slices/allPostsSlice";
import { setCurrentUserSuccess } from "@/lib/redux/slices/currentUserSlice";
import { getUser } from "@/services/user.service";
const HomePage = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const { loading, allPosts } = useSelector((state) => state.allPosts);
  const fetchPosts = async () => {
    dispatch(setAllPostsStart());
    let data = await getAllPosts();
    dispatch(setAllPostsSuccess(data));
  };
  fetchPosts();
  const fetchCurrentUser = async () => {
    let data = await getUser(user?.id);
    dispatch(setCurrentUserSuccess(data));
  };
  useEffect(() => {
    try {
      fetchCurrentUser();
    } catch (error) {
      handleError(error);
    }
  }, [user?.id]);

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
