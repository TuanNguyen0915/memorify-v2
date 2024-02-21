"use client";
import UserCard from "@/components/MainSection/UserCard/UserCard";
import { Spinner } from "@/components/Spinner/Spinner";
import { useEffect, useState } from "react";

const ProfilePage = ({ params }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    try {
      setLoading(true);
      const fetchData = async () => {
        const res = await fetch(`/api/user/${params.id}`);
        const data = await res.json();
        setUser(data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [params.id]);
  return (
    <div className="min-h-screen[30vh] w-full">
      {loading || !user ? (
        <Spinner />
      ) : (
        <div>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
