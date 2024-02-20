'use client'

import {useState} from 'react'
import {LuSearch} from 'react-icons/lu'
import {useRouter} from "next/navigation";
import {TiPlus} from "react-icons/ti";
import {SignedIn, SignOutButton, UserButton} from "@clerk/nextjs";
import {HiOutlineLogout} from "react-icons/hi";

const Topbar = () => {
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  return (
    <div className='mt-6 w-full gap-10 max-lg:px-4 flexBetween lg:w-3/4'>
      <div
        className={`${
          searchText && 'opacity-100'
        } opacity-50 hover:opacity-100 group flexCenter flex-1 gap-4 px-4 py-2 rounded-lg bg-indigo-900`}
      >
        <input
          type='text'
          placeholder='Search ...'
          className='search-bar'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <LuSearch className='scale-[2]'/>
      </div>
      {/* CREATE A POST */}
      <button
        onClick={() => router.push('/create-post')}
        className='hidden gap-4 btn lg:flexCenter'>
        <TiPlus className="scale-[2]"/>
        <p className="font-semibold">New Post</p>
      </button>
      {/*SMALL VIEW*/}
      <div className='flex items-center justify-end gap-4 lg:hidden'>
        <SignedIn>
          <SignOutButton className='flex items-center size-10'>
            <HiOutlineLogout className='duration-300'/>
          </SignOutButton>
          <div className='flex items-center gap-4 size-10'>
            <UserButton afterSignOutUrl='/'/>
          </div>
        </SignedIn>
      </div>
    </div>
  )
}
export default Topbar
