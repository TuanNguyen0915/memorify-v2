import { MdOutlineHome } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { HiBookmark } from "react-icons/hi2";
import { GoHeartFill } from "react-icons/go";

export const navLinks = [
  {
    name: "Home",
    route: "/",
    icon: <MdOutlineHome />,
  },
  {
    name: "Create Post",
    route: "/posts/create-post",
    icon: <LuImagePlus />,
  },
  {
    name: "Saved",
    route: "/saved",
    icon: <HiBookmark />,
  },
  {
    name: "Liked",
    route: "/liked",
    icon: <GoHeartFill />,
  },
  {
    name: "People",
    route: "/users",
    icon: <IoPeopleOutline />,
  },
];

export const buttons = [
  { id: 1, text: "Posts", length: "selectedUser?.posts?.length" },
  { id: 2, text: "Followers", length: "selectedUser?.followers?.length" },
  { id: 3, text: "Followings", length: "selectedUser?.followings?.length" },
];
