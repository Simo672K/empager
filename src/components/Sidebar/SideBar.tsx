import SideBarNav from "./SideBarNav"
import SideBarNavLink from "./SideBarNavLink"
import SideBarSectionTitle from "./SideBarSectionTitle"
import { RiLayoutLeftLine, RiSettings5Line, RiLogoutBoxRLine/*, RiTimerLine*/, RiShakeHandsLine, RiArchiveLine,RiAddLine, RiBillLine } from 'react-icons/ri'
import {HiOutlineDocumentReport,HiOutlineUsers} from 'react-icons/hi'
import GroupBtn from "../Button/GroupBtn"
import Button from "../Button/Button"
import SidebarDropdown from "./SidebarDropdown"
// import { BiReceipt } from 'react-icons/bi'

function SideBar() {
  return (
    <aside className="max-w-md bg-[#F0F0F0] px-8 py-4 flex flex-col">
      <h2 className="text-xl font-bold">Empager</h2>
      <GroupBtn className="mt-8">
        <Button variant="primary">
          <RiAddLine className='me-1' size={20}/>
          Create New
        </Button>
        <SidebarDropdown/>
      </GroupBtn>
      <SideBarSectionTitle>Workspace</SideBarSectionTitle>
      <SideBarNav>
        {/* <SideBarNavLink>
          <BiReceipt className='me-2' size={20}/>
          Overview
        </SideBarNavLink> */}
        <SideBarNavLink active>
          <RiLayoutLeftLine className='me-2' size={20}/>
          Dashboard
        </SideBarNavLink>
        <SideBarNavLink>
          <HiOutlineUsers className='me-2' size={20}/>
          Employees
        </SideBarNavLink>
        {/* <SideBarNavLink>
          <RiTimerLine className='me-2' size={20}/>
          My Time
        </SideBarNavLink> */}
        <SideBarNavLink>
          <RiShakeHandsLine className='me-2' size={20}/>
          Customers
        </SideBarNavLink>
        <SideBarNavLink>
          <RiBillLine className='me-2' size={20}/>
          Expenses
        </SideBarNavLink>
        <SideBarNavLink>
          <HiOutlineDocumentReport className='me-2' size={20}/>
          Reports
        </SideBarNavLink>
        <SideBarNavLink>
          <RiArchiveLine className='me-2' size={20}/>
          Archive
        </SideBarNavLink>
      </SideBarNav>
      {/* <SideBarSectionTitle>Administration</SideBarSectionTitle> */}

      <SideBarNav className="mt-auto">
        <SideBarNavLink className="mt-10">
          <RiSettings5Line className='me-2' size={20}/>
          Settings
        </SideBarNavLink>
        <SideBarNavLink>
          <RiLogoutBoxRLine className='me-2' size={20}/>
          Log out
        </SideBarNavLink>
      </SideBarNav>
    </aside>
  )
}
export default SideBar