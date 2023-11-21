import { BasicExtensibleUiWidget } from "../../utils/types"
import DatagridCheckbox from "./DatagridCheckbox"

function DatagridRow({children}: BasicExtensibleUiWidget) {
  return (
    <div className="flex items-center border-b-2 hover:bg-slate-50">
      <DatagridCheckbox/>
      {children}
    </div>
  )
}
export default DatagridRow