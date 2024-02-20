"use client";

import { usePathname} from "next/navigation";
import { navLinks } from "@/constants";
import Link from "next/link";

const Bottombar = () => {
  const pathname = usePathname();

  return (
    <div className="flexBetween sticky bottom-0 left-0 right-0 z-20 w-full rounded-t-lg bg-black/80 backdrop-blur-lg py-4 px-6 lg:hidden">
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
            <p className="flexCenter scale-125">{link.icon}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default Bottombar;
