import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const UserInfo = () => {
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
        <Image
          src='/assets/avatar.jpeg'
          alt='user avatar'
          width={70}
          height={70}
          className='rounded-full hover:shadow-secondary-100 hover:shadow-2xl'
        />
        <p className='w-full text-center text-xl'>User name</p>
      </div>
      <div className='w-full flexBetween'>
        <div className='w-full text-center'>
          <p className='text-lg font-bold'>1</p>
          <p>Posts</p>
        </div>
        <div className='w-full text-center'>
          <p className='text-lg font-bold'>0</p>
          <p>Followers</p>
        </div>
        <div className='w-full text-center'>
          <p className='text-lg font-bold'>0</p>
          <p>Following</p>
        </div>
      </div>
    </div>
  )
}
export default UserInfo
