// "use client";
import UserInfo from "@/components/LeftSidebar/UserInfo";
import UserManagement from "@/components/LeftSidebar/UserManagement";
import NavLinks from "@/components/LeftSidebar/NavLinks";
import { SignedIn, useUser } from "@clerk/nextjs";

const LeftSidebar = ({ user }) => {
  return (
    <div className="flex-col gap-10 px-4 sidebar flexBetween">
      <SignedIn>
        <UserInfo user={user} />
        <NavLinks />
        <UserManagement />
      </SignedIn>
    </div>
  );
};
export default LeftSidebar;
