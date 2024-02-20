"use client"
import UserInfo from '@/components/LeftSidebar/UserInfo'
import UserManagement from '@/components/LeftSidebar/UserManagement'
import NavLinks from '@/components/LeftSidebar/NavLinks'
import {SignedIn, useUser} from '@clerk/nextjs'
import {useEffect, useState} from "react";
import {PropagateSpinner} from "@/components/Spinner/Spiner";



const LeftSidebar = () => {
  const [loading, setLoading] = useState(false)
  const {user, isLoaded} = useUser()
  const [userData, setUserData] = useState({});

  const getUser = async () => {
    try {
    setLoading(true)
      const res = await  fetch(`api/user/${user.id}`)
      const data = await res.json()
      setUserData(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
      if (isLoaded) {
        getUser()
      }
    },
    [isLoaded]);

  return (
    <div className='flex-col gap-10 px-4 sidebar flexBetween'>
      {loading? (
        <PropagateSpinner/>
      ): (
      <SignedIn>
        <UserInfo user={userData && userData}/>
        <NavLinks/>
        <UserManagement/>
      </SignedIn>
      )}
    </div>
  )
}
export default LeftSidebar
