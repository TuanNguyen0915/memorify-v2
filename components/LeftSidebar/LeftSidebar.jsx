// "use client";
import UserInfo from "@/components/LeftSidebar/UserInfo";
import UserManagement from "@/components/LeftSidebar/UserManagement";
import NavLinks from "@/components/LeftSidebar/NavLinks";
import { SignedIn, useUser } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
import { Spinner } from "../Spinner/Spinner";

const LeftSidebar = ({ user }) => {
  // const [loading, setLoading] = useState(false);
  // const { user, isLoaded } = useUser();
  // const [userData, setUserData] = useState(null);

  // const getUser = async () => {
  //   try {
  //     setLoading(true);
  //     const res = await fetch(`api/user/${user?.id}`);
  //     const data = await res.json();
  //     setUserData(data);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // useEffect(() => {
  //   if (user) {
  //     getUser();
  //   }
  // }, [user]);

  return (
    
    // <div className="sidebar flexBetween flex-col gap-10 px-4">
    //   {loading || !isLoaded ? (
    //     <Spinner />
    //   ) : (
    //     userData && (
    //       <SignedIn>
    //         <UserInfo user={userData} />
    //         <NavLinks />
    //         <UserManagement />
    //       </SignedIn>
    //     )
    //   )}
    // </div>

    <div className="sidebar flexBetween flex-col gap-10 px-4">
      <SignedIn>
        <UserInfo user={user} />
        <NavLinks />
        <UserManagement />
      </SignedIn>
    </div>
  );
};
export default LeftSidebar;
