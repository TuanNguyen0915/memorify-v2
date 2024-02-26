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


export const ads = [
  {
    imgUrl : '/assets/ualife.jpeg',
    name: "Under Armour",
    desc: "Under Armour, Inc., together with its subsidiaries, develops, markets, and distributes performance apparel, footwear, and accessories for men, women, and youth"
  }, 
  {
    imgUrl: '/assets/microcenter.jpeg',
    name: "Micro Center",
    desc: "Micro Center is among the nation's leading information technology, communications, and electronic device suppliers, operating twenty-five large stores in major markets nationwide."
  }
]