"use client";
import { navLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full flex-1 flex-col gap-5 border-y-4 border-white py-10">
      {navLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <div
            onClick={() => {
              router.push(link.route);
            }}
            key={link.name}
            className={`${
              isActive && "bg-primary-100 hover:text-white"
            } flex items-center gap-4 rounded-xl p-4 text-lg duration-300 hover:text-primary-100 cursor-pointer`}
          >
            <p className="flexCenter scale-150">{link.icon}</p>
            {link.name}
          </div>
        );
      })}
    </div>
  );
};
export default NavLinks;
