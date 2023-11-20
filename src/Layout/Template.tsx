import Breadcrumb from "../components/Breadcrumb/Breadcrumb"
import BreadcrumbItem from "../components/Breadcrumb/BreadcrumbItem"
import SideBar from "../components/Sidebar/SideBar"
import Topbar from "../components/Topbar/Topbar"

function Template({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full h-full flex">
      <SideBar/>
      <main className="grow flex flex-col">
        <Topbar/>
        <div className="mx-10 mt-10 grow overflow-auto">
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Page 1</BreadcrumbItem>
            <BreadcrumbItem active>current</BreadcrumbItem>
          </Breadcrumb>
          {children}
        </div>
      </main>
    </div>
  )
}
export default Template