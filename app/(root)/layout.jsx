import LeftSidebar from "@/components/LeftSidebar/LeftSidebar";
import Topbar from "@/components/MainSection/Topbar";
import Bottombar from "@/components/MainSection/Bottombar";
import RightSidebar from "@/components/RightSidebar/RightSidebar";

const Layout = ({ children }) => {
  return (
    <main className="root flex gap-10">
      <aside className="hidden xl:flex">
        <LeftSidebar />
      </aside>
      <section className="no-scrollbar flex max-h-screen flex-1 flex-col items-center gap-10 overflow-y-scroll">
        <Topbar />
        <div className="flex w-full flex-1 flex-col items-center gap-10">
          {children}
        </div>
        <Bottombar />
      </section>
      <aside className="hidden xl:flex">
        <RightSidebar />
      </aside>
    </main>
  );
};
export default Layout;
