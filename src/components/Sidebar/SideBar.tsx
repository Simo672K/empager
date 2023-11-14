import SideBarNav from "./SideBarNav"
import SideBarNavLink from "./SideBarNavLink"
import SideBarSectionTitle from "./SideBarSectionTitle"
import { RiLayoutLeftLine, RiSettings5Line, RiLogoutBoxRLine, RiTimerLine, RiListCheck, RiArchiveLine } from 'react-icons/ri'
import {HiOutlineDocumentReport,HiOutlineUsers} from 'react-icons/hi'
import { BiReceipt } from 'react-icons/bi'

function SideBar() {
  return (
    <aside className="basis-2/12 bg-[#F0F0F0] px-8 py-4">
      <h2 className="text-xl font-bold">Empager</h2>
      <SideBarSectionTitle>Workspace</SideBarSectionTitle>
      <SideBarNav>
        <SideBarNavLink>
          <BiReceipt className='me-2' size={20}/>
          Overview
        </SideBarNavLink>
        <SideBarNavLink>
          <RiLayoutLeftLine className='me-2' size={20}/>
          Dashboard
        </SideBarNavLink>
        <SideBarNavLink>
          <HiOutlineUsers className='me-2' size={20}/>
          Employees
        </SideBarNavLink>
        <SideBarNavLink>
          <RiTimerLine className='me-2' size={20}/>
          Time
        </SideBarNavLink>
        <SideBarNavLink>
          <HiOutlineDocumentReport className='me-2' size={20}/>
          Reports
        </SideBarNavLink>
        <SideBarNavLink>
          <RiListCheck className='me-2' size={20}/>
          Customers
        </SideBarNavLink>
        <SideBarNavLink>
          <RiArchiveLine className='me-2' size={20}/>
          Archive
        </SideBarNavLink>
        <SideBarNavLink>
          <RiSettings5Line className='me-2' size={20}/>
          Settings
        </SideBarNavLink>
        <SideBarNavLink>
          <RiLogoutBoxRLine className='me-2' size={20}/>
          Log out
        </SideBarNavLink>
      </SideBarNav>
      <SideBarSectionTitle>Administration</SideBarSectionTitle>
    </aside>
  )
}
export default SideBar