import UserInfo from "@/components/LeftSidebar/UserInfo";
import UserManagement from "@/components/LeftSidebar/UserManagement";
import NavLinks from "@/components/LeftSidebar/NavLinks";
import { SignedIn } from "@clerk/nextjs";

const LeftSidebar = () => {
  return (
    <div className="sidebar flexBetween flex-col gap-10 px-4">
      <SignedIn>
        <UserInfo />
        <NavLinks />
        <UserManagement />
      </SignedIn>
    </div>
  );
};
export default LeftSidebar;
