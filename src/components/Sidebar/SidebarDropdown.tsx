import Dropdown from "../Dropdown/Dropdown"
import DropdownItem from "../Dropdown/DropdownItem"
import { RiAddLine } from 'react-icons/ri'


function SidebarDropdown() {
  return (
    <Dropdown>
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