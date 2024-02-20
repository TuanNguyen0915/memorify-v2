'use client'

import {usePathname, useRouter} from 'next/navigation'
import {navLinks} from "@/constants";

const Bottombar = () => {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <footer className='sticky bottom-0 left-0 right-0 z-20 w-full px-4 bg-black rounded-t-lg lg:hidden'>
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
