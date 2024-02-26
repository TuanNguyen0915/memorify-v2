"use client";

import { useEffect, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { TiPlus } from "react-icons/ti";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import { HiOutlineLogout } from "react-icons/hi";

const Topbar = () => {
  const [searchText, setSearchText] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  });

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.length >= 3) {
      router.push(`/search/${searchText}`);
      setSearchText("");
    } else {
      setErr("Please enter at least 3 characters ....");
      setSearchText("");
    }
  };
  return (
    <div
      className="flexBetween mt-6 w-full gap-10 max-xl:px-4 xl:w-3/4"
      ref={scrollRef}
    >
      <form
        onSubmit={handleSubmit}
        className={`${
          searchText && "opacity-100"
        } flexCenter group flex-1 gap-4 rounded-lg bg-indigo-900 px-4 py-2 opacity-50 hover:opacity-100`}
      >
        <input
          type="text"
          placeholder={`${err ? err : "Search Posts"}`}
          className={`search-bar ${err && "placeholder:text-red-500"}`}
          value={searchText}
          onChange={handleChange}
        />
        <button type="submit">
          <LuSearch className="scale-[2]" />
        </button>
      </form>
      {/* CREATE A POST */}
      <button
        onClick={() => router.push("/posts/create-post")}
        className="btn xl:flexCenter hidden gap-4"
      >
        <TiPlus className="scale-150" />
        <p className="font-semibold">New Post</p>
      </button>
      {/*SMALL VIEW*/}
      <div className="flex items-center justify-end gap-4 xl:hidden">
        <SignedIn>
          <SignOutButton className="flex size-10 items-center">
            <HiOutlineLogout className="duration-300" />
          </SignOutButton>
          <div className="flex size-10 items-center gap-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </div>
  );
};
export default Topbar;
