import Dropdown from "../Dropdown/Dropdown"
import DropdownItem from "../Dropdown/DropdownItem"
import { RiAddLine } from 'react-icons/ri'


function SidebarDropdown() {
  return (
    <Dropdown triggerClassName="bg-blue-600 hover:bg-blue-500 active:hover:bg-blue-500 text-white px-2 py-1 rounded shadow-md">
      <DropdownItem>
        <RiAddLine size={18}/>
        New Customer
      </DropdownItem>
      <DropdownItem>
        <RiAddLine size={18}/>
        New Employee
      </DropdownItem>
    </Dropdown>
  )
}
export default SidebarDropdown