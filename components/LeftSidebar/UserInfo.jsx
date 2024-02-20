import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const UserInfo = ({user}) => {

  return (
    <div className='flex w-full flex-col gap-10'>
      <div className='flex w-full flex-col items-center gap-8'>
        <Link href='/' className='w-full text-center text-5xl group'>
          <p className='font-bold duration-300 text-secondary-100 group-hover:text-textColor-100'>
            Merori<span className='font-bold duration-300 text-textColor-100 group-hover:text-secondary-100'>fy</span>
          </p>
        </Link>
      </div>
      <div className='w-full flex-col gap-2 flexCenter'>
        <div className='relative rounded-full w-[70px] h-[70px]'>
        <Image
          src={user.profilePhoto}
          alt='user avatar'
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className='rounded-full object-cover object-center hover:shadow-secondary-100 hover:shadow-2xl'
        />
        </div>
        <p className='w-full text-center text-xl'>{user.firstName} {user.lastName}</p>
      </div>
      <div className='w-full flexBetween'>
        <div className='w-full text-center'>
          <p className='text-lg font-bold'>later</p>
          <p>Posts</p>
        </div>
        <div className='w-full text-center'>
          <p className='text-lg font-bold'>{user.followers?.length}</p>
          <p>Followers</p>
        </div>
        <div className='w-full text-center'>
          <p className='text-lg font-bold'>{user.followings?.length}</p>
          <p>Following</p>
        </div>
      </div>
    </div>
  )
}
export default UserInfo
