"use client";
import UserCard from "@/components/MainSection/UserCard/UserCard";
import { Spinner } from "@/components/Spinner/Spinner";
import { getAllUsers, handleError } from "@/services/user.service";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";

const PeoplePage = () => {
  const { user: currentUser } = useUser();
  const [allUsers, setAllUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const data = await getAllUsers();
        setAllUsers(data);
      };
      fetchData();
      setLoading(false);
    } catch (error) {
      handleError(error);
    }
  }, []);
  return (
    <div className="w-full">
      {loading ? !allUsers (
        <Spinner />
      ) : (
        <div className="flexCenter mt-10 w-full flex-col">
          {allUsers?.map((user) => {
            if (currentUser?.id.toString() !== user.clerkId.toString()) {
              return <UserCard key={user._id} user={user} />;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default PeoplePage;
