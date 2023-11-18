import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { RiArrowDownSLine } from "react-icons/ri";
import { DropdownProps } from "../../utils/types";

function Dropdown({
  children,
  triggerClassName,
  menuClassName,
  trigger,
}: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={`font-medium flex items-center ${triggerClassName||''}`}
        >
          {trigger}
          <RiArrowDownSLine />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={`min-w-[220px] bg-white rounded-md p-[5px] shadow-lg will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade ${menuClassName||''}`}
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
