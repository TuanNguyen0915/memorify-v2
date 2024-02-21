"use client";

import { usePathname} from "next/navigation";
import { navLinks } from "@/constants";
import Link from "next/link";

const Bottombar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky right-0 bottom-0 left-0 z-20 w-full rounded-t-lg bg-black/80 px-6 py-4 backdrop-blur-lg flexBetween xl:hidden">
      {navLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            href={link.route}
            key={link.name}
            className={` ${
              isActive && "bg-secondary-100"
            } flex items-center gap-4 rounded-xl p-4 text-2xl duration-300 hover:bg-indigo-800`}
          >
            <p className="scale-125 flexCenter">{link.icon}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default Bottombar;
