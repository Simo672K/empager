import SideBar from "../components/Sidebar/SideBar"

function Template({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full h-full flex">
      <SideBar/>
      <main className="basis-8/12">
        {children}
      </main>
    </div>
  )
}
export default Template