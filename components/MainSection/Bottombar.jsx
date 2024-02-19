'use client'

import {usePathname, useRouter} from 'next/navigation'
import {navLinks} from "@/constants";

const Bottombar = () => {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <footer className='sticky right-0 bottom-0 left-0 z-10 lg:hidden w-full bg-black/50 px-4'>
      <div className='w-full gap-5 py-5 flexBetween'>
        {navLinks.map((link) => {
          const isActive = pathname === link.route
          return (
            <div
              onClick={() => {
                router.push(link.route)
              }}
              key={link.name}
              className={` ${
                isActive && 'bg-secondary-100'
              } flex items-center gap-4 text-2xl p-4 rounded-xl hover:bg-indigo-800 duration-300`}
            >
              <p className='scale-125 flexCenter'>{link.icon}</p>
            </div>
          )
        })}
      </div>
    </footer>
  )
}
export default Bottombar
