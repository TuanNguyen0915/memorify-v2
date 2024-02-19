import {SignOutButton, UserButton} from '@clerk/nextjs'
import {HiOutlineLogout} from 'react-icons/hi'

const UserManagement = () => {
  return (
    <div className='flex w-full flex-col gap-5'>
      <div className='flex items-center gap-4'>
        <UserButton afterSignOutUrl='/'/>
        <p className='text-lg'>Manage Account</p>
      </div>
      <SignOutButton className='flex items-center gap-4 group'>
        <p>
          <HiOutlineLogout className='duration-300 size-10 group-hover:text-secondary-100'/>
          <span className='text-lg duration-300 group-hover:text-secondary-100'>Log Out</span>
        </p>
      </SignOutButton>
    </div>
  )
}
export default UserManagement
