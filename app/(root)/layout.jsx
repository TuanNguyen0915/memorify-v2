"use client";
import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import RightSidebar from "@/components/RightSidebar/RightSidebar";
import Topbar from "@/components/MainSection/Topbar";
import Bottombar from "@/components/MainSection/Bottombar";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/Spinner/Spinner";

const Layout = ({ children }) => {
  const { user, isLoaded } = useUser();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const getUser = async () => {
    try {
      setLoading(true);
      const res = await fetch(`api/user/${user?.id}`);
      const data = await res.json();
      setUserData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);
  return (
    <main className="root flex gap-10">
      {loading || !isLoaded ? (
        <Spinner />
      ) : (
        <aside className="hidden lg:flex">
          <LeftSidebar user={userData} />
        </aside>
      )}
      <section className="no-scrollbar max-h-screen flex flex-1 flex-col items-center gap-10 overflow-y-scroll">
        <Topbar />
        <div className="flex w-full flex-1 flex-col items-center gap-10">
          {children}
        </div>
        <Bottombar />
      </section>
      <aside className="hidden lg:flex">
        <RightSidebar />
      </aside>
    </main>
  );
};
export default Layout;
