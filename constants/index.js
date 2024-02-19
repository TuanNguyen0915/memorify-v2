import {MdOutlineHome} from "react-icons/md";
import {LuImagePlus} from "react-icons/lu";
import {IoPeopleOutline} from "react-icons/io5";

export const navLinks = [
  {
    name: 'Home',
    route: '/',
    icon: <MdOutlineHome/>
  }, {
    name: "Create Post",
    route: '/create-post',
    icon: <LuImagePlus/>
  }, {
    name: "People",
    route: '/user',
    icon: <IoPeopleOutline/>
  },
]