import SideBar from "../components/Sidebar/SideBar"
import Topbar from "../components/Topbar/Topbar"

function Template({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full h-full flex">
      <SideBar/>
      <main className="grow">
        <Topbar/>
        {children}
      </main>
    </div>
  )
}
export default Template