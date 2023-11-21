import { BasicExtensibleUiWidget } from "../../utils/types"

function DatagridCol({children}: BasicExtensibleUiWidget) {
  return (
    <div className="p-2 w-36">{children}</div>
  )
}
export default DatagridCol