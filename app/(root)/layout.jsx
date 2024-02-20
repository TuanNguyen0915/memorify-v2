import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'
import RightSidebar from '@/components/RightSidebar/RightSidebar'
import Topbar from '@/components/MainSection/Topbar'
import Bottombar from '@/components/MainSection/Bottombar'

const Layout = ({children}) => {
  return (
    <main className='flex gap-10 root'>
      <aside className="hidden lg:flex">
        <LeftSidebar/>
      </aside>
      <section className='flex flex-1 flex-col items-center gap-10 overflow-y-scroll no-scrollbar'>
        <Topbar/>
        <div className='w-full flex-1 flex-col gap-10 flex items-center'>{children}</div>
        <Bottombar/>
      </section>
      <aside className="hidden lg:flex">
        <RightSidebar/>
      </aside>
    </main>
  )
}
export default Layout
