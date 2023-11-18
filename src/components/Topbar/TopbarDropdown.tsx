import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import TopbarAvatar from "./TopbarAvatar";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  RiUserLine,
  RiFolderOpenLine,
  RiSettings5Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";

function TopbarDropdown() {
  return (
    <Dropdown
      triggerClassName="items-end ms-auto"
      trigger={
        <>
          <TopbarAvatar />
          <span className="ms-2">Jhon Doe</span>
        </>
      }
    >
      <DropdownItem>
        <RiUserLine className="me-1" size={18} /> Profile
      </DropdownItem>
      <DropdownItem>
        <RiFolderOpenLine className="me-1" size={18} /> Collections
      </DropdownItem>
      <DropdownItem>
        <RiSettings5Line className="me-1" size={18} />
        Settings
      </DropdownItem>
      <Separator className="h-[1px] bg-violet6 m-[5px]" />
      <DropdownItem>
        <RiLogoutBoxRLine className="me-1" size={18} />
        Logout
      </DropdownItem>
    </Dropdown>
  );
}
export default TopbarDropdown;
