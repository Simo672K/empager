import {Item} from "@radix-ui/react-dropdown-menu";
import { ChildProp } from "../../utils/types";

function DropdownItem({ children }: ChildProp) {
  return (
    <Item>
      <button className="flex hover:bg-blue-200 w-full text-start px-3 items-center">{children}</button>
    </Item>
  );
}

export default DropdownItem;
