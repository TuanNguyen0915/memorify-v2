export const metadata = {
  title: "Auth Page",
  description: "Sign-in / Sign-up"
}
const Layout = ({children}) => {
  return (
    <main className='root flexCenter'>
      {children}
    </main>
  )
}
export default Layout
