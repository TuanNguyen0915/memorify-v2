"use client";
import UserInfo from "@/components/LeftSidebar/UserInfo";
import UserManagement from "@/components/LeftSidebar/UserManagement";
import NavLinks from "@/components/LeftSidebar/NavLinks";
import { SignedIn, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";
import {getUser, handleError } from "@/services/user.service";

const LeftSidebar = () => {
  const { user } = useUser();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchData = async () => {
        const data = await getUser(user?.id);
        setCurrentUser(data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      setLoading(false);
      handleError(error);
    }
  }, [user]);
  return (
    <div className="sidebar flexBetween flex-col gap-10 px-4">
      {loading ? (
        <Spinner />
      ) : (
        <SignedIn>
          <UserInfo user={currentUser} />
          <NavLinks />
          <UserManagement />
        </SignedIn>
      )}
    </div>
  );
};
export default LeftSidebar;
