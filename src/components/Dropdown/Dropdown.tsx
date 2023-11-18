import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { RiArrowDownSLine } from "react-icons/ri";
import { ChildProp } from "../../utils/types";

function Dropdown({ children }: ChildProp) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="bg-blue-600 hover:bg-blue-500 active:hover:bg-blue-500 text-white px-2 py-1 rounded group-first:rounded-full shadow-md font-medium flex items-center" >
          <RiArrowDownSLine />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content 
          className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >

          {children}
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
export default Dropdown;
