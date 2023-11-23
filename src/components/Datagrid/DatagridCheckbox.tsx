import * as Checkbox from "@radix-ui/react-checkbox";
import { RiCheckLine } from "react-icons/ri";

function DatagridCheckbox({ setChecked, checked }: {setChecked: React.Dispatch<React.SetStateAction<boolean>>, checked?:boolean} ){

  return (
    <div className="p-2 me-4">
      <Checkbox.Root
      className="h-5 w-5 border-2 rounded flex items-center justify-center aria-checked:bg-blue-100 aria-checked:border-blue-100"
      onCheckedChange={
        ()=>setChecked(prev=> !prev)
      }
      checked={checked}
      >
        <Checkbox.Indicator className="text-blue-800">
          <RiCheckLine size={20}/>
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
export default DatagridCheckbox