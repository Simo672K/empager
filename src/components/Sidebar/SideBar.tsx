import SideBarNav from "./SideBarNav"
import SideBarNavLink from "./SideBarNavLink"
import SideBarSectionTitle from "./SideBarSectionTitle"
import {RiDashboard3Fill} from 'react-icons/ri'
import {FaUsers} from 'react-icons/fa'

function SideBar() {
  return (
    <aside className="basis-2/12 bg-[#F9F9F9] px-8 py-4">
      <h2 className="text-xl font-bold">Empager</h2>
      <SideBarSectionTitle>Workspace</SideBarSectionTitle>
      <SideBarNav>
        <SideBarNavLink>
          <RiDashboard3Fill className='me-2' size={24}/>
          My Time
        </SideBarNavLink>
        <SideBarNavLink>
          <FaUsers className='me-2' size={24}/>
          Employees
        </SideBarNavLink>
        <SideBarNavLink>My Time</SideBarNavLink>
        <SideBarNavLink>My Time</SideBarNavLink>
        <SideBarNavLink>My Time</SideBarNavLink>
        <SideBarNavLink>My Time</SideBarNavLink>
      </SideBarNav>
    </aside>
  )
}
export default SideBar