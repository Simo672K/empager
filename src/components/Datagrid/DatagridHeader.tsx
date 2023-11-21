import { BasicExtensibleUiWidget } from "../../utils/types"
import DatagridCheckbox from "./DatagridCheckbox"

function DatagridHeader({children}: BasicExtensibleUiWidget) {
  return (
    <div className="flex items-center border-b-2 font-medium uppercase">
      <DatagridCheckbox/>
      {children}
    </div>
  )
}
export default DatagridHeader