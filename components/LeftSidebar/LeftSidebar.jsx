"use client";
import UserInfo from "@/components/LeftSidebar/UserInfo";
import UserManagement from "@/components/LeftSidebar/UserManagement";
import NavLinks from "@/components/LeftSidebar/NavLinks";
import { SignedIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUserSuccess,
  setCurrentUserFailure,
  setCurrentUserStart,
} from "@/lib/redux/slices/currentUserSlice";
import { getUser, handleError } from "@/services/user.service";
import { Spinner } from "../Spinner/Spinner";
import { useEffect } from "react";

const LeftSidebar = () => {
  const { user } = useUser();

  const { loading } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
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

  return (
    <div className="sidebar flexBetween flex-col gap-10 px-4">
      {loading ? (
        <Spinner />
      ) : (
        <SignedIn>
          <UserInfo />
          <NavLinks />
          <UserManagement />
        </SignedIn>
      )}
    </div>
  );
};
export default LeftSidebar;
